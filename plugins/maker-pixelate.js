let handler = async (m, { conn, usedprefix }) => {
    let q = m.quoted ? m.quoted : m
    if (q.mtype != 'imageMessage') throw 'reply gambarnya'
    let api = await q.download()
    let img = await uploadImage(api)
    conn.sendButton(m.chat, 'yahhahahaha 8 bit', author, global.API('https://some-random-api.ml', '/canvas/pixelate', {
        avatar: img || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
    }), [['pixelate', `/pixelate`]], m)
}

handler.help = ['pixelate']
handler.tags = ['maker']

handler.command = /^(pixelate)$/i

export default handler