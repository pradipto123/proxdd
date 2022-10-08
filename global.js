//================================================================================\\
const ameClient = require('amethyste-api')
const { BitlyClient } = require('bitly')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require('emoji-api')
const { exec, spawn } = require('child_process')
const { performance } = require('perf_hooks')
const acrcloud = require('acrcloud')
const { SoundCloud } = require('scdl-core')
const CuteFFMPEG = require('cute-ffmpeg').CuteFFMPEG
const { sizeFormatter } = require('human-readable')
const Spotify = require('spotifydl-core').default
const { instagramdl, instagramdlv2, instagramdlv3, instagramStory, instagramStoryv2, youtubeSearch, mediafiredl, lyricsv2, lyrics, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, twitterdl, twitterdlv2, getZodiac, liputan6, googleIt, wallpaperv2, googleImage, jadwalTVNow, gempa, stickerTelegram, stickerLine, latinToAksara, aksaraToLatin, asmaulhusna, asmaulhusnajson, alquran, delay, jadwalsholat, listJadwalSholat, gempaNow } = require('@bochilteam/scraper')
const logg = require('pino')
const clui = require('clui')
const figlet = require('figlet')
const toMs = require('ms')
const chalk = require('chalk')
const fs = require('fs')
const fse = require('fs-extra') 
const ra = require('ra-api')
const moment = require('moment-timezone')
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const hxz = require('hxz-api')
const yts = require('yt-search')
const speed = require('performance-now')
const request = require('request')
const ms = require('parse-ms')
const ytdl = require('ytdl-core')
const os = require('os')
const imageToBase64 = require('image-to-base64')
const fetch = require('node-fetch')
const Download = require('@phaticusthiccy/open-apis')
const convert = require('imagemagick')
const gis = require('g-i-s')
const stringSimilarity = require('string-similarity')
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { Boom } = require('@hapi/boom')
const cheerio = require('cheerio')
const FormData = require('form-data')
const path = require('path')
const glob = require('glob')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const Jimp = require('jimp')
const qs = require('qs')
const pino = require('pino') 
//================================================================================\\
const { color, bgcolor } = require('./lib/color') 
const { pinterest } = require('./lib/pinterest')
const { formatp, getCase, kyun, isUrl, fetchJson, fetchText, getGroupAdmins, sleep, getBuffer, reSize, smsg } = require('./lib/myfunc')
const { parseMention, FileSize, weton, week, calender, dateIslamic, formatDate, makeid, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, h2k, generateMessageID, getRandom, banner, start, success, close } = require('./lib/functions')
const { TelegraPh } = require('./lib/uploader')
const { ghstalk, facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl, pinterest2 } = require('./lib/scraper')
const { cerpen } = require('./lib/cerpen')
const Exif = require('./lib/exif')
const antivirus = require('./lib/antivirus.js')
const simple = require('./lib/simple')
const { ngazap } = require('./virtex/ngazap')
const exif = new Exif()
const oawalah = ['iya kak ?', 'Ada apa kak ?', 'Bot aktif kak', 'Aku bukan bot kak, aku ini hooman', 'Kumaha atuh kak ?', 'Kunaon kak ?', 'oy ?', 'ya ?', 'Kenapa panggil aku', 'Ada apa kak kok panggil aku', 'Naon siah kehed manggil manggil']
const b1 = ['pukulin', 'kocok']
const b2 = ['gebukin', 'santet']
const b3 = ['sayang', 'peluk']
const nomer = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const randomNomer = nomer[Math.floor(Math.random() * nomer.length)]
//================================================================================\\
global.pino = pino
global.qs = qs
global.cfonts = cfonts
global.spin = spin
global.Crypto = Crypto
global.Jimp = Jimp
global.glob = glob
global.path = path
global.FormData = FormData
global.cheerio = cheerio
global.Boom = Boom
global.PhoneNumber = PhoneNumber
global.FileType = FileType
global.logg = logg
global.clui = clui
global.figlet = figlet
global.toMs = toMs
global.chalk = chalk
global.fs = fs
global.fse = fse
global.ra = ra
global.moment = moment
global.util = util
global.exec = exec
global.spawn = spawn
global.ffmpeg = ffmpeg
global.axios = axios
global.hxz = hxz
global.emoji = new EmojiAPI()
global.yts = yts
global.speed = speed
global.request = request
global.ms = ms
global.ytdl = ytdl
global.os = os
global.performance = performance
global.imageToBase64 = imageToBase64
global.fetch = fetch
global.acr = new acrcloud({host: 'identify-eu-west-1.acrcloud.com',access_key: 'c9f2fca5e16a7986b0a6c8ff70ed0a06',access_secret: 'PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR',})
global.Download = Download
global.SoundCloud = SoundCloud
global.FFMPEGRequest = require('cute-ffmpeg').FFMPEGRequest
global.Ffmpeg = new CuteFFMPEG({overwrite: true,})
global.spotify = new Spotify({clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',})
global.hx = hxz
global.sizeFormatter = sizeFormatter
global.convert = convert
global.gis = gis
global.instagramdl = instagramdl
global.instagramdlv2 = instagramdlv2
global.instagramdlv3 = instagramdlv3
global.instagramStory = instagramStory
global.instagramStoryv2 = instagramStoryv2
global.youtubeSearch = youtubeSearch
global.mediafiredl = mediafiredl
global.lyricsv2 = lyricsv2
global.lyrics = lyrics
global.facebookdl = facebookdl
global.facebookdlv2 = facebookdlv2
global.tiktokdl = tiktokdl
global.tiktokdlv2 = tiktokdlv2
global.twitterdl = twitterdl
global.twitterdlv2 = twitterdlv2
global.getZodiac = getZodiac
global.liputan6 = liputan6
global.googleIt = googleIt
global.wallpaperv2 = wallpaperv2
global.googleImage = googleImage
global.jadwalTVNow = jadwalTVNow
global.gempa = gempa
global.stickerTelegram = stickerTelegram
global.stickerLine = stickerLine
global.latinToAksara = latinToAksara
global.aksaraToLatin = aksaraToLatin
global.asmaulhusna = asmaulhusna
global.asmaulhusnajson = asmaulhusnajson
global.alquran = alquran
global.delay = delay
global.jadwalsholat = jadwalsholat
global.listJadwalSholat = listJadwalSholat
global.gempaNow = gempaNow
global.ameApi = new ameClient('1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b')
global.bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {})
global.stringSimilarity = stringSimilarity
global.primbon = new Primbon()
//================================================================================\\
global.color = color
global.bgcolor = bgcolor
global.simple = simple
global.banner = banner
global.start = start
global.success = success
global.close = close
global.smsg = smsg
global.pinterest = pinterest
global.formatp = formatp
global.getCase = getCase
global.kyun = kyun
global.isUrl = isUrl
global.fetchJson = fetchJson
global.fetchText = fetchText
global.getGroupAdmins = getGroupAdmins
global.sleep = sleep
global.getBuffer = getBuffer
global.reSize = reSize
global.parseMention = parseMention
global.FileSize = FileSize
global.weton = weton
global.week = week
global.calender = calender
global.dateIslamic = dateIslamic
global.formatDate = formatDate
global.makeid = makeid
global.generateMessageTag = generateMessageTag
global.runtime = runtime
global.randomNomor = randomNomor
global.jsonformat = jsonformat
global.generateProfilePicture = generateProfilePicture
global.h2k = h2k
global.generateMessageID = generateMessageID
global.getRandom = getRandom
global.TelegraPh = TelegraPh
global.ghstalk = ghstalk
global.facebook = facebook
global.kodepos = kodepos
global.moddroid = moddroid
global.apkmody = apkmody
global.happymod = happymod
global.wallpaper = wallpaper
global.wikimedia = wikimedia
global.quotesAnime = quotesAnime
global.aiovideodl = aiovideodl
global.pinterest2 = pinterest2
global.cerpen = cerpen
global.antivirus = antivirus
global.exif = new Exif()
global.ngazap = ngazap
//================================================================================\\
require('./settings')
require('./lib/database')
require('./lib/antispam')
require('./lib/blockcmd')
require('./lib/banned')
require('./lib/game')
require('./lib/totalerror')
require('./lib/afk') 
require('./lib/totalcmd')
require('./lib/user') 
require('./lib/menfes') 
require('./message/help')
require('./message/stickerPack.js')
require('./message/message.js')
require('./message/vn')
//================================================================================\\
global.hayuk = oawalah[Math.floor(Math.random() * oawalah.length)]
global.bully1 = b1[Math.floor(Math.random() * b1.length)]
global.bully2 = b2[Math.floor(Math.random() * b2.length)]
global.bully3 = b3[Math.floor(Math.random() * b3.length)]
global.thumb = fs.readFileSync(`./media/image/elaina/${randomNomer}.jpg`)
//================================================================================\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})