module.exports = member => {
  let guild = member.guild;
  if (message.channel.type !== 'dm') {
  member.send('niye gittin?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
  }
};
