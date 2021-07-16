const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `coin`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('YELLOW')
      .setTitle('Coin Bomb')
      .setThumbnail('https://cdn.discordapp.com/emojis/688456543372312594.png')
      .setDescription('Sells for `⏣ 13k`')
      .setFooter('Danker')
    )
  }
}