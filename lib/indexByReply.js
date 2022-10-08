module.exports = async (Araa, m, mentionByReply, prefix, pushname, sender, isOwner, from, fake) => {
const Pe = mentionByReply.split('@')[0]
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: `DETIK`, rowId: `${prefix}santet ${Pe}|detik`},
{title: `MENIT`, rowId: `${prefix}santet ${Pe}|menit`},
{title: `JAM`, rowId: `${prefix}santet ${Pe}|jam`},
{title: `HARI`, rowId: `${prefix}santet ${Pe}|hari`},
]}]
const listMessage = { text: `Name : ${pushname}\nNumber : ${sender.split('@')[0]}\nStatus : ${isOwner ? 'Owner' : 'User'}`, mentions: [sender], footer: fake, title: `Hai Kak @${sender.split('@')[0]}`, buttonText: "Click Here", sections }
Araa.sendMessage(from, listMessage, { quoted: m })
}