
const schema = require('../../Models/cc');
const Schema = require('../../Models/premium')
module.exports = {
    name: 'delete',
    run: async(client, message, args) => {
      Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(data) {
                    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command');

        const name = args[0];

        if(!name) return message.channel.send('Please specify a command name');

        const dataa = await schema.findOne({ Guild: message.guild.id, Command: name });
        if(!dataa) return message.channel.send('That custom command does not exist!');
        await schema.findOneAndDelete({ Guild: message.guild.id, Command: name });
        message.channel.send(`Removed **${name}** from custom commands!`);
        } else {
          message.channel.send('This is a Premium Server command!')
        }
      })
    }
}