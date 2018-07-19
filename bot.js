const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Scrpit By ┃ ArabSupport`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Bot By TEAM ArabSupport ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` Bot By TEAM ArabSupport `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.on('message', function(msg) {
if(msg.content.startsWith ('^server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


  client.on("message", message => {
 if (message.content === "^help-js-bc") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯FoxBot✯} ════════════─')
	  .addField('**^help-js-bc-1 ➺',` ⦁ جميع البرودكاست  ⦁**`)
      .setFooter('─═════════ {✯FoxBot✯} ════════════─')
  message.author.send({embed});
  }
});

  client.on("message", message => {
 if (message.content === "^help-js-bc-1") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
	  .addField('**❖ برودكاست + للكل + مطور ➺',` ⦁  https://hastebin.com/bipanureqa.js ⦁**`)
	  .addField('**❖ برودكاست + للكل + غير مطور ➺',` ⦁  https://hastebin.com/kuvoruzowe.cs ⦁**`)
	  .addField('**❖  برودكاست + للأونلاين + مع منشن + غير مطور ➺',` ⦁  https://hastebin.com/zujuvupali.php ⦁**`)
	  .addField('**❖ برودكاست + للكل + مع منشن + غير مطور ➺',` ⦁  https://hastebin.com/zojokunayo.php ⦁**`)
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});


client.on("message", message => {
 if (message.content === "^help-js-welcome-1") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
      .addField('**❖ كود ترحيب مع ذكر رقم العضو ➺',` ⦁ https://hastebin.com/zapuyexive.js**`)
      .addField('**❖ كود الترحيب مع صورة ➺',` ⦁ https://hastebin.com/tujehubuqo.php**`)
      .addField('**❖ كود مغادرة العضو ➺',` ⦁ https://hastebin.com/gufimedaca.js**`)
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});

client.on("message", message => {
 if (message.content === "^help-js-welcome") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
      .addField('**^help-js-welcome-1➺',` ⦁جميع اكواد الترحيب⦁**`)
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});
client.on('message', msg => {
  if (msg.content === '^help') {
    msg.reply('**:heart:  شوف الخاص :heart:**');
  }
});


client.on('message', msg => {
  if (msg.content === '^help2') {
    msg.reply('**:heart: قريبا :heart:**');
  }
});
client.on('message', msg => {
  if (msg.content === '^help1') {
    msg.reply('**:heart:  شوف الخاص :heart:**');
  }
});

// Your Avatar URL!
client.on('message', message => {
    if (message.content === "^Avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on('message', msg => {
  if (msg.content === '^suppport') {
    msg.reply('السيرفر للمساعده,https://discord.gg/k2J6av');
  }
});
    client.on('message', message => {
     if (message.content === "^id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Name Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
var prefix = "^";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
  });

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('help');
  	}
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هلا') {
              message.channel.send(':heart: هلا فيك :heart:');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});
  client.on("message", message => {
 if (message.content === "^help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─══════ {✯ArabSupport✯} ══════─')
	  .addField('**➺ ^help1 ➺**', `** ⦁قائمة الاكواد ⦁ **`)
	  .addField('**➺ ^help2 ➺**', `⦁ Soon ⦁`)
      .setFooter('─══════ {✯ArabSupport✯} ══════─')
  message.author.send({embed});
  }
});
  client.on("message", message => {
 if (message.content === "^help1") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
	  .addField('**^help-js ➺** **⦁ قائمة أكواد الجافا سكربت ⦁**')
	  .addField('**^help-soon ➺**')
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});

  client.on("message", message => {
 if (message.content === "^help-js") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
	  .addField('**^help-js-source ➺ ⦁ قسم السورس الأساسي ⦁**')
	  .addField('**^help-js-bc ➺ ⦁ قسم أكواد البرودكاست ⦁**')
	  .addField('**^help-js-welcome ➺ ⦁ قسم أكواد الترحيب ⦁**')
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});

   client.on("message", message => {
 if (message.content === "^help-js-source") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
	  .addField('**^help-js-source-1 ➺ ⦁ السورس الأساسي⦁**')
	  .addField('**^help-js-source-2 ➺ ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت ⦁**')
	  .addField('**^help-js-source-3 ➺ ⦁ السورس الأساسي مع الستريمنق ومعلومات البوت ⦁**') 
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});
   client.on("message", message => {
 if (message.content === "^help-js-source-1") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
	  .addField('**❖ كود السورس الأساسي https://hastebin.com/xumiferaru.coffeescript**')
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});
   client.on("message", message => {
 if (message.content === "^help-js-source-2") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
	  .addField('** ❖ السورس الأساسي مع الستريمنق ومعلومات البوت https://hastebin.com/idotifusid.coffeescript **')
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});

   client.on("message", message => {
 if (message.content === "^help-js-source-3") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
	  .addField('** ❖ السورس الأساسي مع الواتشينق https://hastebin.com/jivizupafi.coffeescript **')
      .setFooter('─═════════ {✯ArabSupport✯} ════════════─')
  message.author.send({embed});
  }
});




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '^by') {
              message.channel.send('***:heart:*** **Server By Team ArabSupport** ***:heart:***');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'hla') {
              message.channel.send('**:heart: hla fek :heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '^bot') {
              message.channel.send('***:heart:*** **Bot By Team ArabSupport** ***:heart:***');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'Arab') {
              message.channel.send('**:heart: حالين مشغولين بس نشوفك نرد:heart:** ');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم ') {
              message.channel.send('**:heart: وعليكم السلام حبي:heart:**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'باي') {
              message.channel.send('**:heart: لله معاك :heart:**');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.send('**:heart: الله معاك :heart:** ');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'brb') {
              message.channel.send('**:heart: الله معاك :heart:**');
              message.channel.sendFile("https://lyrics-words.co/wp-content/uploads/2016/07/20160727-179.gif");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'hi') {
              message.channel.send('**:heart: Welcome :heart:**');
              message.channel.sendFile("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KNSG9XDY6qOJ8G8IRcLiIUDD-dCY7wCzKwIs8Idi5Y55qOxGgg");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '^Dev') {
              message.channel.send('***:heart:*** **Dev Server Team ArabSupport** ***:heart:***');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.login('NDY5NDAzNjMxNjI0Mzg4NjE4.DjHNwA.6oUmTaOddidYpLZsGELc-tmP-kE');
