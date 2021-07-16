const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `tide`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#ccba14')
      .setTitle('Tidepod')
      .setThumbnail('https://cdn.discordapp.com/emojis/573149030951944202.png')
      .setDescription('Sells for `⏣ 7k`')
      .setFooter('Danker')
    )
  }
}