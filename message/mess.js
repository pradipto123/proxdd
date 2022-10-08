

module.exports = async (senderNumber, prefix, getLimit, cekGLimit, gcount, command) => {


global.mess = {
wait: '_𝙒𝙖𝙞𝙩 𝘼 𝙈𝙞𝙣𝙪𝙩𝙚 シ_',
query: 'Masukan query',
success: '_𝙎𝙪𝙘𝙘𝙚𝙨𝙨シ_',
limit: `Satu limit terpakaiಥ‿ಥ\nSisa Limit kamu : ${getLimit(senderNumber)}`,
limitGame: `Satu limit game terpakaiಥ‿ಥ\nSisa Limit kamu : ${cekGLimit(senderNumber, gcount)}`, 
claimOn: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam `,
wrongFormat: '_𝙁𝙤𝙧𝙢𝙖𝙩 𝙚𝙧𝙧𝙤𝙧, 𝙩𝙧𝙮 𝙖𝙜𝙖𝙞𝙣シ_',

error: {
stick: '_𝙀𝙧𝙧𝙤𝙧, 𝙟𝙪𝙨𝙩 𝙩𝙧𝙮 𝙩𝙤 𝙨𝙚𝙣𝙙 𝙖 𝙥𝙞𝙘𝙩𝙪𝙧𝙚シ_',
api: '_𝙀𝙧𝙧𝙤𝙧, 𝙖𝙥𝙞 𝙞𝙨 𝙣𝙤𝙩 𝙛𝙤𝙪𝙣𝙙シ_',
Iv: '_𝙀𝙧𝙧𝙤𝙧, 𝙩𝙧𝙮 𝙩𝙤 𝙜𝙞𝙫𝙚 𝙩𝙝𝙚 𝙘𝙤𝙧𝙧𝙚𝙘𝙩 𝙡𝙞𝙣𝙠シ_',
link : "Link error!"
},

block:{
Bowner: `Maaf kak command 「 *${command}* 」 telah di block oleh owner`,
Bsystem: `Command 「 *${command}* 」telah di block oleh system karena terjadi error`
},

 only: {
prem : '_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙗𝙮 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙪𝙨𝙚𝙧𝙨シ_',
group: '_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙞𝙣 𝙜𝙧𝙤𝙪𝙥シ_',
owner: '_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙗𝙮 𝙤𝙬𝙣𝙚𝙧シ_',
admin: '_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙗𝙮 𝙖𝙙𝙢𝙞𝙣シ_',
Badmin: '_𝘾𝙖𝙣 𝙤𝙣𝙡𝙮 𝙗𝙚 𝙪𝙨𝙚𝙙 𝙞𝙛 𝙩𝙝𝙚 𝙗𝙤𝙩 𝙞𝙨 𝙖𝙣 𝙖𝙙𝙢𝙞𝙣シ_'
 }
  
 }

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