const schema = require('../../Models/cc');
const Schema = require('../../Models/premium')
module.exports = {
    name: 'create',
    run: async(client, message, args) => {
      Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
        if(data) {
                  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command');

        const name = args[0]; const response = args.slice(1).join(" ");

        if(!name) return message.channel.send('Please specify a command name');
        if(!response) return message.channel.send('Please specify a response');
        const dataa = await schema.findOne({ Guild: message.guild.id, Command: name });
        if(dataa) return message.channel.send('This custom commands exists already!');
        const newData =  new schema({
            Guild: message.guild.id,
            Command: name,
            Response: response
        })
        await newData.save();
        message.channel.send(`Saved **${name}** as a custom command!`);
        } else {
          message.channel.send('This is a Premium Server command!')
        }
      })
    }
}