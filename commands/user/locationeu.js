const commando = require('discord.js-commando');

class LocationCommandEU extends commando.Command{
      constructor(client){
        super(client, {
            name: 'loceu',
            group: 'user',
            memberName: 'loceu',
            description: 'Check user location command'
        });
      }
        async run(message, args){
          var role = member.guild.roles.find('name', 'Europe');
          member.addRole(role);
          message.reply("You Have set your Location to Europe");
        }
    }

module.exports = LocationCommandEU;
