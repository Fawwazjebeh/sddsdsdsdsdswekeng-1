import { webp2png } from '../lib/webp2mp4.js' 
let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m
    if (q.mtype != 'stickerMessage') throw 'reply stickernya'
    let sti = await q.download()
    let res = await webp2png(sti) 
    conn.sendFile(m.chat, res, "", '', m)
}
handler.tags = ['sticker']
handler.help = ['toimg']
handler.command = ['toimg', 'toimage']

export default handler
