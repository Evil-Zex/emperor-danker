const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `blob`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#7d1010')
      .setTitle('Blob')
      .setThumbnail('https://cdn.discordapp.com/emojis/809266400078069851.gif?v=1')
      .setDescription('Sells for `⏣ 3B`')
      .setFooter('Danker')
    )
  }
}