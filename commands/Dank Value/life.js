const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `life`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#ebe2df')
      .setTitle('Life Saver')
      .setThumbnail('https://cdn.discordapp.com/emojis/573151706641203210.png')
      .setDescription('Sells for `⏣ 10k`')
      .setFooter('Danker')
    )
  }
}