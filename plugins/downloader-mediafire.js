import {mediafiredl} from '@bochilteam/scraper'
let handler = async (m, {conn, text}) => {
    if (!text) throw 'mana linknya'
    if (!text.includes('mediafire')) throw 'bukan link mediafire'
    let res = await mediafiredl(text)
    m.reply('sedang di proses')
    conn.sendFile(m.chat, res.url, res.filename, author, m)
}
handler.command = ['mediafire']
handler.tags = ['downloader']
handler.help = ['mediafire']

export default handler
