const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `fake`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('GREY')
      .setTitle('Fake ID')
      .setThumbnail('https://cdn.discordapp.com/emojis/573151946911776798.png')
      .setDescription('Sells for `⏣ 1k`')
      .setFooter('Danker')
    )
  }
}