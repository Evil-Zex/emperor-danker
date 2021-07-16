const { MessageEmbed } = require('discord.js')

module.exports = {
  name: `rifle`,
  description: 'Dank Value command',
  run: (client, message) => {
    message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
      .setColor('BROWN')
      .setTitle('Hunter\'s Rifle')
      .setThumbnail('https://cdn.discordapp.com/emojis/714543607947722822.png')
      .setDescription('Sells for `⏣ 6k`')
      .setFooter('Danker')
    )
  }
}