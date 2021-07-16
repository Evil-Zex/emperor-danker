const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'mute',
    description: 'Mute a user',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send('Reason Not Found.')
        if(!Member) return message.channel.send('Member is not found.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} is now muted. Reason: ${reason}`)
        Member.send(`You Have Been Muted In ${Member.guild.name} By ${message.member.displayName}. Reason: ${reason}`)
        client.modlogs({
         Member: Member,
         Action: 'Mute',
         User: message.member.displayName,
         Color: 'ORANGE',
         Footer: `ID: ${Member.id}`,
         Reason: reason
       }, message)
    }
}