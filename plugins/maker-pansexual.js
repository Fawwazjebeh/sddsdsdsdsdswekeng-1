let handler = async (m, { conn, usedprefix }) => {
    
    let q = m.quoted ? m.quoted : m
    if (q.mtype != 'imageMessage') throw 'reply gambarnya'
    let api = await q.download()
    let img = await uploadImage(api)
    conn.sendButton(m.chat, 'nggk bomleh ', author, global.API('https://some-random-api.ml', '/canvas/pansexual', {
        avatar: img || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
    }), [['pansexual', `/pansexual`]], m)
}

handler.help = ['pansexual']
handler.tags = ['maker']

handler.command = /^(pansexual)$/i

export default handler