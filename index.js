// Main Declarations

const commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new commando.Client();

// Keep bot Alive

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Main bot code



bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping' && msg.author.id === '445877924860788748') {
    return;
  }
  else if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

bot.on('message', msg => {
  if (msg.content === 'pong') {
    msg.reply('ping');
  }
});

bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user} to our Discord Server.  Use >rules to read our rules!`).catch(console.error);
  });





bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('user', 'User');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.login('NDQ1ODc3OTI0ODYwNzg4NzQ4.Ddw31A.I1PSpQe3kLQBRA3zwBSzdEE2Yjs');
