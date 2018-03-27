const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
  const embed = new Discord.RichEmbed()
  message.delete()
  if (message.author.id !== '335082465561673728' ) {
    message.reply('`reboot` komutunu kullanmak için gerekli izne sahip değilsin!');
  } else {
    message.channel.sendMessage(`<@335082465561673728> ***Yeniden Başlıyorum*** 📮 `).then(message => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
 }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reset'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
