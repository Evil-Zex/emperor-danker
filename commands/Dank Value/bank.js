const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `bank`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('GREY')
      .setTitle('Bank Note')
      .setThumbnail('https://cdn.discordapp.com/emojis/830509316888985621.png')
      .setDescription('Sells for `⏣ 130k`')
      .setFooter('Danker')
    )
  }
}