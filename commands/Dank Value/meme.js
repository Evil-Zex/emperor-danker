const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `meme`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('RED')
      .setTitle('Meme Box')
      .setThumbnail('https://i.imgur.com/GSGADYX.gif')
      .setDescription('Sells for `⏣ 300k`')
      .setFooter('Danker')
    )
  }
}