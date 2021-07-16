const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ban',
    description: 'Ban someone from the server',
    run: async(client, message, args) => {
       if(!message.guild.me.hasPermission('BAN_MEMBERS')) {
          message.channel.send('I dont have permission to Ban this member!')
       }

       const mmember = message.mentions.members.first()
       if(!mmember) {
           const embed = new MessageEmbed()
           .setDescription('❌ Please specify a member to ban!')
           .setColor('#b31b1b')
           message.channel.send(embed)
       }
       const reason = args.slice(1).join(" ")
       await mmember.ban({ reason: reason })
       const embed = new MessageEmbed()
       .setDescription(`✔️***Succesfully banned ${mmember.user.tag}***`)
       .setColor('#22f013')
       message.channel.send(embed)
       client.modlogs({
         Member: mmember,
         Action: 'Ban',
         User: message.member.displayName,
         Color: 'RED',
         Footer: `ID: ${mmember.id}`,
         Reason: reason
       }, message)
    }
}