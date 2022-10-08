const {
    default: makeWASocket,
    makeWALegacySocket,
    extractMessageContent,
    makeInMemoryStore,
    proto,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
  generateWAMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    WAMessageStubType,
  getContentType,
  relayMessage,
    WA_DEFAULT_EPHEMERAL
} = require('@adiwajshing/baileys')

const { toAudio, toPTT, toVideo } = require('./converter')
const chalk = require('chalk')
const { color} = require("./color");
const fetch = require('node-fetch')
const { banner, start, success, getGroupAdmins,close} = require("./functions");
const FileType = require('file-type')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const fs = require('fs')
const pino = require('pino') 
const path = require('path')
const {getBuffer,sleep, smsg} = require("./myfunc");

//const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
//const bind = require('./store')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const translate = require('translate-google-api')
//const translate2 = require('translate-google')
const delay = ms => (ms) && new Promise(resolve => setTimeout(resolve, ms))

exports.makeWASocket = (connectionOptions, options = {}) => {
const conn = (baileysMd ? makeWASocket : makeWALegacySocket)(connectionOptions)


conn.inspectLink = async (code) => {
const extractGroupInviteMetadata = (content) => {
const group = getBinaryNodeChild(content, "group");
const descChild = getBinaryNodeChild(group, "description");
let desc, descId;
if (descChild) {
desc = getBinaryNodeChild(descChild, "body").content.toString();
descId = descChild.attrs.id;
}
const groupId = group.attrs.id.includes("@") ? group.attrs.id : group.attrs.id + "@g.us";
const metadata = {
id: groupId,
subject: group.attrs.subject || "Tidak ada",
creator: group.attrs.creator || "Tidak terdeteksi",
creation: group.attrs.creation || "Tidak terdeteksi",
desc,
descId,
};
return metadata;
}
	
let results = await conn.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us",
},
content: [{ tag: "invite", attrs: { code } }],
});
return extractGroupInviteMetadata(results);

}





function updateNameToDb(contacts) {
    if (!contacts) return
    for (let contact of contacts) {
        let id = conn.decodeJid(contact.id)
        if (!id) continue
        let chats = conn.contacts[id]
        if (!chats) chats = { id }
        let chat = {
            ...chats,
            ...({
                ...contact, id, ...(id.endsWith('@g.us') ?
                    { subject: contact.subject || chats.subject || '' } :
                    { name: contact.notify || chats.name || chats.notify || '' })
            } || {})
        }
        conn.contacts[id] = chat
    }
}
conn.ev.on('contacts.upsert', updateNameToDb)
conn.ev.on('groups.update', updateNameToDb)

  


//LOAD MESSAGES
conn.loadMessage = (messageID) => {
return Object.entries(conn.chats)
.filter(([_, { messages }]) => typeof messages === 'object')
.find(([_, { messages }]) => Object.entries(messages)
.find(([k, v]) => (k === messageID || v.key?.id === messageID)))
?.[1].messages?.[messageID]
}

// ANTI CALL + AUTO BLOCK
conn.ws.on('CB:call', async (json) => {
//console.log(json)
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
conn.sendNode({
  tag: 'call',
    attrs: {
      from: '6289652938715@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})
if (json.content[0].tag == 'offer') {
await conn.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`})
await conn.updateBlockStatus(callerId, "block")
 }
})

//SETTING
conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
if (conn.user && conn.user.id) conn.user.jid = conn.decodeJid(conn.user.id)
conn.chats = {}
conn.contacts = {}

 /**
   * sendMessage v2
   * @param {String} chatId
   * @param {import('@adiwajshing/baileys').AnyMessageContent} message
   * @param {import('@adiwajshing/baileys').MiscMessageGenerationOptions} options
   * @returns
   */
 conn.sendMessageV2 = async (chatId, message, options = {}) => {
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await conn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
  




    

}
    conn.logger = {
        ...conn.logger,
        info(...args) { console.log(chalk.bold.rgb(57, 183, 16)(`INFO [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.cyan(...args)) },
        error(...args) { console.log(chalk.bold.rgb(247, 38, 33)(`ERROR [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.rgb(255, 38, 0)(...args)) },
        warn(...args) { console.log(chalk.bold.rgb(239, 225, 3)(`WARNING [${chalk.rgb(255, 255, 255)(new Date())}]:`), chalk.keyword('orange')(...args)) }
    }
   
    /**
     * getBuffer hehe
     * @param {String|Buffer} path
     * @param {Boolean} returnFilename
     */
    conn.getFile = async (PATH, returnAsFilename) => {
        let res, filename
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        if (data && returnAsFilename && !filename) (filename = path.join(__dirname, '../tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
        return {
            res,
            filename,
            ...type,
            data
        }
    }


    

    /**
     * waitEvent
     * @param {*} eventName 
     * @param {Boolean} is 
     * @param {Number} maxTries 
     * @returns 
     */
    conn.waitEvent = (eventName, is = () => true, maxTries = 25) => {
        return new Promise((resolve, reject) => {
            let tries = 0
            let on = (...args) => {
                if (++tries > maxTries) reject('Max tries reached')
                else if (is()) {
                    conn.ev.off(eventName, on)
                    resolve(...args)
                }
            }
            conn.ev.on(eventName, on)
        })
    }

    /**
    * Send Media All Type 
    * @param {String} jid
    * @param {String|Buffer} path
    * @param {Object} quoted
    * @param {Object} options 
    */
    conn.sendMedia = async (jid, path, quoted, options = {}) => {
        let { ext, mime, data } = await conn.getFile(path)
        messageType = mime.split("/")[0]
        pase = messageType.replace('application', 'document') || messageType
        return await conn.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
    }






    /**
    * Send Media/File with Automatic Type Specifier
    * @param {String} jid
    * @param {String|Buffer} path
    * @param {String} filename
    * @param {String} caption
    * @param {Object} quoted
    * @param {Boolean} ptt
    * @param {Object} options
    */
    conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await conn.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) } }
            catch (e) { if (e.json) throw e.json }
        }
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) if (options.asDocument) options.asDocument = true
        let mtype = '', mimetype = type.mime
        if (/webp/.test(type.mime)) mtype = 'sticker'
        else if (/image/.test(type.mime)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        return await conn.sendMessage(jid, {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }, {
            ...opt,
            ...options
        })
    }

    /**
   * Send Contact
   * @param {String} jid 
   * @param {String} number 
   * @param {String} name 
   * @param {Object} quoted 
   * @param {Object} options 
   */
    conn.sendContact = async (jid, number, name, quoted, options) => {
        let njid = number.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` 
        let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
END:VCARD
    `
        return await conn.sendMessage(jid, {
            contacts: {
                displayName: `${name}`,
                contacts: [{ vcard }],
                ...options
            }
        },
        {
             quoted,
             ...options
        })
    }

    /**
     * Send Contact Array
     * @param {String} jid 
     * @param {String} number 
     * @param {String} name 
     * @param {Object} quoted 
     * @param {Object} options 
     */
    conn.sendContactArray = async (jid, data, quoted, options) => {
        let contacts = []
        for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
            number = number.replace(/[^0-9]/g, '')
            let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
            contacts.push({ vcard, displayName: name })

        }
        return await conn.sendMessage(jid, {
            contacts: {
                displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
                contacts,
            }
        },
        {
             quoted,
             ...options
        })
    }

    
    /**
    * code 
    * text
    */
    conn.trans = async (code, text) => {
        return await translate(text, { from: 'id', to: code }).catch(async _=> await translate2(text, { from: 'id', to: code }))
    }
    /**
    *status 
    */
    conn.setStatus = async (status) => {
        return await conn.query({
            tag: 'iq',
            attrs: {
                to: 's.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [
                {
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }
            ]
        })
        // <iq to="s.whatsapp.net" type="set" xmlns="status" id="21168.6213-69"><status>"Hai, saya menggunakan WhatsApp"</status></iq>
    }

    /**
     * Reply to a message
     * @param {String} jid
     * @param {String|Object} text
     * @param {Object} quoted
     * @param {Object} mentions [m.sender]
     */
    conn.reply = (jid, text = '', quoted, options) => {
        return Buffer.isBuffer(text) ? this.sendFile(jid, text, 'file', '', quoted, false, options) : conn.sendMessage(jid, { ...options, text }, { quoted, ...options })
    }
    
    conn.replys = async(jid, text = '', quoted, options) => {
        return Buffer.isBuffer(text) ? this.sendFile(jid, text, 'file', '', quoted, false, options) : conn.sendMessage(jid, { ...options, text: await translate(text, {from: 'id', to: global.lang}).catch(async _=> await translate2(text, {from: 'id', to: global.lang})) }, { quoted, ...options })
    }
    
    
    
    /**
    * Send a list message
    * @param jid the id to send to
    * @param button the optional button text, title and description button
    * @param rows the rows of sections list message
    */
    conn.sendListM = (jid, button, rows, quoted, options = {}) => {
        const sections = [
            {
                title: button.title,
                rows: [...rows]
            }
        ]
        const listMessage = {
            text: button.description,
            footer: button.footerText,
            mentions: conn.parseMention(button.description, button.footerText),
            title: '',
            buttonText: button.buttonText,
            sections
        }
        conn.sendMessage(jid, listMessage, {
            quoted,
            ...options 
        })
    }

   
    

   
   
    
   
     
   
    /**
    * sendGroupV4Invite
    * @param {String} jid 
    * @param {*} participant 
    * @param {String} inviteCode 
    * @param {Number} inviteExpiration 
    * @param {String} groupName 
    * @param {String} caption 
    * @param {*} options 
    * @returns 
    */
    conn.sendGroupV4Invite = async(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', options = {}) => {
        let msg = proto.Message.fromObject({
            groupInviteMessage: proto.GroupInviteMessage.fromObject({
                inviteCode,
                inviteExpiration: parseInt(inviteExpiration) || + new Date(new Date + (3 * 86400000)),
                groupJid: jid,
                groupName: groupName ? groupName : this.getName(jid),
                caption
            })
        })
        let message = await this.prepareMessageFromContent(participant, msg, options)
        await this.relayWAMessage(message)
        return message
    }

    /**
    *Message
    */
    conn.relayWAMessage = async (pesanfull) => {
        if (pesanfull.message.audioMessage) {
            await conn.sendPresenceUpdate('recording', pesanfull.key.remoteJid)
        } else {
            await conn.sendPresenceUpdate('composing', pesanfull.key.remoteJid)
        }
        var mekirim = await conn.relayMessage(pesanfull.key.remoteJid, pesanfull.message, { messageId: pesanfull.key.id })
        conn.ev.emit('messages.upsert', { messages: [pesanfull], type: 'append' });
        return mekirim
    }

    /**
    * cMod
    * @param {String} jid 
    * @param {*} message 
    * @param {String} text 
    * @param {String} sender 
    * @param {*} options 
    * @returns 
    */
    conn.cMod = async (jid, message, text = '', sender = conn.user.jid, options = {}) => {
        if (options.mentions && !Array.isArray(options.mentions)) options.mentions = [options.mentions]
        let copy = message.toJSON()
        delete copy.message.messageContextInfo
        delete copy.message.senderKeyDistributionMessage
        let mtype = Object.keys(copy.message)[0]
        let msg = copy.message
        let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
        else if (content.caption) content.caption = text || content.caption
        else if (content.text) content.text = text || content.text
        if (typeof content !== 'string') {
            msg[mtype] = { ...content, ...options }
            msg[mtype].contextInfo = {
                ...(content.contextInfo || {}),
                mentionedJid: options.mentions || content.contextInfo?.mentionedJid || []
            }
        }
        if (copy.participant) sender = copy.participant = sender || copy.participant
        else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
        if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
        else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
        copy.key.remoteJid = jid
        copy.key.fromMe = areJidsSameUser(sender, conn.user.id) || false
        return proto.WebMessageInfo.fromObject(copy)
    }
    
    
    
    
    
    
    
    /**
     * Exact Copy Forward
     * @param {String} jid
     * @param {Object} message
     * @param {Boolean|Number} forwardingScore
     * @param {Object} options
     */
    conn.copyNForward = async (jid, message, forwardingScore = true, options = {}) => {
        let m = generateForwardMessageContent(message, !!forwardingScore)
        let mtype = Object.keys(m)[0]
        if (forwardingScore && typeof forwardingScore == 'number' && forwardingScore > 1) m[mtype].contextInfo.forwardingScore += forwardingScore
        m = generateWAMessageFromContent(jid, m, { ...options, userJid: conn.user.id })
        await conn.relayMessage(jid, m.message, { messageId: m.key.id, additionalAttributes: { ...options } })
        return m
    }
    
    
       
    
    
    /**
     * Download media message
     * @param {Object} m
     * @param {String} type 
     * @param {fs.PathLike|fs.promises.FileHandle} filename
     * @returns {Promise<fs.PathLike|fs.promises.FileHandle|Buffer>}
     */
    conn.downloadM = async (m, type, filename = '') => {
        if (!m || !(m.url || m.directPath)) return Buffer.alloc(0)
        const stream = await downloadContentFromMessage(m, type)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        if (filename) await fs.promises.writeFile(filename, buffer)
        return filename && fs.existsSync(filename) ? filename : buffer
    }
    
    conn.downloadMed = async (message, filename, attachExtension = true) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        //trueFileName = attachExtension ? filename : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    /**
     * Read message
     * @param {String} jid 
     * @param {String|undefined|null} participant 
     * @param {String} messageID 
     */
    conn.chatRead = async (jid, participant, messageID) => {
        return await conn.sendReadReceipt(jid, participant, [messageID])
    }

    /**
     * Parses string into mentionedJid(s)
     * @param {String} text
     */
    conn.parseMention = (text = '') => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }
    
    conn.sendStimg = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }
        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    conn.sendStvid = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }
        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    conn.saveName = async (id, name = '') => {
        if (!id) return
        id = conn.decodeJid(id)
        let isGroup = id.endsWith('@g.us')
        if (id in conn.contacts && conn.contacts[id][isGroup ? 'subject' : 'name'] && id in conn.chats) return
        let metadata = {}
        if (isGroup) metadata = await conn.groupMetadata(id)
        let chat = { ...(conn.contacts[id] || {}), id, ...(isGroup ? { subject: metadata.subject, desc: metadata.desc } : { name }) }
        conn.contacts[id] = chat
        conn.chats[id] = chat
    }

    /**
     * Get name from jid
     * @param {String} jid
     * @param {Boolean} withoutContact
     */
    conn.getName = async (jid = '', withoutContact = false) => {
        jid = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact
        let v
        if (jid.endsWith('@g.us')) return new Promise(async (resolve) => {
            v = conn.chats[jid] || {}
            if (!(v.name || v.subject)) v = await conn.groupMetadata(jid) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = jid === '0@s.whatsapp.net' ? {
            jid,
            vname: 'WhatsApp'
        } : areJidsSameUser(jid, conn.user.id) ?
            conn.user :
            (conn.chats[jid] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.vname || v.notify || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international').replace(new RegExp("[()+-/ +/]", "gi"), "") 
    }
    
    
    
    
    
    
    
    conn.processMessageStubType = async(m) => {
    /**
     * to process MessageStubType
     * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} m 
     */
    if (!m.messageStubType) return
        const chat = conn.decodeJid(m.key.remoteJid || m.message?.senderKeyDistributionMessage?.groupId || '')
    if (!chat || chat === 'status@broadcast') return
        const emitGroupUpdate = (update) => {
            ev.emit('groups.update', [{ id: chat, ...update }])
        }
        switch (m.messageStubType) {
            case WAMessageStubType.REVOKE:
            case WAMessageStubType.GROUP_CHANGE_INVITE_LINK:
            emitGroupUpdate({ revoke: m.messageStubParameters[0] })
            break
            case WAMessageStubType.GROUP_CHANGE_ICON:
            emitGroupUpdate({ icon: m.messageStubParameters[0] })
            break
            default: {
                console.log({
                    messageStubType: m.messageStubType,
                    messageStubParameters: m.messageStubParameters,
                    type: WAMessageStubType[m.messageStubType]
                })
                break
            }
        }
        const isGroup = chat.endsWith('@g.us')
        if (!isGroup) return
        let chats = conn.chats[chat]
        if (!chats) chats = conn.chats[chat] = { id: chat }
        chats.isChats = true
        const metadata = await conn.groupMetadata(chat).catch(_ => null)
        if (!metadata) return
        chats.subject = metadata.subject
        chats.metadata = metadata
    }
    conn.insertAllGroup = async() => {
        const groups = await conn.groupFetchAllParticipating().catch(_ => null) || {}
        for (const group in groups) conn.chats[group] = { ...(conn.chats[group] || {}), id: group, subject: groups[group].subject, isChats: true, metadata: groups[group] }
            return conn.chats
    }
    
   // conn.pushMessage = (m) => {
     //   if (['senderKeyDistributionMessage', 'protocolMessage'].includes(m.mtype)) return
      //  let id = m.chat
       // let chats = conn.chats[id]
       // if (!chats) chats = { id }
       // if (!chats.messages) chats.messages = {}
       // chats.messages[m.id] = JSON.stringify(m, null, 2)
    //}
    
    conn.pushMessage = async(m) => {
    /**
     * pushMessage
     * @param {import('@adiwajshing/baileys').proto.WebMessageInfo[]} m 
     */
    if (!m) return
        if (!Array.isArray(m)) m = [m]
            for (const message of m) {
                try {
                // if (!(message instanceof proto.WebMessageInfo)) continue // https://github.com/adiwajshing/Baileys/pull/696/commits/6a2cb5a4139d8eb0a75c4c4ea7ed52adc0aec20f
                if (!message) continue
                    if (message.messageStubType && message.messageStubType != WAMessageStubType.CIPHERTEXT) conn.processMessageStubType(message).catch(console.error)
                        const _mtype = Object.keys(message.message || {})
                    const mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(_mtype[0]) && _mtype[0]) ||
                    (_mtype.length >= 3 && _mtype[1] !== 'messageContextInfo' && _mtype[1]) ||
                    _mtype[_mtype.length - 1]
                    const chat = conn.decodeJid(message.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
                    if (message.message?.[mtype]?.contextInfo?.quotedMessage) {
                    /**
                     * @type {import('@adiwajshing/baileys').proto.IContextInfo}
                     */
                    let context = message.message[mtype].contextInfo
                    let participant = conn.decodeJid(context.participant)
                    const remoteJid = conn.decodeJid(context.remoteJid || participant)
                    /**
                     * @type {import('@adiwajshing/baileys').proto.IMessage}
                     * 
                     */
                    let quoted = message.message[mtype].contextInfo.quotedMessage
                    if ((remoteJid && remoteJid !== 'status@broadcast') && quoted) {
                        let qMtype = Object.keys(quoted)[0]
                        if (qMtype == 'conversation') {
                            quoted.extendedTextMessage = { text: quoted[qMtype] }
                            delete quoted.conversation
                            qMtype = 'extendedTextMessage'
                        }

                        if (!quoted[qMtype].contextInfo) quoted[qMtype].contextInfo = {}
                        quoted[qMtype].contextInfo.mentionedJid = context.mentionedJid || quoted[qMtype].contextInfo.mentionedJid || []
                        const isGroup = remoteJid.endsWith('g.us')
                        if (isGroup && !participant) participant = remoteJid
                            const qM = {
                                key: {
                                    remoteJid,
                                    fromMe: areJidsSameUser(conn.user.jid, remoteJid),
                                    id: context.stanzaId,
                                    participant,
                                },
                                message: JSON.parse(JSON.stringify(quoted)),
                                ...(isGroup ? { participant } : {})
                            }
                            let qChats = conn.chats[participant]
                            if (!qChats) qChats = conn.chats[participant] = { id: participant, isChats: !isGroup }
                                if (!qChats.messages) qChats.messages = {}
                                    if (!qChats.messages[context.stanzaId] && !qM.key.fromMe) qChats.messages[context.stanzaId] = qM
                                        let qChatsMessages
                                        if ((qChatsMessages = Object.entries(qChats.messages)).length > 40) qChats.messages = Object.fromEntries(qChatsMessages.slice(30, qChatsMessages.length)) // maybe avoid memory leak
                                    }
                            }
                            if (!chat || chat === 'status@broadcast') continue
                                const isGroup = chat.endsWith('@g.us')
                            let chats = conn.chats[chat]
                            if (!chats) {
                                if (isGroup) await conn.insertAllGroup().catch(console.error)
                                    chats = conn.chats[chat] = { id: chat, isChats: true, ...(conn.chats[chat] || {}) }
                            }
                            let metadata, sender
                            if (isGroup) {
                                if (!chats.subject || !chats.metadata) {
                                    metadata = await conn.groupMetadata(chat).catch(_ => ({})) || {}
                                    if (!chats.subject) chats.subject = metadata.subject || ''
                                    if (!chats.metadata) chats.metadata = metadata
                                }
                            sender = conn.decodeJid(message.key?.fromMe && conn.user.id || message.participant || message.key?.participant || chat || '')
                            if (sender !== chat) {
                                let chats = conn.chats[sender]
                                if (!chats) chats = conn.chats[sender] = { id: sender }
                                if (!chats.name) chats.name = message.pushName || chats.name || ''
                            }
                    } else if (!chats.name) chats.name = message.pushName || chats.name || ''
                    if (['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype)) continue
                        chats.isChats = true
                    if (!chats.messages) chats.messages = {}
                        const fromMe = message.key.fromMe || areJidsSameUser(sender || chat, conn.user.id)
                    if (!['protocolMessage'].includes(mtype) && !fromMe && message.messageStubType != WAMessageStubType.CIPHERTEXT && message.message) {
                        delete message.message.messageContextInfo
                        delete message.message.senderKeyDistributionMessage
                        chats.messages[message.key.id] = JSON.parse(JSON.stringify(message, null, 2))
                        let chatsMessages
                        if ((chatsMessages = Object.entries(chats.messages)).length > 40) chats.messages = Object.fromEntries(chatsMessages.slice(30, chatsMessages.length))
                    }
            } catch (e) {
                console.error(e)
            }
        }
    }
    
    conn.getBusinessProfile = async (jid) => {
        const results = await conn.query({
            tag: 'iq',
            attrs: {
                to: 's.whatsapp.net',
                xmlns: 'w:biz',
                type: 'get'
            },
            content: [{
                tag: 'business_profile',
                attrs: { v: '244' },
                content: [{
                    tag: 'profile',
                    attrs: { jid }
                }]
            }]
        })
        const profiles = getBinaryNodeChild(getBinaryNodeChild(results, 'business_profile'), 'profile')
        if (!profiles) return {} // if not bussines
        const address = getBinaryNodeChild(profiles, 'address')
        const description = getBinaryNodeChild(profiles, 'description')
        const website = getBinaryNodeChild(profiles, 'website')
        const email = getBinaryNodeChild(profiles, 'email')
        const category = getBinaryNodeChild(getBinaryNodeChild(profiles, 'categories'), 'category')
        return {
            jid: profiles.attrs?.jid,
            address: address?.content.toString(),
            description: description?.content.toString(),
            website: website?.content.toString(),
            email: email?.content.toString(),
            category: category?.content.toString(),
        }
    }
    /**
     * ms to date
     * @param {String} ms
     */
    conn.msToDate = (ms) => {
      let days = Math.floor(ms / (24 * 60 * 60 * 1000))
      let daysms = ms % (24 * 60 * 60 * 1000)
      let hours = Math.floor((daysms) / (60 * 60 * 1000))
      let hoursms = ms % (60 * 60 * 1000)
      let minutes = Math.floor((hoursms) / (60 * 1000))
      let minutesms = ms % (60 * 1000)
      let sec = Math.floor((minutesms) / (1000))
      return days + " Hari " + hours + " Jam " + minutes + " Menit"
    }
    
    /**
     * 
     * @param {Number} ms 
     * @returns 
     */
    conn.msToTime = (ms) => {
        let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
        let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
        let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
        return [h + ' Jam ', m + ' Menit ', s + ' Detik'].map(v => v.toString().padStart(2, 0)).join(' ')
    }
    
    /**
     * 
     * @param {Number} ms 
     * @returns 
     */
    conn.msToHour = (ms) => {
        let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
        return [h + ' Jam '].map(v => v.toString().padStart(2, 0)).join(' ')
    }
    conn.msToMinute = (ms) => {
        let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
        return [m + ' Menit '].map(v => v.toString().padStart(2, 0)).join(' ')
    }
    conn.msToSecond = (ms) => {
        let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
        return [s + ' Detik'].map(v => v.toString().padStart(2, 0)).join(' ')
    }

    /**
     * 
     * @param {Number} ms 
     * @returns 
     */
    conn.clockString = (ms) => {
        let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
        let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
        let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
        return [h + ' Jam ', m + ' Menit ', s + ' Detik'].map(v => v.toString().padStart(2, 0)).join(' ')
    }
    
    /**
     * merge arrays
     * @param {Array} arr
     */
    conn.join = (arr) => {
        let construct = []
        for (let i = 0; i < arr.length; i++) {
            construct = construct.concat(arr[i])
        }
        return construct
    }

    /**
     * 
     * @param {Array} list 
     * @returns 
     */
    conn.pickRandom = (list) => {
        return list[Math.floor(list.length * Math.random())]
    }
    
    /**
     *
     * @param(text)
     * @returns
     */
    conn.translate = async(from, text, to) => {
        return await translate(text, { from: from, to: to }).catch(async _=> await translate2(text, { from: from, to: to }))
    }

    /**
     * 
     * @param {Number} ms 
     * @returns 
     */
    conn.delay = (ms) => {
        return new Promise((resolve, reject) => setTimeout(resolve, ms))
    }

    /**
     * 
     * @param {String} text 
     * @returns 
     */
    conn.filter = (text) => {
      let mati = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
      if (/[aiueo][aiueo]([qwrtypsdfghjklzxcvbnm])?$/i.test(text)) return text.substring(text.length - 1)
      else {
        let res = Array.from(text).filter(v => mati.includes(v))
        let resu = res[res.length - 1]
        for (let huruf of mati) {
            if (text.endsWith(huruf)) {
                resu = res[res.length - 2]
            }
        }
        let misah = text.split(resu)
        return resu + misah[misah.length - 1]
      }
    }

    /**
     * 
     * @param  {...any} args 
     * @returns 
     */
    conn.format = (...args) => {
        return util.format(...args)
    }
    
    /**
     * Serialize Message, so it easier to manipulate
     * @param {Object} m
     */
    conn.serializeM = (m) => {
        return exports.smsg(conn, m)
    }



        /**
         * 
         * @param {*} jid 
         * @param {*} buttons 
         * @param {*} caption 
         * @param {*} footer 
         * @param {*} quoted 
         * @param {*} options 
         */
        conn.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
            let buttonMessage = {
                text,
                footer,
                buttons,
                headerType: 2,
                ...options
            }
            conn.sendMessage(jid, buttonMessage, { quoted, ...options })
        }
    
    
    
    
    /**
         * 
         * @param {*} jid 
         * @param {*} text 
         * @param {*} quoted 
         * @param {*} options 
         * @returns 
         */
     conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })
    
     /**
      * 
      * @param {*} jid 
      * @param {*} path 
      * @param {*} caption 
      * @param {*} quoted 
      * @param {*} options 
      * @returns 
      */
     conn.sendImage = async (jid, path, caption = '', setquoted, options) => {
    let buffer = Buffer.isBuffer(path) ? path : await getBuffer(path)
         return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted : setquoted})
     }
    
     /**
      * 
      * @param {*} jid 
      * @param {*} path 
      * @param {*} caption 
      * @param {*} quoted 
      * @param {*} options 
      * @returns 
      */
     conn.sendVideo = async (jid, yo, caption = '', quoted = '', gif = false, options) => {
         //let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
         return await conn.sendMessage(jid, { video: yo, caption: caption, gifPlayback: gif, ...options }, { quoted })
     }
    
    
    /**
         * 
         * @param {*} jid 
         * @param {*} path 
         * @param {*} quoted 
         * @param {*} mime 
         * @param {*} options 
         * @returns 
         */
     conn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
    
        
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }
    
        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     
    
    /**
     * send group invitation via message
     * @param {string} jid gorupJid 
     * @param {string} participant this message sent to?
     * @param {string} inviteCode group invite code
     * @param {Number} inviteExpiration invite expiration
     * @param {string} groupName group name
     * @param {string} jpegThumbnail file path or url
     * @param {string} caption message caption
     * @param {any} options message options
     */
     conn.sendGroupV4Invite = async(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', jpegThumbnail, caption = 'Invitation to join my WhatsApp group', options = {}) => {
        let msg = WAProto.Message.fromObject({
            groupInviteMessage: WAProto.GroupInviteMessage.fromObject({
                inviteCode,
                inviteExpiration: inviteExpiration ? parseInt(inviteExpiration) : + new Date(new Date + (3 * 86400000)),
                groupJid: jid,
                groupName: groupName ? groupName : (await conn.groupMetadata(jid)).subject,
                jpegThumbnail: jpegThumbnail ? (await getBuffer(jpegThumbnail)).buffer : '',
                caption
            })
        })
        const m = generateWAMessageFromContent(participant, msg, options)
       return await conn.relayMessage(participant, m.message, { messageId: m.key.id })
    }
    
    

    
    ///Button Text ✓
    conn.sendButMessage = async (id, text1, desc1, but = [], options  ) => {
    let buttonMessage = {
    text: text1,
    footer: desc1,
    buttons: but,
    headerType: 1
    }
    return conn.sendMessage(id, buttonMessage,{quoted: options})
    }

    
//Button template Gif ✓
conn.send5ButGif = async (id, text1, desc1, gam1, but = [],gam, options = {}) => {
const listMessage = { 
templateButtons: but,
video: gam1, 
jpegThumbnail: gam,
caption: text1, 
footer: desc1, 
gifPlayback: true }
return await conn.sendMessage(id, listMessage, options)
}

//Button template Image  ✓
conn.send5ButImg = async(id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = {
templateButtons: but,
image: gam1, 
caption: text1, 
footer: desc1 }
return await conn.sendMessage(id, listMessage, options)
}                

//Button template Loc ✓
conn.send5ButLoc = async(id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = { 
templateButtons: but,
location: { jpegThumbnail: gam1 },
caption: text1, 
footer: desc1 }
return await conn.sendMessage(id, listMessage, options)
}

//Button template Video ✓
conn.send5ButVideo = async (id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = { 
templateButtons: but,
video: gam1, 
caption: text1, 
footer: desc1 }
return await conn.sendMessage(id, listMessage, options)
}

    
    
///Button Image ✓
conn.sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
let buttonMessage = {
image: gam1,
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
return await conn.sendMessage(id, buttonMessage, options1)
}        
    

//Button Gif ✓
conn.sendButGif = async (id, text1, desc1, gam1, but = [],gam, options = {}) => {
const buttonMessage = { 
buttons: but,
video: gam1, 
jpegThumbnail: gam,
caption: text1, 
footer: desc1, 
gifPlayback: true }
return await conn.sendMessage(id, buttonMessage, options)
}    

            
//Button Video ✓
conn.sendButVideo = async (id, text1, desc1, gam1, but = [], options = {}) => {
const listMessage = { 
buttons: but,
video: gam1, 
caption: text1, 
footer: desc1 }
return await conn.sendMessage(id, listMessage, options)
}                        
                                                
///Button Loc ✓
conn.sendButLoc = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
let buttonMessage = {
location: { jpegThumbnail: gam1 } ,
caption: text1,
footer: desc1,
buttons: but,
headerType: "LOCATION"
}
return await conn.sendMessage(id, buttonMessage, options1)
}
      

//Button document ✓
conn.sendButDoc = async(id, text1, desc1, gam1, but = [], options,  options1 = {}) => {	
if(docType === "pptx"){
var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
} else if(docType === "xlsx"){
var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
} else if(docType === "zip"){
var AppType = "application/zip"
} else if(docType === "pdf"){
var AppType = "application/pdf"
} else if(docType === "docx"){
var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
} 
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./media/document/file.docx'),
mimetype: AppType, 
title : "Footer text", 
fileLength : 999999999999, 
pageCount: 100, 
fileName : botName, 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT",
jpegThumbnail: gam1
}    
return await conn.sendMessage(id, buttonMessage,options1)
} 



/*conn.sendPayment = async (jid , title = '', gam, options = {}) =>{    
let requestPaymentMessage = generateWAMessageFromContent(jid, proto.Message.fromObject({
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 100,
noteMessage: {
extendedTextMessage: {
jpegThumbnail: gam,
text: title,
},
},
},
}),
}, options)
return await conn.relayMessage(jid, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}    */
    
conn.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
   let message = await prepareWAMessageMedia({ image: gam    }, { upload: conn.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "IDR",
"priceAmount1000": "100000",
"url": `https://www.youtube.com/watch?v=TOmXzkWuCWk`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${nomerOwner}@s.whatsapp.net`
}
}, options)
return conn.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 


    //SEND 1 KONTAK
    conn.sendKontak = (jid, nomor, nama, org = "", quoted = '', opts = {} ) => {
    const vcard ="BEGIN:VCARD\n" 
    +"VERSION:3.0\n" 
    + "FN:" +nama +"\n"
     +"ORG:" + org + "\n" 
    +"TEL;type=CELL;type=VOICE;waid=" +nomor + ":+" +nomor +"\n" 
    +"item1.X-ABLabel:Ponsel\n"
    +"item2.EMAIL;type=INTERNET:okeae2410@gmail.com\n"
    +"item2.X-ABLabel:Email\nitem3.URL:https://instagram.com/cak_haho\n"
    +"item3.X-ABLabel:Instagram\n"
    +"item4.ADR:;;Indonesia;;;;\n"
    +"item4.X-ABLabel:Region\n"
    +"END:VCARD"
     conn.sendMessage(jid,{contacts: {displayName: nama, contacts: [{ vcard }] }, ...opts},{quoted})
    };
    
    
        /**
    * 
    * @param {*} message 
    * @param {*} filename 
    * @param {*} attachExtension 
    * @returns 
    */
    conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)

    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
    }
    
    conn.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.type ? message.type.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(message, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
    return buffer
    } 
    

        
    
    






























  

    Object.defineProperty(conn, 'name', {
        value: { ...(options.chats || {}) },
        configurable: true,
    })
    if (conn.user?.id) conn.user.jid = conn.decodeJid(conn.user.id)
    //bind(conn)
    store.bind(conn.ev)
    return conn


















  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {Boolean} hasParent 
 */ 
exports.smsg = (conn, m, hasParent) => {
   // if (!m) return m
let M = proto.WebMessageInfo
m = M.fromObject(m)
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || false
m.chat = conn.decodeJid(m.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
m.now = m.messageTimestamp
m.isGroup = m.chat.endsWith('@g.us')
m.sender = conn.decodeJid(m.key.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
m.fromMe = m.key.fromMe || areJidsSameUser(m.sender, conn.user.id)

}

if (m.message) {
let mtype = Object.keys(m.message)
m.mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype[0]) && mtype[0]) || // Sometimes message in the front
(mtype.length >= 3 && mtype[1] !== 'messageContextInfo' && mtype[1]) || // Sometimes message in midle if mtype length is greater than or equal to 3!
mtype[mtype.length - 1] // common case


m.type = getContentType(m.message)


m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.type])
if (m.chat == 'status@broadcast' && ['protocolMessage', 'senderKeyDistributionMessage'].includes(m.mtype)) m.chat = (m.key.remoteJid !== 'status@broadcast' && m.key.remoteJid) || m.sender
if (m.mtype == 'protocolMessage' && m.msg.key) {
if (m.msg.key.remoteJid == 'status@broadcast') m.msg.key.remoteJid = m.chat
if (!m.msg.key.participant || m.msg.key.participant == 'status_me') m.msg.key.participant = m.sender
m.msg.key.fromMe = conn.decodeJid(m.msg.key.participant) === conn.decodeJid(conn.user.id)
if (!m.msg.key.fromMe && m.msg.key.remoteJid === conn.decodeJid(conn.user.id)) m.msg.key.remoteJid = m.sender
}
  //m.msg.text || m.msg.caption || m.msg.contentText ||
m.text =   m.msg || ''
//m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
       
  /*
 if (typeof m.text !== 'string') {
            if ([
                'protocolMessage',
                'messageContextInfo',
                'stickerMessage',
                'audioMessage',
                'senderKeyDistributionMessage'
            ].includes(m.mtype)) m.text = ''
            else m.text = m.text.selectedDisplayText || m.text.hydratedTemplate?.hydratedContentText || m.text
        }


*/
  
  m.mentionedJid = m.msg?.contextInfo?.mentionedJid?.length && m.msg.contextInfo.mentionedJid || []
        let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage ? m.msg.contextInfo.quotedMessage : null
        if (m.quoted) {
            let type = Object.keys(m.quoted)[0]
            m.quoted = m.quoted[type]
            if (typeof m.quoted === 'string') m.quoted = { text: m.quoted }
            m.quoted.mtype = type
            m.quoted.id = m.msg.contextInfo.stanzaId
            m.quoted.chat = conn.decodeJid(m.msg.contextInfo.remoteJid || m.chat || m.sender)
            m.quoted.isBaileys = m.quoted.id && m.quoted.id.length === 16 || false
            m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
            m.quoted.fromMe = m.quoted.sender === conn.user.jid
            
            m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.contentText || ''
            m.quoted.name = conn.getName(m.quoted.sender)
            m.quoted.mentionedJid = m.quoted.contextInfo?.mentionedJid?.length && m.quoted.contextInfo.mentionedJid || []
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    fromMe: m.quoted.fromMe,
                    remoteJid: m.quoted.chat,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            })
            m.getQuotedObj = m.getQuotedMessage = async () => {
                if (!m.quoted.id) return null
                let q = M.fromObject(await conn.loadMessage(m.quoted.id) || vM)
                return exports.smsg(conn, q)
            }
            if (m.quoted.url || m.quoted.directPath) m.quoted.download = (saveToFile = false) => conn.downloadM(m.quoted, m.quoted.mtype.replace(/message/i, ''), saveToFile)
            
            /**
             * Reply to quoted message
             * @param {String|Object} text
             * @param {String|false} chatId
             * @param {Object} options
             */
            m.quoted.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, vM, options)
            m.quoted.replys = (text, chatId, options) => conn.replys(chatId ? chatId : m.chat, text, vM, options)
            /**
             * Copy quoted message
             */
            m.quoted.copy = () => exports.smsg(conn, M.fromObject(M.toObject(vM)))

            /**
             * Forward Quoted Message
             * @param {String} jid
             * @param {Boolean} forceForward
             */
            m.quoted.forward = (jid, forceForward = false) => conn.forwardMessage(jid, vM, forceForward)

            /**
             * Exact Forward quoted message
             * @param {String} jid
             * @param {Boolean|Number} forceForward
             * @param {Object} options
            */
            m.quoted.copyNForward = (jid, forceForward = true, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

            /**
             * Modify quoted Message
             * @param {String} jid
             * @param {String} tex
             * @param {String} sender
             * @param {Object} options
             */
            m.quoted.cMod = (jid, text = '', sender = m.quoted.sender, options = {}) => conn.cMod(jid, vM, text, sender, options)

            /**
             * Delete quoted message
             */
            m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })
        }
    }
    m.name = !nullish(m.pushName) && m.pushName || conn.getName(m.sender)
    if (m.msg && m.msg.url) m.download = (saveToFile = false) => conn.downloadM(m.msg, m.mtype.replace(/message/i, ''), saveToFile)
 
    /**
     * Reply to this message
     * @param {String|Object} text
     * @param {String|false} chatId
     * @param {Object} options
     */
    m.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, m, options)
    m.replys = (text, chatId, options) => conn.replys(chatId ? chatId : m.chat, text, m, options)
    /**
     * Exact Forward this message
     * @param {String} jid
     * @param {Boolean} forceForward
     * @param {Object} options
     */
    m.copyNForward = (jid = m.chat, forceForward = true, options = {}) => conn.copyNForward(jid, m, forceForward, options)
    /**
     * Modify this Message
     * @param {String} jid 
     * @param {String} text 
     * @param {String} sender 
     * @param {Object} options 
     */
    m.cMod = (jid, text = '', sender = m.sender, options = {}) => conn.cMod(jid, m, text, sender, options)

    /**
     * Delete this message
     */
    m.delete = () => conn.sendMessage(m.chat, { delete: m.key })
    try {
        conn.saveName(m.sender, m.name)
        conn.pushMessage(m)
        if (m.isGroup) conn.saveName(m.chat)
        if (m.msg && m.mtype == 'protocolMessage') conn.ev.emit('message.delete', m.msg.key)
    } catch (e) {
        console.error(e)
    }
    return m
}

exports.logic = (check, inp, out) => {
    if (inp.length !== out.length) throw new Error('Input and Output must have same length')
    for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i]
    return null
}

exports.protoType = () => {
  Buffer.prototype.toArrayBuffer = function toArrayBufferV2() {
    const ab = new ArrayBuffer(this.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < this.length; ++i) {
        view[i] = this[i];
    }
    return ab;
  }
  /**
   * @returns {ArrayBuffer}
   */
  Buffer.prototype.toArrayBufferV2 = function toArrayBuffer() {
    return this.buffer.slice(this.byteOffset, this.byteOffset + this.byteLength)
  }
  /**
   * @returns {Buffer}
   */
  ArrayBuffer.prototype.toBuffer = function toBuffer() {
    return Buffer.from(new Uint8Array(this))
  }
  // /**
  //  * @returns {String}
  //  */
  // Buffer.prototype.toUtilFormat = ArrayBuffer.prototype.toUtilFormat = Object.prototype.toUtilFormat = Array.prototype.toUtilFormat = function toUtilFormat() {
  //     return util.format(this)
  // }
  Uint8Array.prototype.getFileType = ArrayBuffer.prototype.getFileType = Buffer.prototype.getFileType = async function getFileType() {
    return await fileTypeFromBuffer(this)
  }
  /**
   * @returns {Boolean}
   */
  String.prototype.isNumber = Number.prototype.isNumber = isNumber
  /**
   *
   * @returns {String}
   */
  String.prototype.capitalize = function capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1, this.length)
  }
  /**
   * @returns {String}
   */
  String.prototype.capitalizeV2 = function capitalizeV2() {
    const str = this.split(' ')
    return str.map(v => v.capitalize()).join(' ')
  }
  String.prototype.decodeJid = function decodeJid() {
    if (/:\d+@/gi.test(this)) {
      const decode = jidDecode(this) || {}
      return (decode.user && decode.server && decode.user + '@' + decode.server || this).trim()
    } else return this.trim()
  }
  /**
   * number must be milliseconds
   * @returns {string}
   */
  Number.prototype.toTimeString = function toTimeString() {
    // const milliseconds = this % 1000
    const seconds = Math.floor((this / 1000) % 60)
    const minutes = Math.floor((this / (60 * 1000)) % 60)
    const hours = Math.floor((this / (60 * 60 * 1000)) % 24)
    const days = Math.floor((this / (24 * 60 * 60 * 1000)))
    return (
      (days ? `${days} day(s) ` : '') +
      (hours ? `${hours} hour(s) ` : '') +
      (minutes ? `${minutes} minute(s) ` : '') +
      (seconds ? `${seconds} second(s)` : '')
    ).trim()
  }
  Number.prototype.getRandom = String.prototype.getRandom = Array.prototype.getRandom = getRandom
}

function isNumber() {
  const int = parseInt(this)
  return typeof int === 'number' && !isNaN(int)
}

function getRandom() {
  if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
  return Math.floor(Math.random() * this)
}

/**
 * ??
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 * @returns {boolean}
 */
function nullish(args) {
  return !(args !== null && args !== undefined)
}


 let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(chalk.redBright(`Update ${__filename}`))
        delete require.cache[file]
        require(file)
    })
    