const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `eye`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('BLUE')
      .setTitle('Odd Eye')
      .setThumbnail('https://cdn.discordapp.com/emojis/787964747848089642.gif')
      .setDescription('Sells for `⏣ NaN`')
      .setFooter('Danker')
    )
  }
}