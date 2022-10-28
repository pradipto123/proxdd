global.nomerOwner = "6289616859214"
global.runWith = "panel"
global.ownerName = "maajid"
global.botName = "Elaina Botz" 
global.sessionName = "session"
global.setmenu = "document"
global.docType = "docx"
global.Qoted = "m"
global.baileysMd = true
global.multi = true
global.prefa = "."
global.Console = false
global.publik = true
global.fake = "© Elaina" 
global.Myprofile = `ᴍʏ ᴘʀᴏғɪʟᴇ`
global.Mainlagi = `ᴍᴀɪɴ ʟᴀɢɪ`
global.On = "On"
global.Off = "Off"
global.textreply = "𝑯𝒚%20𝑲𝒂𝒌,%20𝑺𝒚𝒂%20𝑴𝒂𝒖%20𝑵𝒈𝒐𝒎𝒐𝒏𝒈%20𝑲𝒂𝒍𝒐%20𝑺𝒂𝒚𝒂%20𝑳𝒂𝒈𝒊%20𝑮𝒂𝒚"
global.packName = "Elaina"
global.authorName = "Crew"
global.replyType = "web1"
global.setwelcome = "type1"
global.auto = "recording"
global.antiSpam = true
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autobio = false
global.autoSticker = true
global.autorespon = false
global.autoread = false
global.autovn = true
global.autoquoted = false
global.autobutton = true
global.gamewaktu = 60
global.limitawal = 30
global.monayawal = 1000,
global.rpg = { darahawal: 100, besiawal: 15, goldawal: 10, emeraldawal: 5, umpanawal: 5, potionawal: 1 }
global.gcounti = { prem : 60, user : 20 } 





const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






