let handler = async (m, { conn, usedprefix }) => {
    let q = m.quoted ? m.quoted : m
    if (q.mtype != 'imageMessage') throw 'reply gambarnya'
    let api = await q.download()
    let img = await uploadImage(api)
    conn.sendButton(m.chat, 'samnge ya banh ', author, global.API('https://some-random-api.ml', '/canvas/horny', {
        avatar: img || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
    }), [['horny', `/horny`]], m)
}

handler.help = ['horny']
handler.tags = ['maker']

handler.command = /^(horny)$/i

export default handler