const { MessageEmbed } = require("discord.js");
const Schema = require('../../Models/log')
module.exports = {
  name: "dono",
  usage: 'add <userID> <amount>',
  description: "Log someones donation!",
  run: async (client, message, args) => {
    Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
      if(data) {
              const channel = message.guild.channels.cache.get(data.Channel)
        const add = args[0]
        if(add === 'add') {
        const userID = args[1]
        const amount = args[2]
        if(!amount) return;
        if(!userID) return;
        channel.send(new MessageEmbed()
          .setTitle('Donation Logging')
          .setDescription(`
            **Donor:** <@${userID}> (${userID})

            **Amount:** ${amount}

          `)
          .setFooter(`Giveaway Manager: ${message.member.displayName}`)
          .setColor('CYAN')
        )
    } else return;
      } else {
        return;
      }
    })
  },
};