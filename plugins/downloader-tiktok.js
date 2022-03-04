let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { result: { nowatermark, watermark, audio } } = await conn.fetchJson(`https://api-faza.herokuapp.com/api/download/tiktok?url=${args[0]}&apikey=FZDEVELOPER`)
    const url = nowatermark || watermark || audio
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', author, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = ['tiktok','tt', 'tiktoknowm', 'tiktokdl']

export default handler