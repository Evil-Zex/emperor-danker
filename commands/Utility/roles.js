  
const { Client, Message, MessageEmbed } = require("discord.js");
const Schema = require('../../Models/premium')
module.exports = {
  name: "roles",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.author || message.guild.users.cache.get(args[0]);

    const memberRoles = member.roles.cache
     .filter((roles) => roles.id !== message.guild.id)
     .map((role) => role.toString())

    message.channel.send(new MessageEmbed()
      .setTitle(member.user.tag)
      .setDescription(memberRoles)
      .setColor(member.displayColor)
    )
  },
};