const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'Hello') {
    message.reply('Hello there!');
  }
   
  else if (message.content === 'ip') { // ip > play.zanitynetwork.cf just in case..
       return message.channel.send('play.zanitynetwork.cf');
        }

  else if (message.content === 'commands') { // commands > help just in case..
       return message.channel.send('***Commands-*** __Hello,ip and__ __**commands**__');
        }  

  else if (message.content === 'hello') { // commands > help just in case..
       return message.reply('Hello!');
        }
  
  else if (message.content === 'hi') { // commands > help just in case..
       return message.reply('Hi!');
        }
  
  else if (message.content === 'Hi') { // commands > help just in case..
       return message.reply('Hi!');
        }
});

client.login(token);
