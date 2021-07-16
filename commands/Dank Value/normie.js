const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `normie`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('RED')
      .setTitle('Normie Box')
      .setThumbnail('https://i.imgur.com/GSGADYX.gif')
      .setDescription('Sells for `⏣ 85k`')
      .setFooter('Danker')
    )
  }
}