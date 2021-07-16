const { MessageEmbed } = require('discord.js')
const Schema = require('../../Models/heistschema')
module.exports = {
  name: `heistdonate`,
  aliases: ['hdonate'],
  usage: '<amount> <requirement> <message>',
  description: 'Tell them what u wanna donate for a heist!',
  run: (client, message, args) => {
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
 const amount = args[0]
    const requirem = args[1]
    const messagee = args.slice(2).join(" ")
    if(!amount) return message.channel.send('Please Specify an amount!')
    if(!requirem) return message.channel.send('Please specify a requirement! If there is none write none here!')
    if(!messagee) return message.channel.send('Please specify a message!')
    if(data) {
      message.channel.send(`<@&${data.RoleId}>`)
  await message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
     .setTitle('Donation Request!')
     .setDescription(`
       **Amount: ${amount}
       Requirement: ${requirem}
       Message:** ${messagee}
     `)
     .setColor('GREEN')
     .setFooter('Danker')
    )
    }
    if(!data) {
       await message.channel.send(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
     .setTitle('Donation Request!')
     .setDescription(`
       **Amount: ${amount}
       Requirement: ${requirem}
       Message:** ${messagee}
     `)
     .setColor('GREEN')
     .setFooter('Danker')
    )
    }
    })
  }
}