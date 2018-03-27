const Discord = require('discord.js');
exports.run = (client, message, args) => {

let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Kimin Avatarını İstediğini Yazmalısını').catch(console.error);
const embed = new Discord.RichEmbed()
.setColor(0x000001)
.setTimestamp()
embed.setImage(`${user.avatarURL}`)
return message.channel.sendEmbed(embed);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pf'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar',
    description: 'Etiketlenen kiinin avatarını gösterir',
    usage: 'avatar [kişi(etiketleyin!)]'
  }; 