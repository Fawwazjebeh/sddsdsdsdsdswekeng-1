let handler = async (m, { conn, text }) => {
    let q = m.quoted ? m.quoted : m
    if (q.mtype != 'imageMessage') throw 'reply gambarnya'
    let api = await q.download()
    let img = await uploadImage(api)
    conn.sendButton(m.chat, 'yahhahahaha stupid ', author, global.API('https://some-random-api.ml', '/canvas/its-so-stupid', {
        avatar: img || 'https://telegra.ph/file/24fa902ead26340f3df2c.png', dog:text
    }), [['stupid', `/stupid`]], m)
}

handler.help = ['stupid']
handler.tags = ['maker']

handler.command = /^(stupid)$/i

export default handler