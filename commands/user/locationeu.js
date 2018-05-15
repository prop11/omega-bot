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
        async run(message, args){
          var role = member.guild.roles.find('name', 'Europe');
          member.addRole(role);
          message.reply("You Have set your Location to Europe");
        }
    }

module.exports = LocationCommand;
