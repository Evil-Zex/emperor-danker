const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `spinner`,
  description: `Dank Value command`,
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#9e918d')
      .setTitle('Fidget Spinner')
      .setThumbnail('https://cdn.discordapp.com/emojis/573150030030962699.png')
      .setDescription('Sells for `⏣ 3k`')
      .setFooter('Danker')
    )
  }
}