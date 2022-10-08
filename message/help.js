const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {weton,week,calender,dateIslamic} = require('../lib/functions')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/msg.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)



let yes = "*「 _Error_ 」* ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(JSON.parse(fs.readFileSync('./database/listerror.json'))).forEach((i) => {
        if (JSON.parse(fs.readFileSync('./database/listerror.json'))[i].cmd === q) {
            status = true
        }
    })
    return status
}



global.allmenu =  (getLimit, senderNumber, getBalance, isPremium, thisHit, publik, sender, prefix, pushname) => {
try{ 
var balance =  getBalance(senderNumber).toLocaleString() 
} catch{ 
var balance = getBalance(senderNumber)
}
return `*${botName}*
${week}, ${calender} 

 ◉ Nama : ${pushname}
 ◉ Status : ${isPremium ? '🎫 Premium' : 'Free'}
 ◉ Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber)}`}
 ◉ Saldo : Rp ${balance}
 ◉ Running On : *${runWith}*
 ◉ Mode : ${publik ? "Public" : "Self"}
 ◉ Time : ${timeWib} WIB 
 ◉ Time : ${timeWit} WIT 
 ◉ Time : ${timeWita} WITA
 ◉ Islamic : ${dateIslamic}
 ◉ Hit Today : ${thisHit.toLocaleString()}
 ◉ Total Feature : ${totalFitur()}
 ◉ Total Error : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}
 ◉ Total User : ${JSON.parse(fs.readFileSync('./database/user.json')).length.toLocaleString()}
 ◉ User Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
 ◉ Cmd Blocked : ${JSON.parse(fs.readFileSync('./database/blockcmd.json')).length} 
`}

global.fitur = (prefix) => {
return`
  ╭─▸ 𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}join✓ ${feat("join")? yes :no}
  │⭔ ${prefix}bc✓ ${feat("bc")? yes :no} 
  │⭔ ${prefix}bcgc✓ ${feat("bcgc")? yes :no}
  │⭔ ${prefix}getcase✓ ${feat("getcase")? yes :no}
  │⭔ ${prefix}leave✓ ${feat("leave")? yes :no}
  │⭔ ${prefix}block✓ ${feat("block")? yes :no}
  │⭔ ${prefix}unblock✓ ${feat("unblock")? yes :no}
  │⭔ ${prefix}blockcmd✓ ${feat("blockcmd")? yes :no}
  │⭔ ${prefix}unblockcmd✓ ${feat("unblockcmd")? yes :no}
  │⭔ ${prefix}autotype✓ ${feat("autotype")? yes :no}
  │⭔ ${prefix}autolevel✓ ${feat("autolevel")? yes :no}
  │⭔ ${prefix}autobio✓ ${feat("autobio")? yes :no}
  │⭔ ${prefix}autorespon✓ ${feat("autorespon")? yes :no}
  │⭔ ${prefix}autoread✓ ${feat("autoread")? yes :no}
  │⭔ ${prefix}autosticker✓ ${feat("autosticker")? yes :no}
  │⭔ ${prefix}autovn✓ ${feat("autovn")? yes :no}
  │⭔ ${prefix}autobutton✓ ${feat("autobutton")? yes :no}
  │⭔ ${prefix}autoquoted✓ ${feat("orquoted")? yes :no}  
  │⭔ ${prefix}culik✓ ${feat("culik")? yes :no}
  │⭔ ${prefix}shutdown✓ ${feat("shutdown")? yes :no}
  │⭔ ${prefix}restart✓ ${feat("restart")? yes :no}
  │⭔ ${prefix}setprefix✓ ${feat("setprefix")? yes :no}
  │⭔ ${prefix}setmenu✓ ${feat("setmenu")? yes :no}
  │⭔ ${prefix}setreply✓ ${feat("setreply")? yes :no}
  │⭔ ${prefix}setquoted✓ ${feat("setquoted")? yes :no}
  │⭔ ${prefix}setnamebot✓ ${feat("setnamebot")? yes :no}
  │⭔ ${prefix}setppbot✓ ${feat("setppbot")? yes :no}
  │⭔ ${prefix}setbio✓ ${feat("setbio")? yes :no}   
  │⭔ ${prefix}setgif✓ ${feat("setgif")? yes :no}
  │⭔ ${prefix}setexif✓ ${feat("setexif")? yes :no}
  │⭔ ${prefix}console✓ ${feat("console")? yes :no}
  │⭔ ${prefix}public✓ ${feat("public")? yes :no}
  │⭔ ${prefix}self✓ ${feat("self")? yes :no}
  │⭔ ${prefix}setwelcome✓ ${feat("setwelcome")? yes :no}
  │⭔ ${prefix}setdocument✓ ${feat("setdocument")? yes :no}
  │⭔ ${prefix}setfake✓ ${feat("setfake")? yes :no}
  │⭔ ${prefix}settextreply✓ ${feat("settextreply")? yes :no}
  │⭔ ${prefix}setnamaowner✓ ${feat("setnamaowner")? yes :no}
  │⭔ ${prefix}setnomerowner✓ ${feat("setnomerowner")? yes :no}
  │⭔ ${prefix}setlang✓ ${feat("setlang")? yes :no}
  │⭔ ${prefix}setimgdoc✓ ${feat("setimgdoc")? yes :no}
  │⭔ ${prefix}setimgreply✓ ${feat("setimgreply")? yes :no}
  │⭔ ${prefix}setfakegif✓ ${feat("setfakegif")? yes :no}
  │⭔ ${prefix}getfile✓ ${feat("getfile")? yes :no}
  │⭔ ${prefix}spamchat✓ ${feat("spamchat")? yes :no}
  │⭔ ${prefix}bagilimit✓ ${feat("bagilimit")? yes :no}  
  │
  ╰────────────˧ 
   
  ╭─▸ 𝘎𝘳𝘰𝘶𝘱 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}antilink✓ ${feat("antilink")? yes :no}
  │⭔ ${prefix}antilinkgc✓ ${feat("antilinkgc")? yes :no}
  │⭔ ${prefix}antivirtex✓ ${feat("antivirtex")? yes :no}
  │⭔ ${prefix}antiasing✓ ${feat("antiasing")? yes :no}
  │⭔ ${prefix}antihidetag✓ ${feat("antihidetag")? yes :no}
  │⭔ ${prefix}infogc✓ ${feat("infogc")? yes :no} 
  │⭔ ${prefix}linkgc✓ ${feat("linkgc")? yes :no}
  │⭔ ${prefix}setppgc✓ ${feat("setppgc")? yes :no}
  │⭔ ${prefix}setnamagc✓ ${feat("setnamagc")? yes :no}
  │⭔ ${prefix}setdesc✓ ${feat("setdesc")? yes :no} 
  │⭔ ${prefix}gc✓ ${feat("gc")? yes :no}
  │⭔ ${prefix}revoke✓ ${feat("revoke")? yes :no}
  │⭔ ${prefix}hidetag✓ ${feat("hidetag")? yes :no}
  │⭔ ${prefix}tagall✓ ${feat("tagall")? yes :no}
  │⭔ ${prefix}kick✓ ${feat("kick")? yes :no} 
  │⭔ ${prefix}add✓ ${feat("add")? yes :no} 
  │⭔ ${prefix}demote✓ ${feat("demote")? yes :no} 
  │⭔ ${prefix}promote✓ ${feat("promote")? yes :no}
  │⭔ ${prefix}closetime✓ ${feat("closetime")? yes :no} 
  │⭔ ${prefix}opentime✓ ${feat("opentime")? yes :no}        
  │⭔ ${prefix}kickme✓ ${feat("kickme")? yes :no}
  │⭔ ${prefix}banchat✓ ${feat("banchat")? yes :no}
  │⭔ ${prefix}unbanchat✓ ${feat("unbanchat")? yes :no}
  │⭔ ${prefix}ban✓ ${feat("ban")? yes :no}
  │⭔ ${prefix}unban✓ ${feat("unban")? yes :no}
  │⭔ ${prefix}getppgc✓ ${feat("getppgc")? yes :no}
  │⭔ ${prefix}getpp✓ ${feat("getpp")? yes :no}
  │⭔ ${prefix}getname✓ ${feat("getname")? yes :no}
  │⭔ ${prefix}listonline✓ ${feat("listonline")? yes :no}
  │⭔ ${prefix}getidgc✓ ${feat("getidgc")? yes :no}
  │⭔ ${prefix}afk✓ ${feat("afk")? yes :no}
  │
  ╰────────────˧
  
  ╭─▸ 𝘛𝘰𝘰𝘭𝘴 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}menu✓ ${feat("menu")? yes :no}
  │⭔ ${prefix}del✓ ${feat("del")? yes :no}
  │⭔ ${prefix}react✓ ${feat("react")? yes :no}
  │⭔ ${prefix}info✓ ${feat("info")? yes :no}
  │⭔ ${prefix}sewa✓ ${feat("sewa")? yes :no}
  │⭔ ${prefix}status✓ ${feat("status")? yes :no}
  │⭔ ${prefix}ping✓ ${feat("ping")? yes :no}
  │⭔ ${prefix}owner✓ ${feat("owner")? yes :no}
  │⭔ ${prefix}readmore✓ ${feat("readmore")? yes :no}
  │⭔ ${prefix}infobotz✓ ${feat("infobotz")? yes :no}
  │⭔ ${prefix}runtime✓ ${feat("runtime")? yes :no}
  │⭔ ${prefix}speed✓ ${feat("speed")? yes :no}
  │⭔ ${prefix}ss✓ ${feat("ss")? yes :no}
  │⭔ ${prefix}speedtest✓ ${feat("speedtest")? yes :no}
  │⭔ ${prefix}chat✓ ${feat("chat")? yes :no}
  │⭔ ${prefix}rules✓ ${feat("rules")? yes :no}
  │⭔ ${prefix}kalkulator✓ ${feat("kalkulator")? yes :no}
  │⭔ ${prefix}listpc✓ ${feat("listpc")? yes :no}
  │⭔ ${prefix}listgc✓ ${feat("listgc")? yes :no}
  │⭔ ${prefix}inspect✓ ${feat("inspect")? yes :no}
  │⭔ ${prefix}resize✓ ${feat("resize")? yes :no}
  │⭔ ${prefix}kontak✓ ${feat("kontak")? yes :no}
  │⭔ ${prefix}cariteman✓ ${feat("cariteman")? yes :no}
  │⭔ ${prefix}profile✓ ${feat("profile")? yes :no}
  │⭔ ${prefix}getallstik✓ ${feat("getallstik")? yes :no}
  │⭔ ${prefix}ceklimit✓ ${feat("ceklimit")? yes :no} 
  │⭔ ${prefix}buylimit✓ ${feat("buylimit")? yes :no}
  │⭔ ${prefix}shop✓ ${feat("shop")? yes :no}
  │⭔ ${prefix}tr✓ ${feat("tr")? yes :no}
  │⭔ ${prefix}delsampah✓ ${feat("delsampah")? yes :no}
  │⭔ ${prefix}rank✓ ${feat("rank")? yes :no}
  │⭔ ${prefix}menfes✓ ${feat("menfes")? yes :no}
  │
  ╰────────────˧ 
  
  ╭─▸ 𝘛𝘢𝘨 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}ngewe✓ ${feat("ngewe")? yes :no}
  │⭔ ${prefix}memek✓ ${feat("memek")? yes :no}
  │⭔ ${prefix}bego✓ ${feat("bego")? yes :no}
  │⭔ ${prefix}goblok✓ ${feat("goblok")? yes :no}
  │⭔ ${prefix}janda✓ ${feat("janda")? yes :no}
  │⭔ ${prefix}perawan✓ ${feat("perawan")? yes :no}
  │⭔ ${prefix}babi✓ ${feat("babi")? yes :no}
  │⭔ ${prefix}tolol✓ ${feat("tolol")? yes :no}
  │⭔ ${prefix}pinter✓ ${feat("pinter")? yes :no}
  │⭔ ${prefix}pintar✓ ${feat("pintar")? yes :no}
  │⭔ ${prefix}asu✓ ${feat("asu")? yes :no}
  │⭔ ${prefix}bodoh✓ ${feat("bodoh")? yes :no}
  │⭔ ${prefix}gay✓ ${feat("gay")? yes :no}
  │⭔ ${prefix}lesby✓ ${feat("lesby")? yes :no}
  │⭔ ${prefix}bajingan✓ ${feat("bajingan")? yes :no}
  │⭔ ${prefix}jancok✓ ${feat("jancok")? yes :no}
  │⭔ ${prefix}anjing✓ ${feat("anjing")? yes :no}
  │⭔ ${prefix}ngentod✓ ${feat("ngentod")? yes :no}
  │⭔ ${prefix}ngentot✓ ${feat("ngentot")? yes :no}
  │⭔ ${prefix}monyet✓ ${feat("monyet")? yes :no}
  │⭔ ${prefix}mastah✓ ${feat("mastah")? yes :no}
  │⭔ ${prefix}newbie✓ ${feat("newbie")? yes :no}
  │⭔ ${prefix}bangsat✓ ${feat("bangsat")? yes :no}
  │⭔ ${prefix}bangke✓ ${feat("bangke")? yes :no}
  │⭔ ${prefix}sange✓ ${feat("sange")? yes :no}
  │⭔ ${prefix}sangean✓ ${feat("sangean")? yes :no}
  │⭔ ${prefix}dakjal✓ ${feat("dakjal")? yes :no}
  │⭔ ${prefix}horny✓ ${feat("horny")? yes :no}
  │⭔ ${prefix}wibu✓ ${feat("wibu")? yes :no}
  │⭔ ${prefix}puki✓ ${feat("puki")? yes :no}
  │⭔ ${prefix}pantex✓ ${feat("pantex")? yes :no}
  │⭔ ${prefix}pantek✓ ${feat("pantek")? yes :no} 
  │⭔ ${prefix}jadian✓ ${feat("jadian")? yes :no} 
  │⭔ ${prefix}jodohku✓ ${feat("jodohku")? yes :no} 
  │⭔ ${prefix}tagme✓ ${feat("tagme")? yes :no} 
  │⭔ ${prefix}totag✓ ${feat("totag")? yes :no} 
  │⭔ ${prefix}reqtag✓ ${feat("reqtag")? yes :no} 
  │
  ╰────────────˧ 
  
  ╭─▸ 𝘍𝘶𝘯 𝘔𝘦𝘯𝘶  
  │
  │⭔ ${prefix}cekbapak✓ ${feat("cekbapak")? yes :no}
  │⭔ ${prefix}bucin✓ ${feat("bucin")? yes :no}
  │⭔ ${prefix}katailham✓ ${feat("katailham")? yes :no}  
  │⭔ ${prefix}truth✓ ${feat("truth")? yes :no}
  │⭔ ${prefix}dare✓ ${feat("dare")? yes :no}
  │⭔ ${prefix}bisakah✓ ${feat("bisakah")? yes :no}
  │⭔ ${prefix}kapankah✓ ${feat("kapankah")? yes :no}
  │⭔ ${prefix}apakah✓ ${feat("apakah")? yes :no}
  │⭔ ${prefix}bagaimanakah✓ ${feat("bagaimanakah")? yes :no}
  │⭔ ${prefix}goblokcek✓ ${feat("goblokcek")? yes :no} 
  │⭔ ${prefix}jelekcek✓ ${feat("jelekcek")? yes :no} 
  │⭔ ${prefix}gaycek✓ ${feat("gaycek")? yes :no}
  │⭔ ${prefix}rate✓ ${feat("rate")? yes :no}
  │⭔ ${prefix}lesbicek✓ ${feat("lesbicek")? yes :no}
  │⭔ ${prefix}gantengcek✓ ${feat("gantengcek")? yes :no} 
  │⭔ ${prefix}cantikcek✓ ${feat("cantikcek")? yes :no}
  │⭔ ${prefix}begocek✓ ${feat("begocek")? yes :no} 
  │⭔ ${prefix}suhucek✓ ${feat("suhucek")? yes :no}
  │⭔ ${prefix}pintercek✓ ${feat("pintercek")? yes :no}
  │⭔ ${prefix}jagocek✓ ${feat("jagocek")? yes :no}
  │⭔ ${prefix}nolepcek✓ ${feat("nolepcek")? yes :no}
  │⭔ ${prefix}babicek✓ ${feat("babicek")? yes :no}
  │⭔ ${prefix}bebancek✓ ${feat("bebancek")? yes :no}
  │⭔ ${prefix}baikcek✓ ${feat("baikcek")? yes :no}
  │⭔ ${prefix}jahatcek✓ ${feat("jahatcek")? yes :no}
  │⭔ ${prefix}anjingcek✓ ${feat("anjingcek")? yes :no}
  │⭔ ${prefix}haramcek✓ ${feat("haramcek")? yes :no}
  │⭔ ${prefix}pakboycek✓ ${feat("pakboycek")? yes :no}
  │⭔ ${prefix}pakgirlcek✓ ${feat("pakgirlcek")? yes :no}
  │⭔ ${prefix}sangecek✓ ${feat("sangecek")? yes :no} 
  │⭔ ${prefix}bapercek✓ ${feat("bapercek")? yes :no}
  │⭔ ${prefix}fakboycek✓ ${feat("fakboycek")? yes :no}
  │⭔ ${prefix}alimcek✓ ${feat("alimcek")? yes :no}
  │⭔ ${prefix}suhucek✓ ${feat("suhucek")? yes :no}
  │⭔ ${prefix}fakgirlcek✓ ${feat("fakgirlcek")? yes :no}
  │⭔ ${prefix}kerencek✓ ${feat("kerencek")? yes :no}
  │⭔ ${prefix}wibucek✓ ${feat("wibucek")? yes :no}
  │⭔ ${prefix}pasarkascek✓ ${feat("pasarkascek")? yes :no}
  │⭔ ${prefix}kulcek✓ ${feat("kulcek")? yes :no}
  │⭔ ${prefix}watakcek✓ ${feat("watakcek")? yes :no}
  │⭔ ${prefix}hobbycek✓ ${feat("hobbycek")? yes :no}
  │⭔ ${prefix}halah✓ ${feat("halah")? yes :no}
  │⭔ ${prefix}hilih✓ ${feat("hilih")? yes :no}
  │⭔ ${prefix}huluh✓ ${feat("huluh")? yes :no}
  │⭔ ${prefix}heleh✓ ${feat("heleh")? yes :no}
  │⭔ ${prefix}holoh✓ ${feat("holoh")? yes :no}  
  │
  ╰────────────˧ 

  ╭─▸ 𝘗𝘳𝘪𝘮𝘣𝘰𝘯 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}nomerhoki✓ ${feat("nomerhoki")? yes :no} 
  │⭔ ${prefix}artimimpi✓ ${feat("artimimpi")? yes :no} 
  │⭔ ${prefix}ramalanjodoh✓ ${feat("ramalanjodoh")? yes :no} 
  │⭔ ${prefix}ramalanjodohbali✓ ${feat("ramalanjodohbali")? yes :no} 
  │⭔ ${prefix}suamiistri✓ ${feat("suamiistri")? yes :no} 
  │⭔ ${prefix}ramalancinta✓ ${feat("ramalancinta")? yes :no} 
  │⭔ ${prefix}artinama✓ ${feat("artinama")? yes :no} 
  │⭔ ${prefix}kecocokannama✓ ${feat("kecocokannama")? yes :no}
  │⭔ ${prefix}pasangan✓ ${feat("pasangan")? yes :no} 
  │⭔ ${prefix}sifatusaha✓ ${feat("sifatusaha")? yes :no} 
  │⭔ ${prefix}rejeki✓ ${feat("rejeki")? yes :no} 
  │⭔ ${prefix}pekerjaan✓ ${feat("pekerjaan")? yes :no} 
  │⭔ ${prefix}ramalannasib✓ ${feat("ramalannasib")? yes :no} 
  │⭔ ${prefix}potensipenyakit✓ ${feat("potensipenyakit")? yes :no}
  │⭔ ${prefix}fengshui✓ ${feat("fengshui")? yes :no} 
  │⭔ ${prefix}haribaik✓ ${feat("haribaik")? yes :no} 
  │⭔ ${prefix}harisangar✓ ${feat("harisangar")? yes :no} 
  │⭔ ${prefix}harinaas✓ ${feat("harinaas")? yes :no} 
  │⭔ ${prefix}nagahari✓ ${feat("nagahari")? yes :no} 
  │⭔ ${prefix}arahrejeki✓ ${feat("arahrejeki")? yes :no} 
  │⭔ ${prefix}peruntungan✓ ${feat("peruntungan")? yes :no} 
  │⭔ ${prefix}weton✓ ${feat("weton")? yes :no} 
  │⭔ ${prefix}sifat✓ ${feat("sifat")? yes :no}
  │⭔ ${prefix}keberuntungan✓ ${feat("keberuntungan")? yes :no} 
  │⭔ ${prefix}memancing✓ ${feat("memancing")? yes :no} 
  │⭔ ${prefix}masasubur✓ ${feat("masasubur")? yes :no} 
  │⭔ ${prefix}zodiak✓ ${feat("zodiak")? yes :no}
  │⭔ ${prefix}shio✓ ${feat("shio")? yes :no} 
  │
  ╰────────────˧

  ╭─▸ 𝘙𝘢𝘯𝘥𝘰𝘮 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}cogan✓ ${feat("cogan")? yes :no} 
  │⭔ ${prefix}cecan✓ ${feat("cecan")? yes :no} 
  │⭔ ${prefix}anime✓ ${feat("anime")? yes :no}
  │⭔ ${prefix}loli✓ ${feat("loli")? yes :no} 
  │⭔ ${prefix}milf✓ ${feat("milf")? yes :no} 
  │⭔ ${prefix}husbu✓ ${feat("husbu")? yes :no} 
  │⭔ ${prefix}cosplay✓ ${feat("cosplay")? yes :no} 
  │⭔ ${prefix}wallml✓ ${feat("wallml")? yes :no}
  │⭔ ${prefix}wallpapers✓ ${feat("wallpapers")? yes :no}
  │⭔ ${prefix}wallpapermobile✓ ${feat("wallpapermobile")? yes :no}
  │⭔ ${prefix}neko✓ ${feat("neko")? yes :no}
  │⭔ ${prefix}waifu✓ ${feat("waifu")? yes :no}
  │⭔ ${prefix}trap✓ ${feat("trap")? yes :no}
  │⭔ ${prefix}blowjob✓ ${feat("blowjob")? yes :no}
  │⭔ ${prefix}shinobu✓ ${feat("shinobu")? yes :no}
  │⭔ ${prefix}megumin✓ ${feat("megumin")? yes :no}
  │⭔ ${prefix}bully✓ ${feat("bully")? yes :no}
  │⭔ ${prefix}cuddle✓ ${feat("cuddle")? yes :no}
  │⭔ ${prefix}cry✓ ${feat("cry")? yes :no}
  │⭔ ${prefix}hug✓ ${feat("hug")? yes :no}
  │⭔ ${prefix}awoo✓ ${feat("awoo")? yes :no}
  │⭔ ${prefix}kiss✓ ${feat("kiss")? yes :no}
  │⭔ ${prefix}lick✓ ${feat("lick")? yes :no}
  │⭔ ${prefix}pat✓ ${feat("pat")? yes :no}
  │⭔ ${prefix}smug✓ ${feat("smug")? yes :no}
  │⭔ ${prefix}bonk✓ ${feat("bonk")? yes :no}
  │⭔ ${prefix}yeet✓ ${feat("yeet")? yes :no}
  │⭔ ${prefix}blush✓ ${feat("blush")? yes :no}
  │⭔ ${prefix}smile✓ ${feat("smile")? yes :no}
  │⭔ ${prefix}wave✓ ${feat("wave")? yes :no}
  │⭔ ${prefix}highfive✓ ${feat("highfive")? yes :no}
  │⭔ ${prefix}handhold✓ ${feat("handhold")? yes :no}
  │⭔ ${prefix}nom✓ ${feat("nom")? yes :no}
  │⭔ ${prefix}bite✓ ${feat("bite")? yes :no}
  │⭔ ${prefix}glomp✓ ${feat("glomp")? yes :no}
  │⭔ ${prefix}slap✓ ${feat("slap")? yes :no}
  │⭔ ${prefix}kill✓ ${feat("kill")? yes :no}
  │⭔ ${prefix}happy✓ ${feat("happy")? yes :no}
  │⭔ ${prefix}wink✓ ${feat("wink")? yes :no}
  │⭔ ${prefix}neko2✓ ${feat("neko2")? yes :no}
  │⭔ ${prefix}waifunime✓ ${feat("waifunime")? yes :no}
  │⭔ ${prefix}hug2✓ ${feat("hug2")? yes :no}
  │⭔ ${prefix}waifus✓ ${feat("waifus")? yes :no}
  │⭔ ${prefix}nekos✓ ${feat("nekos")? yes :no} 
  │⭔ ${prefix}luffy✓ ${feat("luffy")? yes :no}
  │⭔ ${prefix}elaina✓ ${feat("elaina")? yes :no}
  │⭔ ${prefix}zoro✓ ${feat("zoro")? yes :no}
  │⭔ ${prefix}tomori✓ ${feat("tomori")? yes :no}
  │⭔ ${prefix}gintama✓ ${feat("gintama")? yes :no}
  │⭔ ${prefix}miku✓ ${feat("miku")? yes :no}
  │⭔ ${prefix}yotsuba✓ ${feat("yotsuba")? yes :no}
  │⭔ ${prefix}onepiece✓ ${feat("onepiece")? yes :no} 
  │⭔ ${prefix}couple✓ ${feat("couple")? yes :no}
  │⭔ ${prefix}coffe✓ ${feat("coffe")? yes :no}
  │
  ╰────────────˧
  
  ╭─▸ 𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}toimg✓ ${feat("toimg")? yes :no}
  │⭔ ${prefix}tomp3✓ ${feat("tomp3")? yes :no}
  │⭔ ${prefix}tomp4✓ ${feat("tomp4")? yes :no}
  │⭔ ${prefix}toptt✓ ${feat("toptt")? yes :no}
  │⭔ ${prefix}togif✓ ${feat("togif")? yes :no}
  │⭔ ${prefix}volume✓ ${feat("volume")? yes :no}
  │⭔ ${prefix}hode✓ ${feat("hode")? yes :no}
  │⭔ ${prefix}ghost✓ ${feat("ghost")? yes :no}
  │⭔ ${prefix}nightcore✓ ${feat("nightcore")? yes :no}
  │⭔ ${prefix}tupai✓ ${feat("tupai")? yes :no}
  │⭔ ${prefix}imut✓ ${feat("imut")? yes :no}
  │
  ╰────────────˧

  ╭─▸ 𝘌𝘮𝘰𝘫𝘪 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}emojimix✓ ${feat("emojimix")? yes :no}
  │⭔ ${prefix}emojiap✓ ${feat("emojiap")? yes :no}
  │⭔ ${prefix}emojigo✓ ${feat("emojigo")? yes :no}
  │⭔ ${prefix}emojisa✓ ${feat("emojisa")? yes :no}
  │⭔ ${prefix}emojims✓ ${feat("emojims")? yes :no}
  │⭔ ${prefix}emojiwa✓ ${feat("emojiwa")? yes :no}
  │⭔ ${prefix}emojitw✓ ${feat("emojitw")? yes :no}
  │⭔ ${prefix}emojifb✓ ${feat("emojifb")? yes :no}
  │⭔ ${prefix}emojijp✓ ${feat("emojijp")? yes :no}
  │⭔ ${prefix}emojiom✓ ${feat("emojiom")? yes :no}
  │⭔ ${prefix}emojied✓ ${feat("emojied")? yes :no}
  │⭔ ${prefix}emojimes✓ ${feat("emojimes")? yes :no}
  │⭔ ${prefix}emojilt✓ ${feat("emojilt")? yes :no}
  │⭔ ${prefix}emojimo✓ ${feat("emojimo")? yes :no}
  │
  ╰────────────˧
  
  ╭─▸ 𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}sticker✓ ${feat("sticker")? yes :no}
  │⭔ ${prefix}attp✓ ${feat("attp")? yes :no}
  │⭔ ${prefix}smeme✓ ${feat("smeme")? yes :no} 
  │⭔ ${prefix}triggered✓ ${feat("triggered")? yes :no}
  │⭔ ${prefix}wasted✓ ${feat("wasted")? yes :no}
  │⭔ ${prefix}comrade✓ ${feat("comrade")? yes :no}
  │⭔ ${prefix}horny✓ ${feat("horny")? yes :no}
  │⭔ ${prefix}blur✓ ${feat("blur")? yes :no}
  │⭔ ${prefix}pixelate✓ ${feat("pixelate")? yes :no}
  │⭔ ${prefix}simpcard✓ ${feat("simpcard")? yes :no}
  │⭔ ${prefix}lolice✓ ${feat("lolice")? yes :no}
  │⭔ ${prefix}glass✓ ${feat("glass")? yes :no}
  │⭔ ${prefix}take✓ ${feat("take")? yes :no}
  │⭔ ${prefix}patrick✓ ${feat("patrick")? yes :no}
  │⭔ ${prefix}gura✓ ${feat("gura")? yes :no}
  │⭔ ${prefix}doge✓ ${feat("doge")? yes :no}
  │
  ╰────────────˧

  ╭─▸ 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳
  │
  │⭔ ${prefix}play✓ ${feat("play")? yes :no}
  │⭔ ${prefix}playmp3✓ ${feat("playmp3")? yes :no}
  │⭔ ${prefix}playmp4✓ ${feat("playmp4")? yes :no}
  │⭔ ${prefix}playmusic✓ ${feat("playmusic")? yes :no}
  │⭔ ${prefix}ig✓ ${feat("ig")? yes :no}
  │⭔ ${prefix}gimage✓ ${feat("gimage")? yes :no}
  │⭔ ${prefix}tiktoknowm✓ ${feat("tiktoknowm")? yes :no} 
  │⭔ ${prefix}tiktokmusik✓ ${feat("tiktokmusik")? yes :no}     
  │⭔ ${prefix}pinterest✓ ${feat("pinterest")? yes :no}
  │⭔ ${prefix}spotify✓ ${feat("spotify")? yes :no}
  │⭔ ${prefix}ytmp3✓ ${feat("ytmp3")? yes :no}
  │⭔ ${prefix}ytmp4✓ ${feat("ytmp4")? yes :no}
  │⭔ ${prefix}mediafire✓ ${feat("mediafire")? yes :no}
  │⭔ ${prefix}githubdl✓ ${feat("githubdl")? yes :no}
  │⭔ ${prefix}gitclone✓ ${feat("gitclone")? yes :no}
  │⭔ ${prefix}igstory✓ ${feat("igstory")? yes :no}
  │⭔ ${prefix}fb✓ ${feat("fb")? yes :no} 
  │
  ╰────────────˧

  ╭─▸ 𝘚𝘰𝘶𝘯𝘥 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}sound1✓ ${feat("sound1")? yes :no}
  │⭔ ${prefix}sound2✓ ${feat("sound2")? yes :no}
  │⭔ ${prefix}sound3✓ ${feat("sound3")? yes :no}
  │⭔ ${prefix}sound4✓ ${feat("sound4")? yes :no}
  │⭔ ${prefix}sound5✓ ${feat("sound5")? yes :no}
  │⭔ ${prefix}sound6✓ ${feat("sound6")? yes :no}
  │⭔ ${prefix}sound7✓ ${feat("sound7")? yes :no}
  │⭔ ${prefix}sound8✓ ${feat("sound8")? yes :no}
  │⭔ ${prefix}sound9✓ ${feat("sound9")? yes :no}
  │⭔ ${prefix}sound10✓ ${feat("sound10")? yes :no}
  │⭔ ${prefix}sound11✓ ${feat("sound11")? yes :no}
  │⭔ ${prefix}sound12✓ ${feat("sound12")? yes :no}
  │⭔ ${prefix}sound13✓ ${feat("sound13")? yes :no}
  │⭔ ${prefix}sound14✓ ${feat("sound14")? yes :no}
  │⭔ ${prefix}sound15✓ ${feat("sound15")? yes :no}
  │⭔ ${prefix}sound16✓ ${feat("sound16")? yes :no}
  │⭔ ${prefix}sound17✓ ${feat("sound17")? yes :no}
  │⭔ ${prefix}sound18✓ ${feat("sound18")? yes :no}
  │⭔ ${prefix}sound19✓ ${feat("sound19")? yes :no}
  │⭔ ${prefix}sound20✓ ${feat("sound20")? yes :no}
  │⭔ ${prefix}sound21✓ ${feat("sound21")? yes :no}
  │⭔ ${prefix}sound22✓ ${feat("sound22")? yes :no}
  │⭔ ${prefix}sound23✓ ${feat("sound23")? yes :no}
  │⭔ ${prefix}sound24✓ ${feat("sound24")? yes :no}
  │⭔ ${prefix}sound25✓ ${feat("sound25")? yes :no}
  │⭔ ${prefix}sound26✓ ${feat("sound26")? yes :no}
  │⭔ ${prefix}sound27✓ ${feat("sound27")? yes :no}
  │⭔ ${prefix}sound28✓ ${feat("sound28")? yes :no}
  │⭔ ${prefix}sound29✓ ${feat("sound29")? yes :no}
  │⭔ ${prefix}sound30✓ ${feat("sound30")? yes :no}
  │⭔ ${prefix}sound31✓ ${feat("sound31")? yes :no}
  │⭔ ${prefix}sound32✓ ${feat("sound32")? yes :no}
  │⭔ ${prefix}sound33✓ ${feat("sound33")? yes :no}
  │⭔ ${prefix}sound34✓ ${feat("sound34")? yes :no}
  │⭔ ${prefix}sound35✓ ${feat("sound35")? yes :no}
  │⭔ ${prefix}sound36✓ ${feat("sound36")? yes :no}
  │⭔ ${prefix}sound37✓ ${feat("sound37")? yes :no}
  │⭔ ${prefix}sound38✓ ${feat("sound38")? yes :no}
  │⭔ ${prefix}sound39✓ ${feat("sound39")? yes :no}
  │⭔ ${prefix}sound40✓ ${feat("sound40")? yes :no}
  │⭔ ${prefix}sound41✓ ${feat("sound41")? yes :no}
  │⭔ ${prefix}sound42✓ ${feat("sound42")? yes :no}
  │⭔ ${prefix}sound43✓ ${feat("sound43")? yes :no}
  │⭔ ${prefix}sound44✓ ${feat("sound44")? yes :no}
  │⭔ ${prefix}sound45✓ ${feat("sound45")? yes :no}
  │⭔ ${prefix}sound46✓ ${feat("sound46")? yes :no}
  │⭔ ${prefix}sound47✓ ${feat("sound47")? yes :no}
  │⭔ ${prefix}sound48✓ ${feat("sound48")? yes :no}
  │⭔ ${prefix}sound49✓ ${feat("sound49")? yes :no}
  │⭔ ${prefix}sound50✓ ${feat("sound50")? yes :no}
  │⭔ ${prefix}sound51✓ ${feat("sound51")? yes :no}
  │⭔ ${prefix}sound52✓ ${feat("sound52")? yes :no}
  │⭔ ${prefix}sound53✓ ${feat("sound53")? yes :no}
  │⭔ ${prefix}sound54✓ ${feat("sound54")? yes :no}
  │⭔ ${prefix}sound55✓ ${feat("sound55")? yes :no}
  │⭔ ${prefix}sound56✓ ${feat("sound56")? yes :no}
  │⭔ ${prefix}sound57✓ ${feat("sound57")? yes :no}
  │⭔ ${prefix}sound58✓ ${feat("sound58")? yes :no}
  │⭔ ${prefix}sound59✓ ${feat("sound59")? yes :no}
  │⭔ ${prefix}sound60✓ ${feat("sound60")? yes :no}
  │⭔ ${prefix}sound61✓ ${feat("sound61")? yes :no}
  │⭔ ${prefix}sound62✓ ${feat("sound62")? yes :no}
  │⭔ ${prefix}sound63✓ ${feat("sound63")? yes :no}
  │⭔ ${prefix}sound64✓ ${feat("sound64")? yes :no}
  │⭔ ${prefix}sound65✓ ${feat("sound65")? yes :no}
  │⭔ ${prefix}sound66✓ ${feat("sound66")? yes :no}
  │⭔ ${prefix}sound67✓ ${feat("sound67")? yes :no}
  │⭔ ${prefix}sound68✓ ${feat("sound68")? yes :no}
  │⭔ ${prefix}sound69✓ ${feat("sound69")? yes :no}
  │⭔ ${prefix}sound70✓ ${feat("sound70")? yes :no}
  │⭔ ${prefix}sound71✓ ${feat("sound71")? yes :no}
  │⭔ ${prefix}sound72✓ ${feat("sound72")? yes :no}
  │⭔ ${prefix}sound73✓ ${feat("sound73")? yes :no}
  │⭔ ${prefix}sound74✓ ${feat("sound74")? yes :no}
  │⭔ ${prefix}sound75✓ ${feat("sound75")? yes :no}
  │⭔ ${prefix}sound76✓ ${feat("sound76")? yes :no}
  │⭔ ${prefix}sound77✓ ${feat("sound77")? yes :no}
  │⭔ ${prefix}sound78✓ ${feat("sound78")? yes :no}
  │⭔ ${prefix}sound79✓ ${feat("sound79")? yes :no}
  │⭔ ${prefix}sound80✓ ${feat("sound80")? yes :no}
  │⭔ ${prefix}sound81✓ ${feat("sound81")? yes :no}
  │⭔ ${prefix}sound82✓ ${feat("sound82")? yes :no}
  │⭔ ${prefix}sound83✓ ${feat("sound83")? yes :no}
  │⭔ ${prefix}sound84✓ ${feat("sound84")? yes :no}
  │⭔ ${prefix}sound85✓ ${feat("sound85")? yes :no}
  │⭔ ${prefix}sound86✓ ${feat("sound86")? yes :no}
  │⭔ ${prefix}sound87✓ ${feat("sound87")? yes :no}
  │⭔ ${prefix}sound88✓ ${feat("sound88")? yes :no}
  │⭔ ${prefix}sound89✓ ${feat("sound89")? yes :no}
  │⭔ ${prefix}sound90✓ ${feat("sound90")? yes :no}
  │⭔ ${prefix}sound91✓ ${feat("sound91")? yes :no}
  │⭔ ${prefix}sound92✓ ${feat("sound92")? yes :no}
  │⭔ ${prefix}sound93✓ ${feat("sound93")? yes :no}
  │⭔ ${prefix}sound94✓ ${feat("sound94")? yes :no}
  │⭔ ${prefix}sound95✓ ${feat("sound95")? yes :no}
  │⭔ ${prefix}sound96✓ ${feat("sound96")? yes :no}
  │⭔ ${prefix}sound97✓ ${feat("sound97")? yes :no}
  │⭔ ${prefix}sound98✓ ${feat("sound98")? yes :no}
  │⭔ ${prefix}sound99✓ ${feat("sound99")? yes :no}
  │⭔ ${prefix}sound100✓ ${feat("sound100")? yes :no}
  │⭔ ${prefix}sound101✓ ${feat("sound101")? yes :no}
  │⭔ ${prefix}sound102✓ ${feat("sound102")? yes :no}
  │⭔ ${prefix}sound103✓ ${feat("sound103")? yes :no}
  │⭔ ${prefix}sound104✓ ${feat("sound104")? yes :no}
  │⭔ ${prefix}sound105✓ ${feat("sound105")? yes :no}
  │⭔ ${prefix}sound106✓ ${feat("sound106")? yes :no}
  │⭔ ${prefix}sound107✓ ${feat("sound107")? yes :no}
  │⭔ ${prefix}sound108✓ ${feat("sound108")? yes :no}
  │⭔ ${prefix}sound109✓ ${feat("sound109")? yes :no}
  │⭔ ${prefix}sound110✓ ${feat("sound110")? yes :no}
  │⭔ ${prefix}sound111✓ ${feat("sound111")? yes :no}
  │⭔ ${prefix}sound112✓ ${feat("sound112")? yes :no}
  │⭔ ${prefix}sound113✓ ${feat("sound113")? yes :no}
  │⭔ ${prefix}sound114✓ ${feat("sound114")? yes :no}
  │⭔ ${prefix}sound115✓ ${feat("sound115")? yes :no}
  │⭔ ${prefix}sound116✓ ${feat("sound116")? yes :no}
  │⭔ ${prefix}sound117✓ ${feat("sound117")? yes :no}
  │⭔ ${prefix}sound118✓ ${feat("sound118")? yes :no}
  │⭔ ${prefix}sound119✓ ${feat("sound119")? yes :no}
  │⭔ ${prefix}sound120✓ ${feat("sound120")? yes :no}
  │⭔ ${prefix}sound121✓ ${feat("sound121")? yes :no}
  │⭔ ${prefix}sound122✓ ${feat("sound122")? yes :no}
  │⭔ ${prefix}sound123✓ ${feat("sound123")? yes :no}
  │⭔ ${prefix}sound124✓ ${feat("sound124")? yes :no}
  │⭔ ${prefix}sound125✓ ${feat("sound125")? yes :no}
  │⭔ ${prefix}sound126✓ ${feat("sound126")? yes :no}
  │⭔ ${prefix}sound127✓ ${feat("sound127")? yes :no}
  │⭔ ${prefix}sound128✓ ${feat("sound128")? yes :no}
  │⭔ ${prefix}sound129✓ ${feat("sound129")? yes :no}
  │⭔ ${prefix}sound130✓ ${feat("sound130")? yes :no}
  │⭔ ${prefix}sound131✓ ${feat("sound131")? yes :no}
  │⭔ ${prefix}sound132✓ ${feat("sound132")? yes :no}
  │⭔ ${prefix}sound133✓ ${feat("sound133")? yes :no}
  │⭔ ${prefix}sound134✓ ${feat("sound134")? yes :no}
  │⭔ ${prefix}sound135✓ ${feat("sound135")? yes :no}
  │⭔ ${prefix}sound136✓ ${feat("sound136")? yes :no}
  │⭔ ${prefix}sound137✓ ${feat("sound137")? yes :no}
  │⭔ ${prefix}sound138✓ ${feat("sound138")? yes :no}
  │⭔ ${prefix}sound139✓ ${feat("sound139")? yes :no}
  │⭔ ${prefix}sound140✓ ${feat("sound140")? yes :no}
  │⭔ ${prefix}sound141✓ ${feat("sound141")? yes :no}
  │⭔ ${prefix}sound142✓ ${feat("sound142")? yes :no}
  │⭔ ${prefix}sound143✓ ${feat("sound143")? yes :no}
  │⭔ ${prefix}sound144✓ ${feat("sound144")? yes :no}
  │⭔ ${prefix}sound145✓ ${feat("sound145")? yes :no}
  │⭔ ${prefix}sound146✓ ${feat("sound146")? yes :no}
  │⭔ ${prefix}sound147✓ ${feat("sound147")? yes :no}
  │⭔ ${prefix}sound148✓ ${feat("sound148")? yes :no}
  │⭔ ${prefix}sound149✓ ${feat("sound149")? yes :no}
  │⭔ ${prefix}sound150✓ ${feat("sound150")? yes :no}
  │⭔ ${prefix}sound151✓ ${feat("sound151")? yes :no}
  │⭔ ${prefix}sound152✓ ${feat("sound152")? yes :no}
  │⭔ ${prefix}sound153✓ ${feat("sound153")? yes :no}
  │⭔ ${prefix}sound154✓ ${feat("sound154")? yes :no}
  │⭔ ${prefix}sound155✓ ${feat("sound155")? yes :no}
  │⭔ ${prefix}sound156✓ ${feat("sound156")? yes :no}
  │⭔ ${prefix}sound157✓ ${feat("sound157")? yes :no}
  │⭔ ${prefix}sound158✓ ${feat("sound158")? yes :no}
  │⭔ ${prefix}sound159✓ ${feat("sound159")? yes :no}
  │⭔ ${prefix}sound160✓ ${feat("sound160")? yes :no}
  │⭔ ${prefix}sound161✓ ${feat("sound161")? yes :no}
  │
  ╰────────────˧

  ╭─▸ 𝘛𝘦𝘹𝘵 𝘗𝘳𝘰 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}blackping✓ ${feat("blackping")? yes :no}
  │⭔ ${prefix}glitch1✓ ${feat("glitch1")? yes :no}
  │⭔ ${prefix}glitch2✓ ${feat("glitch2")? yes :no}
  │⭔ ${prefix}glitch3✓ ${feat("glitch3")? yes :no}
  │⭔ ${prefix}lion✓ ${feat("lion")? yes :no}
  │⭔ ${prefix}3dspace✓ ${feat("3dspace")? yes :no}
  │⭔ ${prefix}3dneon✓ ${feat("3dneon")? yes :no}
  │⭔ ${prefix}neon✓ ${feat("neon")? yes :no}
  │⭔ ${prefix}greenneon✓ ${feat("greenneon")? yes :no}
  │⭔ ${prefix}bokeh✓ ${feat("bokeh")? yes :no}
  │⭔ ${prefix}hollographic✓ ${feat("hollographic")? yes :no}
  │⭔ ${prefix}bear✓ ${feat("bear")? yes :no}
  │⭔ ${prefix}wolf✓ ${feat("wolf")? yes :no}
  │⭔ ${prefix}joker✓ ${feat("joker")? yes :no}
  │⭔ ${prefix}dropwater✓ ${feat("dropwater")? yes :no}
  │⭔ ${prefix}neonlight✓ ${feat("neonlight")? yes :no}
  │⭔ ${prefix}thewall✓ ${feat("thewall")? yes :no}
  │⭔ ${prefix}natural✓ ${feat("natural")? yes :no}
  │⭔ ${prefix}carbon✓ ${feat("carbon")? yes :no}
  │⭔ ${prefix}pencil✓ ${feat("pencil")? yes :no}
  │⭔ ${prefix}luxury✓ ${feat("luxury")? yes :no}
  │⭔ ${prefix}whitegold✓ ${feat("whitegold")? yes :no}
  │⭔ ${prefix}lightglow✓ ${feat("lightglow")? yes :no}
  │⭔ ${prefix}arcane✓ ${feat("arcane")? yes :no}
  │⭔ ${prefix}neonlight✓ ${feat("neonlight")? yes :no}
  │⭔ ${prefix}valentine✓ ${feat("valentine")? yes :no}
  │⭔ ${prefix}glowingneon✓ ${feat("glowingneon")? yes :no}
  │⭔ ${prefix}colorled✓ ${feat("colorled")? yes :no}
  │⭔ ${prefix}3dretro✓ ${feat("3dretro")? yes :no}
  │
  ╰────────────˧
    
  ╭─▸ 𝘐𝘮𝘢𝘨𝘦 𝘔𝘢𝘬𝘦𝘳
  │
  │⭔ ${prefix}approved✓ ${feat("approved")? yes :no}
  │⭔ ${prefix}wanted✓ ${feat("wanted")? yes :no}
  │⭔ ${prefix}utatoo✓ ${feat("utatoo")? yes :no}
  │⭔ ${prefix}unsharpen✓ ${feat("unsharpen")? yes :no}
  │⭔ ${prefix}thanos✓ ${feat("thanos")? yes :no}
  │⭔ ${prefix}sniper✓ ${feat("sniper")? yes :no}
  │⭔ ${prefix}sharpen✓ ${feat("sharpen")? yes :no}
  │⭔ ${prefix}sepia✓ ${feat("sepia")? yes :no}
  │⭔ ${prefix}scary✓ ${feat("scary")? yes :no}
  │⭔ ${prefix}rip✓ ${feat("rip")? yes :no}
  │⭔ ${prefix}redple✓ ${feat("redple")? yes :no}
  │⭔ ${prefix}rejected✓ ${feat("rejected")? yes :no}
  │⭔ ${prefix}posterize✓ ${feat("posterize")? yes :no}
  │⭔ ${prefix}ps4✓ ${feat("ps4")? yes :no}
  │⭔ ${prefix}pixelize✓ ${feat("pixelize")? yes :no}
  │⭔ ${prefix}missionpassed✓ ${feat("missionpassed")? yes :no}
  │⭔ ${prefix}moustache✓ ${feat("moustache")? yes :no}
  │⭔ ${prefix}lookwhatkarenhave✓ ${feat("lookwhatkarenhave")? yes :no}
  │⭔ ${prefix}jail✓ ${feat("jail")? yes :no}
  │⭔ ${prefix}invert✓ ${feat("invert")? yes :no}
  │⭔ ${prefix}greyscale✓ ${feat("greyscale")? yes :no}
  │⭔ ${prefix}glitch✓ ${feat("glitch")? yes :no}
  │⭔ ${prefix}frame✓ ${feat("frame")? yes :no}
  │⭔ ${prefix}fire✓ ${feat("fire")? yes :no}
  │⭔ ${prefix}distort✓ ${feat("distort")? yes :no}
  │⭔ ${prefix}dictator✓ ${feat("dictator")? yes :no}
  │⭔ ${prefix}deepfry✓ ${feat("deepfry")? yes :no}
  │⭔ ${prefix}ddungeon✓ ${feat("ddungeon")? yes :no}
  │⭔ ${prefix}circle✓ ${feat("circle")? yes :no}
  │⭔ ${prefix}challenger✓ ${feat("challenger")? yes :no}
  │⭔ ${prefix}burn✓ ${feat("burn")? yes :no}
  │⭔ ${prefix}brazzers✓ ${feat("brazzers")? yes :no}
  │⭔ ${prefix}beautiful✓ ${feat("beautiful")? yes :no}
  │⭔ ${prefix}3000years✓ ${feat("3000years")? yes :no}
  │
  ╰────────────˧

  ╭─▸ 𝘊𝘦𝘳𝘱𝘦𝘯 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}cerpen-anak✓ ${feat("cerpen-anak")? yes :no}
  │⭔ ${prefix}cerpen-bahasadaerah✓ ${feat("cerpen-bahasadaerah")? yes :no}
  │⭔ ${prefix}cerpen-bahasainggris✓ ${feat("cerpen-bahasainggris")? yes :no}
  │⭔ ${prefix}cerpen-bahasajawa✓ ${feat("cerpen-bahasajawa")? yes :no}
  │⭔ ${prefix}cerpen-bahasasunda✓ ${feat("cerpen-bahasasunda")? yes :no}
  │⭔ ${prefix}cerpen-budaya✓ ${feat("cerpen-budaya")? yes :no}
  │⭔ ${prefix}cerpen-cinta✓ ${feat("cerpen-cinta")? yes :no}
  │⭔ ${prefix}cerpen-cintaislami✓ ${feat("cerpen-cintaislami")? yes :no}
  │⭔ ${prefix}cerpen-cintapertama✓ ${feat("cerpen-cintapertama")? yes :no}
  │⭔ ${prefix}cerpen-cintaromantis✓ ${feat("cerpen-cintaromantis")? yes :no}
  │⭔ ${prefix}cerpen-cintasedih✓ ${feat("cerpen-cintasedih")? yes :no}
  │⭔ ${prefix}cerpen-cintasegitiga✓ ${feat("cerpen-cintasegitiga")? yes :no}
  │⭔ ${prefix}cerpen-cintasejati✓ ${feat("cerpen-cintasejati")? yes :no}
  │⭔ ${prefix}cerpen-galau✓ ${feat("cerpen-galau")? yes :no}
  │⭔ ${prefix}cerpen-gokil✓ ${feat("cerpen-gokil")? yes :no}
  │⭔ ${prefix}cerpen-inspiratif✓ ${feat("cerpen-inspiratif")? yes :no}
  │⭔ ${prefix}cerpen-jepang✓ ${feat("cerpen-jepang")? yes :no}
  │⭔ ${prefix}cerpen-kehidupan✓ ${feat("cerpen-kehidupan")? yes :no}
  │⭔ ${prefix}cerpen-keluarga✓ ${feat("cerpen-keluarga")? yes :no}
  │⭔ ${prefix}cerpen-kisahnyata✓ ${feat("cerpen-kisahnyata")? yes :no}
  │⭔ ${prefix}cerpen-korea✓ ${feat("cerpen-korea")? yes :no}
  │⭔ ${prefix}cerpen-kristen✓ ${feat("cerpen-kristen")? yes :no}
  │⭔ ${prefix}cerpen-liburan✓ ${feat("cerpen-liburan")? yes :no}
  │⭔ ${prefix}cerpen-malaysia✓ ${feat("cerpen-malaysia")? yes :no}
  │⭔ ${prefix}cerpen-mengharukan✓ ${feat("cerpen-mengharukan")? yes :no}
  │⭔ ${prefix}cerpen-misteri✓ ${feat("cerpen-misteri")? yes :no}
  │⭔ ${prefix}cerpen-motivasi✓ ${feat("cerpen-motivasi")? yes :no}
  │⭔ ${prefix}cerpen-nasihat✓ ${feat("cerpen-nasihat")? yes :no}
  │⭔ ${prefix}cerpen-nasionalisme✓ ${feat("cerpen-nasionalisme")? yes :no}
  │⭔ ${prefix}cerpen-olahraga✓ ${feat("cerpen-olahraga")? yes :no}
  │⭔ ${prefix}cerpen-patahhati✓ ${feat("cerpen-patahhati")? yes :no}
  │⭔ ${prefix}cerpen-penantian✓ ${feat("cerpen-penantian")? yes :no}
  │⭔ ${prefix}cerpen-pendidikan✓ ${feat("cerpen-pendidikan")? yes :no}
  │⭔ ${prefix}cerpen-pengalaman✓ ${feat("cerpen-pengalaman")? yes :no}
  │⭔ ${prefix}cerpen-pengorbanan✓ ${feat("cerpen-pengorbanan")? yes :no}
  │⭔ ${prefix}cerpen-penyesalan✓ ${feat("cerpen-penyesalan")? yes :no}
  │⭔ ${prefix}cerpen-perjuangan✓ ${feat("cerpen-perjuangan")? yes :no}
  │⭔ ${prefix}cerpen-perpisahan✓ ${feat("cerpen-perpisahan")? yes :no}
  │⭔ ${prefix}cerpen-persahabatan✓ ${feat("cerpen-persahabatan")? yes :no}
  │⭔ ${prefix}cerpen-petualangan✓ ${feat("cerpen-petualangan")? yes :no}
  │⭔ ${prefix}cerpen-ramadhan✓ ${feat("cerpen-ramadhan")? yes :no}
  │⭔ ${prefix}cerpen-remaja✓ ${feat("cerpen-remaja")? yes :no}
  │⭔ ${prefix}cerpen-rindu✓ ${feat("cerpen-rindu")? yes :no}
  │⭔ ${prefix}cerpen-rohani✓ ${feat("cerpen-rohani")? yes :no}
  │⭔ ${prefix}cerpen-romantis✓ ${feat("cerpen-romantis")? yes :no}
  │⭔ ${prefix}cerpen-sastra✓ ${feat("cerpen-sastra")? yes :no}
  │⭔ ${prefix}cerpen-sedih✓ ${feat("cerpen-sedih")? yes :no}
  │⭔ ${prefix}cerpen-sejarah✓ ${feat("cerpen-sejarah")? yes :no}
  │
  ╰────────────˧
  
  ╭─▸ 𝘚𝘦𝘢𝘳𝘤𝘩 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}scsearch✓ ${feat("scsearch")? yes :no}
  │⭔ ${prefix}scmp3✓ ${feat("scmp3")? yes :no}
  │⭔ ${prefix}scdoc✓ ${feat("scdoc")? yes :no}
  │⭔ ${prefix}ghstalk✓ ${feat("ghstalk")? yes :no}
  │⭔ ${prefix}lirik✓ ${feat("lirik")? yes :no}
  │⭔ ${prefix}grupwa✓ ${feat("grupwa")? yes :no} 
  │⭔ ${prefix}yts✓ ${feat("yts")? yes :no}
  │⭔ ${prefix}whatmusic✓ ${feat("whatmusic")? yes :no}
  │⭔ ${prefix}whatanime✓ ${feat("whatanime")? yes :no}
  │⭔ ${prefix}google✓ ${feat("google")? yes :no}
  │⭔ ${prefix}kbbi✓ ${feat("kbbi")? yes :no}
  │⭔ ${prefix}weather✓ ${feat("weather")? yes :no}
  │⭔ ${prefix}kodepos✓ ${feat("kodepos")? yes :no}
  │⭔ ${prefix}kodebahasa✓ ${feat("kodebahasa")? yes :no}
  │⭔ ${prefix}brainly✓ ${feat("brainly")? yes :no}
  │⭔ ${prefix}wallpaper✓ ${feat("wallpaper")? yes :no}
  │⭔ ${prefix}quotes✓ ${feat("quotes")? yes :no}
  │
  ╰────────────˧
  
  ╭─▸ 𝘚𝘩𝘰𝘳𝘵 𝘜𝘳𝘭
  │
  │⭔ ${prefix}tinyurl✓ ${feat("tinyurl")? yes :no}
  │⭔ ${prefix}bitly✓ ${feat("bitly")? yes :no}
  │⭔ ${prefix}cutly✓ ${feat("cutly")? yes :no}
  │⭔ ${prefix}tourl✓ ${feat("tourl")? yes :no}
  │
  ╰────────────˧

  ╭─▸ 𝘚𝘵𝘰𝘳𝘢𝘨𝘦
  │
  │⭔ ${prefix}adderror✓ ${feat("adderror")? yes :no}
  │⭔ ${prefix}addstik✓ ${feat("addstik")? yes :no}
  │⭔ ${prefix}addvn✓ ${feat("addvn")? yes :no}  
  │⭔ ${prefix}delerror✓ ${feat("delerror")? yes :no}
  │⭔ ${prefix}delstik✓ ${feat("delstik")? yes :no}
  │⭔ ${prefix}delvn✓ ${feat("delvn")? yes :no}  
  │⭔ ${prefix}listerror✓ ${feat("listerror")? yes :no}
  │⭔ ${prefix}liststik✓ ${feat("liststik")? yes :no}
  │⭔ ${prefix}listvn✓ ${feat("listvn")? yes :no}  
  │⭔ ${prefix}listban✓ ${feat("listban")? yes :no}
  │⭔ ${prefix}listblockcmd✓ ${feat("listblockcmd")? yes :no}
  │⭔ ${prefix}clearallerror✓ ${feat("clearallerror")? yes :no}
  │⭔ ${prefix}clearallstik✓ ${feat("clearallstik")? yes :no}
  │⭔ ${prefix}clearallvn✓ ${feat("clearallvn")? yes :no}  
  │⭔ ${prefix}clearallban✓ ${feat("clearallban")? yes :no}
  │⭔ ${prefix}clearallUser✓ ${feat("clearallUser")? yes :no}
  │
  ╰────────────˧
   
  ╭─▸ 𝘐𝘴𝘭𝘢𝘮𝘪𝘤
  │
  │⭔ ${prefix}hadis✓ ${feat("hadis")? yes :no}
  │⭔ ${prefix}alquran✓ ${feat("alquran")? yes :no}
  │⭔ ${prefix}tafsirsurah✓ ${feat("tafsirsurah")? yes :no}
  │
  ╰────────────˧
   
  ╭─▸ 𝘎𝘢𝘮𝘦
  │
  │⭔ ${prefix}math✓ ${feat("math")? yes :no}  
  │⭔ ${prefix}tebakgambar✓ ${feat("tebakgambar")? yes :no}
  │⭔ ${prefix}caklontong✓ ${feat("caklontong")? yes :no}
  │⭔ ${prefix}tebakkata✓ ${feat("tebakkata")? yes :no}
  │⭔ ${prefix}tebakkalimat✓ ${feat("tebakkalimat")? yes :no}
  │⭔ ${prefix}siapaaku✓ ${feat("siapaaku")? yes :no}
  │⭔ ${prefix}tebaklirik✓ ${feat("tebaklirik")? yes :no}
  │⭔ ${prefix}tebaktebakan✓ ${feat("tebaktebakan")? yes :no}
  │⭔ ${prefix}susunkata✓ ${feat("susunkata")? yes :no}
  │⭔ ${prefix}tebakbendera✓ ${feat("tebakbendera")? yes :no}
  │
  ╰────────────˧
   
  ╭─▸ 𝘙𝘱𝘨 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}leaderboard✓ ${feat("leaderboard")? yes :no}
  │⭔ ${prefix}mining✓ ${feat("mining")? yes :no}
  │⭔ ${prefix}beli✓ ${feat("beli")? yes :no}
  │⭔ ${prefix}sel✓ ${feat("sel")? yes :no} 
  │⭔ ${prefix}heal✓ ${feat("heal")? yes :no}
  │⭔ ${prefix}berburu✓ ${feat("berburu")? yes :no}
  │⭔ ${prefix}inventori✓ ${feat("inventori")? yes :no}
  │⭔ ${prefix}mancing✓ ${feat("mancing")? yes :no}
  │⭔ ${prefix}darah✓ ${feat("darah")? yes :no}
  │⭔ ${prefix}goreng✓ ${feat("goreng")? yes :no}
  │⭔ ${prefix}tukar✓ ${feat("tukar")? yes :no}
  │⭔ ${prefix}nyopet✓ ${feat("nyopet")? yes :no}
  │
  ╰────────────˧
          
  ╭─▸ 𝘈𝘯𝘰𝘯𝘺𝘮𝘰𝘶𝘴 𝘊𝘩𝘢𝘵
  │
  │⭔ ${prefix}anonymous✓ ${feat("anonymous")? yes :no}
  │⭔ ${prefix}start✓ ${feat("start")? yes :no}
  │⭔ ${prefix}startchat✓ ${feat("startchat")? yes :no}
  │⭔ ${prefix}keluar✓ ${feat("keluar")? yes :no}
  │⭔ ${prefix}next✓ ${feat("next")? yes :no}
  │⭔ ${prefix}sendkontak✓ ${feat("sendkontak")? yes :no}
  │⭔ ${prefix}invite✓ ${feat("invite")? yes :no}
  │⭔ ${prefix}joinchat✓ ${feat("joinchat")? yes :no}
  │
  ╰────────────˧

  ╭─▸ 𝘌𝘯𝘤𝘳𝘺𝘱𝘵
  │
  │⭔ ${prefix}obfus✓ ${feat("obfus")? yes :no}
  │⭔ ${prefix}deobfus✓ ${feat("deobfus")? yes :no}
  │⭔ ${prefix}packer✓ ${feat("packer")? yes :no}
  │
  ╰────────────˧

  ╭─▸ 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦
  │
  │⭔ ${prefix}addowner✓ ${feat("addowner")? yes :no}
  │⭔ ${prefix}addlimit✓ ${feat("addlimit")? yes :no} 
  │⭔ ${prefix}addprem✓ ${feat("addprem")? yes :no}
  │⭔ ${prefix}addsaldo✓ ${feat("addsaldo")? yes :no}
  │⭔ ${prefix}addsewa✓ ${feat("addsewa")? yes :no}
  │⭔ ${prefix}delowner✓ ${feat("delowner")? yes :no}
  │⭔ ${prefix}dellimit✓ ${feat("dellimit")? yes :no}
  │⭔ ${prefix}delprem✓ ${feat("delprem")? yes :no}
  │⭔ ${prefix}delsewa✓ ${feat("delsewa")? yes :no}
  │⭔ ${prefix}delsaldo✓ ${feat("delsaldo")? yes :no}
  │⭔ ${prefix}listowner✓ ${feat("listowner")? yes :no}
  │⭔ ${prefix}listlimit✓ ${feat("listlimit")? yes :no}
  │⭔ ${prefix}listprem✓ ${feat("listprem")? yes :no}
  │⭔ ${prefix}listsewa✓ ${feat("listsewa")? yes :no}
  │⭔ ${prefix}clearallowner✓ ${feat("clearallowner")? yes :no}
  │⭔ ${prefix}clearallprem✓ ${feat("clearallprem")? yes :no}
  │⭔ ${prefix}clearallsewa✓ ${feat("clearallsewa")? yes :no}
  │
  ╰────────────˧

  ╭─▸ 𝘉𝘶𝘨 𝘔𝘦𝘯𝘶
  │
  │⭔ ${prefix}santed✓ ${feat("santed")? yes :no}
  │⭔ ${prefix}santedgc✓ ${feat("santedgc")? yes :no}
  │⭔ ${prefix}bugdelete✓ ${feat("bugdelete")? yes :no}
  │⭔ ${prefix}buginvite✓ ${feat("buginvite")? yes :no}
  │⭔ ${prefix}bugpay✓ ${feat("bugpay")? yes :no}
  │⭔ ${prefix}bugpolling✓ ${feat("bugpolling")? yes :no}
  │⭔ ${prefix}bugtroli✓ ${feat("bugtroli")? yes :no} 
  │⭔ ${prefix}bugaudio✓ ${feat("bugaudio")? yes :no} 
  │⭔ ${prefix}bugimage✓ ${feat("bugimage")? yes :no} 
  │⭔ ${prefix}bugdoc✓ ${feat("bugdoc")? yes :no} 
  │⭔ ${prefix}bugstick✓ ${feat("bugstick")? yes :no} 
  │⭔ ${prefix}buglokasi✓ ${feat("buglokasi")? yes :no}
  │⭔ ${prefix}bugkatalog✓ ${feat("bugkatalog")? yes :no}
  │⭔ ${prefix}bugbutton✓ ${feat("bugbutton")? yes :no}
  │⭔ ${prefix}bugtag✓ ${feat("bugtag")? yes :no}
  │⭔ ${prefix}bugtagall✓ ${feat("bugtagall")? yes :no}
  │⭔ ${prefix}bugpc✓ ${feat("bugpc")? yes :no} 
  │⭔ ${prefix}buggc✓ ${feat("buggc")? yes :no}
  │⭔ ${prefix}bugspam✓ ${feat("bugspam")? yes :no}
  │⭔ ${prefix}buginvitev✓ ${feat("buginvitev")? yes :no}
  │⭔ ${prefix}bugpayv✓ ${feat("bugpayv")? yes :no}
  │⭔ ${prefix}bugpollingv✓ ${feat("bugpollingv")? yes :no}
  │⭔ ${prefix}bugtroliv✓ ${feat("bugtroliv")? yes :no} 
  │⭔ ${prefix}bugaudiov✓ ${feat("bugaudiov")? yes :no}
  │⭔ ${prefix}bugimagev✓ ${feat("bugimagev")? yes :no}
  │⭔ ${prefix}bugdocv✓ ${feat("bugdocv")? yes :no}
  │⭔ ${prefix}bugstickv✓ ${feat("bugstickv")? yes :no}
  │⭔ ${prefix}buglokasiv✓ ${feat("buglokasiv")? yes :no} 
  │⭔ ${prefix}bugkatalogv✓ ${feat("bugkatalogv")? yes :no}
  │⭔ ${prefix}bugbuttonv✓ ${feat("bugbuttonv")? yes :no}
  │⭔ ${prefix}bugtagv✓ ${feat("bugtagv")? yes :no}
  │⭔ ${prefix}bugtagallv✓ ${feat("bugtagallv")? yes :no}
  │⭔ ${prefix}bugpcv✓ ${feat("bugpcv")? yes :no} 
  │⭔ ${prefix}buggcv✓ ${feat("buggcv")? yes :no}
  │⭔ ${prefix}bugspamv✓ ${feat("bugspamv")? yes :no}
  │⭔ ${prefix}sendbuginvite✓ ${feat("sendbuginvite")? yes :no}
  │⭔ ${prefix}sendbugpay✓ ${feat("sendbugpay")? yes :no}
  │⭔ ${prefix}sendbugpolling✓ ${feat("sendbugpolling")? yes :no}
  │⭔ ${prefix}sendbugtroli✓ ${feat("sendbugtroli")? yes :no}
  │⭔ ${prefix}sendbugaudio✓ ${feat("sendbugaudio")? yes :no}
  │⭔ ${prefix}sendbugimage✓ ${feat("sendbugimage")? yes :no} 
  │⭔ ${prefix}sendbugdoc✓ ${feat("sendbugdoc")? yes :no}
  │⭔ ${prefix}sendbugstick✓ ${feat("sendbugstick")? yes :no} 
  │⭔ ${prefix}sendbuglokasi✓ ${feat("sendbuglokasi")? yes :no} 
  │⭔ ${prefix}sendbugkatalog✓ ${feat("sendbugkatalog")? yes :no}
  │⭔ ${prefix}sendbugbutton✓ ${feat("sendbugbutton")? yes :no}
  │⭔ ${prefix}sendbugspam✓ ${feat("sendbugspam")? yes :no}  
  │⭔ ${prefix}sendbuginvitev✓ ${feat("sendbuginvitev")? yes :no}
  │⭔ ${prefix}sendbugpayv✓ ${feat("sendbugpayv")? yes :no}
  │⭔ ${prefix}sendbugpollingv✓ ${feat("sendbugpollingv")? yes :no}
  │⭔ ${prefix}sendbugtroliv✓ ${feat("sendbugtroliv")? yes :no}
  │⭔ ${prefix}sendbugaudiov✓ ${feat("sendbugaudiov")? yes :no}
  │⭔ ${prefix}sendbugimagev✓ ${feat("sendbugimagev")? yes :no} 
  │⭔ ${prefix}sendbugdocv✓ ${feat("sendbugdocv")? yes :no}
  │⭔ ${prefix}sendbugstickv✓ ${feat("sendbugstickv")? yes :no} 
  │⭔ ${prefix}sendbuglokasiv✓ ${feat("sendbuglokasiv")? yes :no} 
  │⭔ ${prefix}sendbugkatalogv✓ ${feat("sendbugkatalogv")? yes :no}
  │⭔ ${prefix}sendbugbuttonv✓ ${feat("sendbugbuttonv")? yes :no}
  │⭔ ${prefix}sendbugspamv✓ ${feat("sendbugspamv")? yes :no}
  │⭔ ${prefix}sendbuginvitegc✓ ${feat("sendbuginvitegc")? yes :no}
  │⭔ ${prefix}sendbugpaygc✓ ${feat("sendbugpaygc")? yes :no}
  │⭔ ${prefix}sendbugpollinggc✓ ${feat("sendbugpollinggc")? yes :no}
  │⭔ ${prefix}sendbugtroligc✓ ${feat("sendbugtroligc")? yes :no}
  │⭔ ${prefix}sendbugaudiogc✓ ${feat("sendbugaudiogc")? yes :no}
  │⭔ ${prefix}sendbugimagegc✓ ${feat("sendbugimagegc")? yes :no}
  │⭔ ${prefix}sendbugdocgc✓ ${feat("sendbugdocgc")? yes :no}
  │⭔ ${prefix}sendbugstickergc✓ ${feat("sendbugstickergc")? yes :no}
  │⭔ ${prefix}sendbugstickgc✓ ${feat("sendbugstickgc")? yes :no}
  │⭔ ${prefix}sendbuglokasigc✓ ${feat("sendbuglokasigc")? yes :no}
  │⭔ ${prefix}sendbugkataloggc✓ ${feat("sendbugkataloggc")? yes :no}
  │⭔ ${prefix}sendbugbuttongc✓ ${feat("sendbugbuttongc")? yes :no}
  │⭔ ${prefix}sendbugspamgc✓ ${feat("sendbugspamgc")? yes :no}
  │⭔ ${prefix}sendbuginvitegcv✓ ${feat("sendbuginvitegcv")? yes :no}
  │⭔ ${prefix}sendbugpaygcv✓ ${feat("sendbugpaygcv")? yes :no}
  │⭔ ${prefix}sendbugpollinggcv✓ ${feat("sendbugpollinggcv")? yes :no}
  │⭔ ${prefix}sendbugtroligcv✓ ${feat("sendbugtroligcv")? yes :no}
  │⭔ ${prefix}sendbugaudiogcv✓ ${feat("sendbugaudiogcv")? yes :no}
  │⭔ ${prefix}sendbugimagegcv✓ ${feat("sendbugimagegcv")? yes :no}
  │⭔ ${prefix}sendbugdocumentgcv✓ ${feat("sendbugdocumentgcv")? yes :no}
  │⭔ ${prefix}sendbugstickergcv✓ ${feat("sendbugstickergcv")? yes :no}
  │⭔ ${prefix}sendbugstickgcv✓ ${feat("sendbugstickgcv")? yes :no}
  │⭔ ${prefix}sendbuglokasigcv✓ ${feat("sendbuglokasigcv")? yes :no}
  │⭔ ${prefix}sendbugkataloggcv✓ ${feat("sendbugkataloggcv")? yes :no}
  │⭔ ${prefix}sendbugbuttongcv✓ ${feat("sendbugbuttongcv")? yes :no}
  │⭔ ${prefix}sendbugspamgcv✓ ${feat("sendbugspamgcv")? yes :no}
  │
  ╰────────────˧
  
  ╭─▸ 𝘛𝘩𝘢𝘯𝘬𝘴 𝘵𝘰
  │
  │ • Irfan Hariyanto
  │ • Dittaz
  │ • Nina Kawai
  │ • Resta Gamteng :v
  │ • Zeeone Ofc
  │ • Yudha Perdana
  │ • Yogi PW
  │ • Decode Denpa
  │ • Fernazer
  │ • X - Dev Team
  │ • XChillDs & Yuzu
  │ • Dika Ardnt
  │
  ╰────────────˧

`+'     𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘉𝘺 𝘕𝘰𝘥𝘦𝘫𝘴'
}
  


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
