

exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa botz

*Sewa Group*
*Harga*
- Rp. 10.000

*User Premium*
*Harga*
- Rp. 20.000

*User Owner*
*Harga*
- Rp. 30.000

*Fitur Sewa*
• Dapat akses di group
• Bisa req fitur ke owner langsung
• Masa panjang permanen

*Fitur Premium*
• Dapat akses semua fitur premium
• Dapat akses di group
• Limit tanpa batas
• Masa panjang permanen
• Dan masih banyak lagi

*Fitur Owner*
• Dapat semua akses fitur owner
• Dapat semua akses fitur premium
• Limit tanpa batas
• Masa panjang permanen


Bot on 24 jam tapi kadang 
juga mati klo lgi ada error 
atau lgi perbaikan bug.

Kalo mau sewa bisa chat
owner langsung, Sc atau bot
ini tidak di jual 
`
}

const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})




















