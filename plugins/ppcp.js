let handler = async (m, {conn}) => {
    let res = await conn.fetchJson(global.API('viko', '/api/random/couple', {}, 'apikey'))
    console.log(res)
    await conn.sendButton(m.chat, `_cowonya_\n${res.result.theme}`, author, res.result.ppcwo, [['NEXT', '/ppcp']], m)
    await conn.sendButton(m.chat, `_cewenya_\n${res.result.theme}`, author, res.result.ppcwe, [['NExT', '/ppcp']], m)
}
handler.command = ['ppcp', 'ppcouple']
handler.help = ['ppcp', 'ppcouple']
handler.tags = ['internet']
export default handler
