const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `rev`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('BLUE')
      .setTitle('Reversal Card')
      .setThumbnail('https://cdn.discordapp.com/emojis/573150370579087360.png')
      .setDescription('Sells for `⏣ 17M`')
      .setFooter('Danker')
    )
  }
}