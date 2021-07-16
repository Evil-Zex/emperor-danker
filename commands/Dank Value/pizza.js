const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `pizza`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('RED')
      .setTitle('Pizza Slice')
      .setThumbnail('https://cdn.discordapp.com/attachments/693517202879414312/788070266579189790/pizza-export2.png')
      .setDescription('Sells for `⏣ 125k`')
      .setFooter('Danker')
    )
  }
}