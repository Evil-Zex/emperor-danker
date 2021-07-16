const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `shoe`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#adadad')
      .setTitle('Horse Shoe')
      .setThumbnail('https://media.discordapp.net/attachments/693517202879414312/813911606907240448/horseshoe.png')
      .setDescription('Sells for `⏣ 45k`')
      .setFooter('Danker')
    )
  }
}