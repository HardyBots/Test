let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Aymane Touzani⁩;;\nFN:おDanịel.xyz⁩\nORG:Aymane Touzani⁩\nTITLE:\nitem1.TEL;waid=212660131536:212660131536\nitem1.X-ABLabel:Aymane Touzani⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Aymane Touzani⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Aymane Touzani⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
