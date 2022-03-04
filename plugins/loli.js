const handler = async (m, {conn}) => {
    let buf = await conn.getFile('https://api-faza.herokuapp.com/api/wallpaper/loli?apikey=FZDEVELOPER')
    console.log(buf)
    conn.sendButton(m.chat, 'punya saia', author, buf.data, [['NEXT', '/loli']], m)
}

handler.command = ['loli']
handler.tags = ['internet']
handler.help = ['loli']
export default handler