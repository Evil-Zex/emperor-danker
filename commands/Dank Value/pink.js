const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `pink`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('#f53dd0')
      .setTitle('Pink Phalic Object')
      .setThumbnail('https://cdn.discordapp.com/emojis/718136370320769074.png')
      .setDescription('Sells for `⏣ 5`')
      .setFooter('Danker')
    )
  }
}