const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
  name: "invite",
  aliases : ['i'],
  description: "Shows an Invite Link to the Bot",
  run: async (client, message, args) => {
    message.channel.send(new MessageEmbed()
      .setTitle('Click Here To Invite me!')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=834716873706569769&permissions=18432&scope=bot')
      .setFooter(client.guilds.cache.size +'Servers')
    )
  },
};