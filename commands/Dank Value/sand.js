const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `sand`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#dbd9a0')
      .setTitle('Box Of Sand')
      .setThumbnail('https://cdn.discordapp.com/emojis/573150271513952271.png')
      .setDescription('Sells for `⏣ 2k`')
      .setFooter('Danker')
    )
  }
}