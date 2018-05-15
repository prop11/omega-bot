const commando = require('discord.js-commando');

class LocationCommand extends commando.Command{
      constructor(client){
        super(client, {
            name: 'loc',
            group: 'user',
            memberName: 'loc',
            description: 'Check user location command'
        });
      }
        async run(message){
          message.reply("You can set your location using loc<<location>>, For example; loceu")
        }
    }

module.exports = LocationCommand;
