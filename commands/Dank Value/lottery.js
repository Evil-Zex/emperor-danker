const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `lottery`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('YELLOW')
      .setTitle('Winning Lottery Ticket')
      .setThumbnail('https://cdn.discordapp.com/emojis/828630267983298580.png')
      .setDescription('Sells for `⏣ 190M`')
      .setFooter('Danker')
    )
  }
}