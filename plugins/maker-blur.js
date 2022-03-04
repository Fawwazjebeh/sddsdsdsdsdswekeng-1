import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, usedprefix }) => {
    let q = m.quoted ? m.quoted : m
    if (q.mtype != 'imageMessage') throw 'reply gambarnya'
    let api = await q.download()
    let img = await uploadImage(api)
    conn.sendButton(m.chat, 'yahhahahaha blur ', author, global.API('https://some-random-api.ml', '/canvas/blur', {
        avatar: await img || 'https://telegra.ph/file/24fa902ead26340f3df2c.png',
    }), [['blur', `/blur`]], m)
}

handler.help = ['blur']
handler.tags = ['maker']

handler.command = /^(blur)$/i

export default handler