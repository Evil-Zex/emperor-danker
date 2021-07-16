const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require('../../Models/announce')
module.exports = {
    name: 'announce',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(data) {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permission to use this command');

        let mention;

        if(!args.length) return message.channel.send('> Usage: *announce <#channel> <message> <-ping ?>');

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('Please specify a channel!');

        if(!args[1]) return message.reply('Please specify a message to announce');

        // mentions
        if(args.some((val) => val.toLowerCase() === '-ping')) {
            for (let i = 0; i < args.length; i++ ) {
                if(args[i].toLowerCase() === '-ping') args.splice(i, 1);
            }

            mention = true;
        } else mention = false;

        if(mention === true) channel.send(`<@&${data.RoleId}>`);

        channel.send(
            new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setColor('RANDOM')
        )
        } else {
          message.channel.send('There is no announcement ping role set for this guild!!')
        }
      })
    }
}