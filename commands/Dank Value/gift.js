const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `gift`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#184394')
      .setTitle('Gift for a Friend')
      .setThumbnail('https://cdn.discordapp.com/attachments/693517202879414312/784506168730976305/present.png')
      .setDescription('Sells for `⏣ 250k`')
      .setFooter('Danker')
    )
  }
}