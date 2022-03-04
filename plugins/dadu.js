import { sticker } from '../lib/sticker.js'
let handler = async (m, {conn}) => {
    let url = global.API('viko', '/api/maker/dadu', {}, "apikey")
    let stiker = await sticker(false, url, global.packname, global.author)
    conn.sendFile(m.chat, stiker, '', '', m, false, {asSticker: true})
}
handler.command = ['dadu']
handler.help = ['dadu']
handler.tags = ['game']

export default handler