const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `pem`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('YELLOW')
      .setTitle('Pepemedal')
      .setThumbnail('https://cdn.discordapp.com/emojis/716848179022397462.gif')
      .setDescription('Sells for `⏣ 8M`')
      .setFooter('Danker')
    )
  }
}