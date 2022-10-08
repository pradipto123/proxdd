const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const { color, bgcolor } = require('./color.js')
const fs = require("fs")
const Jimp = require('jimp')
const chalk = require('chalk')
const figlet = require('figlet')
const moment = require('moment-timezone')





const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}

switch(bulan1) { 
case 0: bulan1 = 'Fanuari'; break;
case 1: bulan1 = 'Februari'; break; 
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break; 
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break; 
}

switch(jams){
case 0: jams = "Malem"; break;
case 1: jams = "Malem"; break;
case 2: jams = "Malem"; break;
case 3: jams = "Pagi"; break;
case 4: jams = "Pagi"; break;
case 5: jams = "Pagi"; break;
case 6: jams = "Pagi"; break;
case 7: jams = "Pagi"; break;
case 8: jams = "Pagi"; break;
case 9: jams = "Pagi"; break;
case 10: jams = "Pagi"; break;
case 11: jams = "Siang"; break;
case 12: jams = "Siang"; break;
case 13: jams = "Siang"; break;
case 14: jams = "Siang"; break;
case 15: jams = "Sore"; break;
case 16: jams = "Sore"; break;
case 17: jams = "Sore"; break;
case 18: jams = "Malem"; break;
case 19: jams = "Malem"; break;
case 20: jams = "Malem"; break;
case 21: jams = "Malem"; break;
case 22: jams = "Malem"; break;
case 23: jams = "Malem"; break;
}

var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun; 
var tampilJam = '' + 'Jams : ' + jams + ':' + menit + ':' + detik + ' Wib';
tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
tampilWaktu =jams + ":" + menit + ":" + detik;



var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 1: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 2: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 3: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 4: waktoonyabro = `Selamat Pagi Owner..✨`; break; 
case 5: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 6: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 7: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 8: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 9: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 10: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 11: waktoonyabro = `Selamat Siang Owner..🔥`; break; 
case 12: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 13: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 14: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 15: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 16: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 17: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 18: waktoonyabro = `Selamat Malam Owner..🌃`; break; 
case 19: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 20: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 21: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 22: waktoonyabro = `Selamat Malam Owner..🌃`; break; 
case 23: waktoonyabro = `Selamat Malam Owner..🌃`; break;
}

var tampilUcapan = '' + waktoonyabro;

 
const h2k = (number) => {
    var SI_POSTFIXES = ["", " Ribu", " Juta", " Miliar", " Triliun", " P", " E"]
      //  var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const FileSize = (number) => {
    var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error in getBuffer: ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(4).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 500,
  "frames": [
    "🅘",
    "🅡",
    "🅕",
    "🅐",
    "🅝",
    "🅑", 
    "🅐", 
    "🅢",
    "🅔"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }
 
    const banner = cfonts.render((`Bot Whatsapp`), {
    font: 'simple',
    color: 'candy',
    align: 'center',
    gradient: ["red","magenta"],
    lineHeight: 3
  });
  
console.log(color(`\x1b[1;37m> ${tampilUcapan}\n`,'cyan'))
console.log(color(figlet.textSync('ELAINA   BASE', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color('\n> WIBb ','silver'), color(`${time}`,'mediumseagreen'))
console.log(color('> WITA ','silver'), color(`${wita}`,'mediumseagreen'))
console.log(color('> WIT ','silver'), color(`${wit}`,'mediumseagreen'))
console.log(color('> HARI ','silver'), color(`${tampilHari}\n`,'mediumseagreen'))



const generateProfilePicture = async (buffer) => {
const jimp = await Jimp.read(buffer)
const min = jimp.getWidth()
const max = jimp.getHeight()
const cropped = jimp.crop(0, 0, min, max)
return {
img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
}
}

const jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function delay(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms))
}



const unixTimestampSeconds = (date = new Date()) => {
Math.floor(date.getTime() / 1000)
}
const unixTimeSecond = unixTimestampSeconds

const generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}

//Random Nomer
const randomNomor = (angka) => {
return Math.floor(Math.random() * angka) + 1
}


//Runtime
const runtime = (seconds) => {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};


const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}




const calculate_age = (dob) => { // new Date("month/date/year")
    var diff_ms = Date.now() - dob.getTime();
	var age_dt = new Date(diff_ms);
	return Math.abs(age_dt.getUTCFullYear() - 1970);
}


const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

const parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}


let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})


let dot = new Date(new Date + 3600000)
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(dot)


module.exports = { 
getBuffer, 
h2k, 
generateMessageID, 
getGroupAdmins, 
getRandom, 
start, 
info, 
success, 
banner, 
close,
randomNomor,
jsonformat,
generateProfilePicture,
runtime,
generateMessageTag,
makeid,
calculate_age,
isUrl,
formatDate,
weton,week,calender,dateIslamic,
FileSize,
parseMention





}
