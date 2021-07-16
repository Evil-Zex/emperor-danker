const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `pepe`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('GREEN')
      .setTitle('Rare Pepe')
      .setThumbnail('https://cdn.discordapp.com/emojis/668945671427981312.gif')
      .setDescription('Sells for `⏣ 80k`')
      .setFooter('Danker')
    )
  }
}