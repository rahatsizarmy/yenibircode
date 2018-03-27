const Discord = require('discord.js');
exports.run = (client, message, args) => {
const embed = new Discord.RichEmbed()
    
.setAuthor(message.author.username, message.author.avatarURL)
    
 .addField(message.author.username,"***Para bol nasıl olsa yak babam yak!***")
    
            .setImage("https://media2.giphy.com/media/2dI7FZreQAp44/giphy.gif")
    
                .setColor(0x97ffff)
            
            return message.channel.sendEmbed(embed)
    };

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['sigra içersiniz'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'sigara',
        description: 'Sigara içersiniz',
        usage: 'sigra'
      };