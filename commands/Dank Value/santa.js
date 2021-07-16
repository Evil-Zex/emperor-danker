const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `santa`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('DARK_RED')
      .setTitle('Santa\'s Hat')
      .setThumbnail('https://cdn.discordapp.com/emojis/573150240954253352.png')
      .setDescription('Sells for `⏣ 250k`')
      .setFooter('Danker')
    )
  }
}