let handler = async (m, {conn, text}) => {
    let api = await conn.fetchJson(global.API('viko', '/api/muslim/asmaulhusna', {}, 'apikey'))
    let res = api.result[(text ? text - 1 : Math.floor(Math.random() * api.result.length))]
    m.reply(`
*number:* ${res.number}
*latin:* ${res.latin}
*arab:* ${res.arab}
*ind:* ${res.translate_id}
*eng:* ${res.translate_en}
`.trim())
}
handler.command = ['asmaulhusna']
handler.tags = ['islam']
handler.help = ['asmaulhusna'].map(v => v + ' <nomor 1-99>')

export default handler