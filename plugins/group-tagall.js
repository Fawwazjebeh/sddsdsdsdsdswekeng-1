let handler = async (m, {participants, text}) => {
    let teks = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${text ? text : 'Nothing'}*\n\n`
        for (let mem of participants) {
		    teks += `🔥 @${mem.id.split('@')[0]}\n`
		}
    teks += `\n⋙ *${author}* ⋘`
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}
handler.command = ['tagall']
handler.help = ['tagall']
handler.tags = ['group']
handler.admin = true
handler.group = true
handler.owner = true

export default handler
