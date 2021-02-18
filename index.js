const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log("Bot Is Ready!")
    //CHANGE {type: 2} in 
    //1 FOR PLAYING
    //2 FOR LISTENING
    //3 FOR WATCHING
    client.user.setActivity("MADE BY UDAY!", {type: 3});
  });

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(config.token);