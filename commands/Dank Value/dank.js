const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `dank`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('RED')
      .setTitle('Dank Box')
      .setThumbnail('https://i.imgur.com/GSGADYX.gif')
      .setDescription('Sells for `⏣ 570k`')
      .setFooter('Danker')
    )
  }
}