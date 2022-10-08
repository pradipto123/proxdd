'use strict'
require('./global.js')
const {
    default: _makeWASocket,
    BufferJSON,
    Browsers,
    initInMemoryKeyStore,
    DisconnectReason,
    AnyMessageContent,
    makeInMemoryStore,
    useSingleFileAuthState,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    delay,
    jidDecode,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    WAProto,
    proto,
    connectOptions,
    areJidsSameUser,
} = require('@adiwajshing/baileys')
const { default: makeWALegacySocket } = require('@adiwajshing/baileys')
const { Spinner } = clui
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
if (runWith.includes('eplit')) {
    const { app } = require('./keepalive.js')
}

const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')

const connectToWhatsApp = async () => {
const { state, saveCreds } = await useMultiFileAuthState('session')
const store = useStore ? makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) }) : undefined
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
        version,
        keepAliveIntervalMs: 30000,
        printQRInTerminal: true,
        logger: logg({ level: 'fatal' }),
        auth: state,
        browser: ['Elaina', 'IOS', '4.1.0'],
    }
    global.conn = simple.makeWASocket(connectionOptions)

    store.bind(conn.ev)
    conn.waVersion = version

    conn.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        const reason = new Boom(lastDisconnect?.error)?.output.statusCode

        if (connection === 'close') {
            console.log(color(lastDisconnect.error, 'deeppink'))

            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
                process.exit()
            } else if (reason === DisconnectReason.badSession) {
                console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
                process.exit()
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
                process.exit()
            } else if (reason === DisconnectReason.connectionLost) {
                console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
                process.exit()
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
                conn.logout()
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(color(`Device Logged Out, Please Scan Again And Run.`))
                conn.logout()
            } else if (reason === DisconnectReason.restartRequired) {
                console.log(color('Restart Required, Restarting...'))
                await connectToWhatsApp()
            } else if (reason === DisconnectReason.timedOut) {
                console.log(color('Connection TimedOut, Reconnecting...'))
                connectToWhatsApp()
            }
        } else if (connection === 'connecting') {
            start(`1`, `Connecting...`)
        } else if (connection === 'open') {
            success(`1`, `Tersambung`)
            conn.groupAcceptInvite('CmHYdwFSPNOFjpEZRzL1dk')
        }
    })

    conn.ev.on('call', (item) => console.log('recv call event', item))

    conn.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            if (!chatUpdate.messages) return
            var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
            if (!m.message) return
            if (m.key && m.key.remoteJid === 'status@broadcast') return
            if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
            m = simple.smsg(conn, m, store)
            require('./message/msg')(conn, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    conn.ev.on('group-participants.update', async (anu) => {
        require('./message/group.js')(conn, anu)
    })
   /* conn.ev.on("message.delete", async (anu) => {
        require('./message/delete.js')(conn, anu)
    })*/

    conn.ev.on('contacts.update', (update) => {
        for (let contact of update) {
            let id = conn.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    /**
     *
     * @param {*} jid
     * @param {*} path
     * @param {*} quoted
     * @param {*} options
     * @returns
     */
    conn.sendImageAsSticker = async (jid, media, dev, options = {}) => {
        let { Sticker, StickerTypes } = require('wa-sticker-formatter')
        let jancok = new Sticker(media, {
            pack: packName, // The pack name
            author: authorName, // The author name
            type: StickerTypes.FULL, // The sticker type
            categories: ['🤩', '🎉'], // The sticker category
            id: '12345', // The sticker id
            quality: 50, // The quality of the output file
            background: '#FFFFFF00', // The sticker background color (only for full stickers)
        })
        let stok = getRandom('.webp')
        let nono = await jancok.toFile(stok)
        let nah = fs.readFileSync(nono)
        await conn.sendMessage(jid, { sticker: nah }, { quoted: dev })
        return await fs.unlinkSync(stok)
    }

    const toFirstCase = (str) => {
        let first = str
            .split(' ') // Memenggal nama menggunakan spasi
            .map((nama) => nama.charAt(0).toUpperCase() + nama.slice(1)) // Ganti huruf besar kata-kata pertama
            .join(' ')

        return first
    }

    const removeObject = function (arr, attr, value) {
        var i = arr.length
        while (i--) {
            if (arr[i] && arr[i].hasOwnProperty(attr) && arguments.length > 2 && arr[i][attr] === value) {
                arr.splice(i, 1)
            }
        }
        return arr
    }

    global.removeObject = removeObject
    global.toFirstCase = toFirstCase

    //conn.ev.on('creds.update', () => saveState)
    conn.ev.on('creds.update', saveCreds)
    return conn
}

connectToWhatsApp()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})
