import {pinterest} from '@bochilteam/scraper'
let handler = async (m, {conn, text}) => {
    if (!text) throw 'mana linknya'
    let res = await pinterest(text)
    for (let i of res) {
        await conn.sendFile(m.chat, i, '', '', m)
    }
}
handler.command = ['pin', 'pinterest']
handler.tags = ['downloader']
handler.help = ['pin', 'pinterest']

export default handler
