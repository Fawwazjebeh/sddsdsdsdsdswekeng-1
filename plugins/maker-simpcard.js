let handler = async (m, { conn, usedprefix }) => {
    let q = m.quoted ? m.quoted : m
    if (q.mtype != 'imageMessage') throw 'reply gambarnya'
    let api = await q.download()
    let img = await uploadImage(api)
    conn.sendButton(m.chat, 'hoho simpcard ', author, global.API('https://some-random-api.ml', '/canvas/simpcard', {
        avatar: img || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
    }), [['simpcard', `/simpcard`]], m)
}

handler.help = ['simpcard']
handler.tags = ['maker']

handler.command = /^(simpcard)$/i

export default handler