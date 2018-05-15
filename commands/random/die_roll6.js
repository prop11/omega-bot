const commando = require('discord.js-commando');

class DiceRollCommand6 extends commando.Command{
      constructor(client){
        super(client, {
            name: 'roll6',
            group: 'random',
            memberName: 'roll6',
            description: 'Roll a 6 Sided Die'
        });
      }


      async run(message, args){
        var roll6 = Math.floor(Math.random()* 6) + 1;
        message.reply("You rolled a " + roll6);

      }
}

module.exports = DiceRollCommand6;
