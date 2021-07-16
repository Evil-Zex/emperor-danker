const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'unmute',
    description: 'Unmute a user',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('No Member Mentioned, Please Try Again.')
 const reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send('Reason Not Found.')
        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(!role) return message.channel.send('No Muted Role In This Guild!')


        await Member.roles.remove(role)

        if(!Member.roles.cache.has(role.id)) return message.channel.send(`${Member.displayName} has is not muted.`)

        message.channel.send(`Unmuted ${Member} Successfuly. Reason: ${reason}`)

        client.modlogs({
         Member: Member,
         Action: 'Unmute',
         User: message.member.displayName,
         Color: 'GREEN',
         Footer: `ID: ${Member.id}`,
         Reason: reason
       }, message)
    }
}