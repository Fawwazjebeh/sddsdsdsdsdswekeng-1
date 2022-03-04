import { webp2mp4 } from '../lib/webp2mp4.js' 
let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m
    if (q.mtype != 'stickerMessage') throw 'reply stickernya'
    let sti = await q.download()
    let res = await webp2mp4(sti) 
    conn.sendMessage(m.chat, {video: {url: res }, gifPlayback: true }, {quoted:m})
}
handler.tags = ['sticker']
handler.help = ['togif']
handler.command = ['togif']

export default handler
