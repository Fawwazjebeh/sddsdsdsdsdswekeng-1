let handler = async (m, {conn, text}) => {
    let api = await conn.fetchJson(global.API('viko', '/api/maker/nulis', {query: text}, 'apikey'))
    conn.sendFile(m.chat, api.result, '', author, m)
}

handler.tags = ['tools']
handler.help = ['nulis']
handler.command = ['nulis']

export default handler