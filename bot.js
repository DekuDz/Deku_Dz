const Discord = require('discord.js');
const client = new Discord.Client();
console.log("3bker");
var prefix = "D";
client.on("message", message => {

            if (message.content.startsWith(prefix + "la")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : TKGHocine`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : TKGHocine` ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!bc |Zero |server`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.login(NTkwMTgyMjY4NDQyNjQwNDEz.XQegFg.kAg3FF4Xw5JidkcTO_PdgZ3PmAE);
