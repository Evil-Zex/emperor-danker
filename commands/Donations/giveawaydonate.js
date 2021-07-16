const { MessageEmbed } = require('discord.js')
const Schema = require('../../Models/gawschema')
module.exports = {
  name: `giveawaydonate`,
  aliases: ['gdonate'],
  usage: '<time> <winners> <requirement> <prize> <message>',
  description: 'Tell them what u wanna donate for a giveaway!',
  run: (client, message, args) => {
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
 const time = args[0]
    const winners = args[1]
    const requirements = args[2]
    const prize = args[3]
    const messagee = args.slice(4).join(" ")
    if(!time) return message.channel.send('Please specify a time!')
    if(!winners) return message.channel.send('Please specify a number of winners!')
    if(!requirements) return message.channel.send('Please specify a requirement. If there is none write none here!')
    if(!prize) return message.channel.send('Please specify the prize!')
    if(!messagee) return message.channel.send('Please specify a message!')
    if(data) {
 message.channel.send(`<@&${data.RoleId}>`)
    await message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
     .setTitle('Donation Request!')
     .setDescription(`
       **Time: ${time}
       Winners: ${winners}
       Requirements: ${requirements}
       Prize: ${prize}
       Message:** ${messagee}
     `)
     .setColor('BLUE')
     .setFooter('Danker')
    )
    }
     if(!data) {
        await message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
     .setTitle('Donation Request!')
     .setDescription(`
       **Time: ${time}
       Winners: ${winners}
       Requirements: ${requirements}
       Prize: ${prize}
       Message:** ${messagee}
     `)
     .setColor('BLUE')
     .setFooter('Danker')
    )
     }
    })
  }
}