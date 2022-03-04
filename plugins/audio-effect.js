import {ffmpeg} from '../lib/converter.js'
let handler = async (m, {conn, command}) => {
    let q = m.quoted ? m.quoted : m
    switch (command) {
        case '8daudio':
        var buf = await q.download()
        var res = await ffmpeg(buf, [
        '-af', "apulsator=hz=0.125"
        ], '', 'mp3') 
        await conn.sendFile(m.chat, res.data, '8d.mp3', author, m)
        res.delete()
        break
        case 'robot':
        var buf = await q.download()
        var res = await ffmpeg(buf, [
        '-filter_complex', "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75"
        ], '', 'mp3') 
        await conn.sendFile(m.chat, res.data, '8d.mp3', author, m)
        res.delete()
        break
    }
}
handler.command = ['8daudio', 'robot']
handler.help = ['8daudio', 'robot']
handler.tags = ['tools']
export default handler
