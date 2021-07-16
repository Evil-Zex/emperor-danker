const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: 'Kick someone from the server',
    run: async(client, message, args) => {
       if(!message.guild.me.hasPermission('KICK_MEMBERS')) {
          message.channel.send('I dont have permission to Kick this member!')
       }

       const mmember = message.mentions.members.first()
       if(!mmember) {
           const embed = new Discord.MessageEmbed()
           .setDescription('❌ Please specify a member to kick!')
           .setColor('#b31b1b')
           message.channel.send(embed)
       }
       if (!mmember.kickable) {
           return message.channel.send("I cannot kick this member")
       }
       const reason = args.slice(1).join(" ");
       await mmember.kick({ reason: reason })
       const embed = new Discord.MessageEmbed()
       .setDescription(`✔️Succesfully kicked ${mmember.user.tag}`)
       .setColor('#22f013')
       message.channel.send(embed)
       client.modlogs({
         Member: mmember,
         Action: 'Kick',
         User: message.member.displayName,
         Color: 'PURPLE',
         Footer: `ID: ${mmember.id}`,
         Reason: reason
       }, message)
    }
}