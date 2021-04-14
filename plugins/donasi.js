let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081310721678]
│ • Telkomsel [082167459979]
│Berminat Donasi wa.me/6282167459979
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
