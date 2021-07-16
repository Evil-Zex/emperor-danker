const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `apple`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#ff0d00')
      .setTitle('Apple')
      .setThumbnail('https://cdn.discordapp.com/emojis/714980848692101130.png')
      .setDescription('Sells for `⏣ 2-4k`')
      .setFooter('Danker')
    )
  }
}