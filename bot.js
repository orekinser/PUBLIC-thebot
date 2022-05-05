    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} OK兄弟們 全體目光向我看齊！`) ;
    }) ;
	
    client.on('message',msg=>{
			if(msg.content.startsWith("!簽")){
        var rnd = Random(10,1);
  switch(rnd){
    case 1:msg.reply("你晚上要去做豬底迪了");break;
    case 2:msg.reply("你起床準備做牛郎就對了");break;
    case 3:msg.reply("040");break;
	case 4:msg.reply("你喇媽的勒");break;
    case 5:msg.reply("好了啦~!");break;
    case 6:msg.reply("阿是不會按通話喔");break;
		  case 7:msg.reply("你雞雞可以再小一點");break;
		  case 8:msg.reply("牙籤閉嘴");break;
		  case 9:msg.reply("阿是乾我屁事");break;
		  case 10:msg.reply("開幹!");break;
  }
	}
	}) ;

 client.on('message',msg=>{
			if(msg.content.startsWith("!下")){
        var rnd = Random(10,1);
  switch(rnd){
    case 1:msg.reply("踏馬的豬底迪");break;
    case 2:msg.reply("你是在哭幾點");break;
	  case 3:msg.reply("040");break;
	case 4:msg.reply("芒果啦幹");break;
    case 5:msg.reply("札記有的寫");break;
    case 6:msg.reply("我能不能也下線");break;
		    case 7:msg.reply("你再熬夜一次給我試試看");break;
		  case 8:msg.reply("下屁喔");break;
		  case 9:msg.reply("今天札記很多元");break;
		  case 10:msg.reply("Fuck u friend啦");break;
  }
	}
	}) ;


	
   client.on('message',msg=>{
	   if(msg.content.startsWith("!raysu")){
		   var rnd = Random(33,1);
  switch(rnd){
		  case 1:msg.channel.sendMessage("喂~~");break;
		  case 2:msg.channel.sendMessage("蛤 我剛剛沒關麥嗎");break;
		  case 3:msg.channel.sendMessage("ㄜ據我所知");break;
		  case 4:msg.channel.sendMessage("ㄜ巨根嗦汁");break;
		  case 5:msg.channel.sendMessage("你講這話就是要讓我生氣啊!");break;
		  case 6:msg.channel.sendMessage("我不是很早就說過了嗎!");break;
		  case 7:msg.channel.sendMessage("我看你是不想活了");break;
		  case 8:msg.channel.sendMessage("什麼雞雞棒");break;
		  case 9:msg.channel.sendMessage("喔那個札記~");break;
		  case 10:msg.channel.sendMessage("豆皮rAYsU");break;
		  case 11:msg.channel.sendMessage("https://imgur.com/a/264Ee7R");break;
		  case 12:msg.channel.sendMessage("你知道我聽得到嗎");break;
		  case 13:msg.channel.sendMessage("關我屁事啊~?");break;
		  case 14:msg.channel.sendMessage("?_?");break;
		  case 15:msg.channel.sendMessage("-.-");break;
		  case 16:msg.channel.sendMessage(":question: ");break;
		  case 17:msg.channel.sendMessage("這故事告訴我們");break;
		  case 18:msg.channel.sendMessage("當你講出這句話的時候");break;
		  case 19:msg.channel.sendMessage("你什麼意思");break;
		  case 20:msg.channel.sendMessage(":question: ");break;
		   case 21:msg.channel.sendMessage("ㄟ屁啦");break;
		   case 22:msg.channel.sendMessage("好啊都這樣啊");break;
		   case 23:msg.channel.sendMessage("蛤~~");break;
		   case 24:msg.channel.sendMessage("你媽逼啦");break;
		   case 25:msg.channel.sendMessage("我真的按了ㄟ");break;
		   case 26:msg.channel.sendMessage("靠腰阿");break;
		   case 27:msg.channel.sendMessage("啥小啦");break;
		   case 28:msg.channel.sendMessage("你大便啦");break;
		   case 29:msg.channel.sendMessage("我卡了啦!");break;
		   case 30:msg.channel.sendMessage("👍🏿");break;
		   case 31:msg.channel.sendMessage("小皮RaySu誰啦~~?");break;
	           case 32:msg.channel.sendMessage("白癡");break;
		   case 33:msg.channel.sendMessage("你覺得呢?");break;
  }
}
    }) ;

client.on('message',msg=>{
	                if(msg.content.startsWith("/pic")){
	  var rnd = Random(20,1);
          msg.channel.send({files:["./picture/"+rnd+".png"]});
			}
}) ;

	

client.on('message',msg=>{
			if(msg.content.startsWith("!睡")){
				var rnd = Random(4,1);
				switch(rnd){
					case 1:msg.reply("睡三小,你就把你人生睡掉沒關係");break;
						case 2:msg.reply("媽的新一代懶豬");break;
						case 3:msg.reply("瓜挖闢蘇");break;
						case 4:msg.reply("你睡就睡跟我講幹嘛啊?");break;
				}
			}
	});

    client.on('message',msg=>{
			if(msg.content.startsWith("!醒")){
        var rnd = Random(4,1);
  switch(rnd){
    case 1:msg.reply("死者復甦了屬實是");break;
    case 2:msg.reply("然後呢?");break;
    case 3:msg.reply("重點是、靠杯");break;
	case 4:msg.reply("Woke up on the right side of the bed");break;
  }
	}
	}) ;

client.on('message',msg=>{
	   if(msg.content.includes("幹")){
		   var rnd = Random(12,1);
  switch(rnd){
		  case 1:msg.channel.sendMessage("你罵誰啦");break;
		  case 2:msg.channel.sendMessage("你娘老雞掰");break;
		  case 3:msg.channel.sendMessage("幹你就繼續罵");break;
		  case 4:msg.channel.sendMessage("怎樣你罵髒話是想吵架是不是");break;
		  case 5:msg.channel.sendMessage("你在跟我幹幹叫什麼啦");break;
		  case 6:msg.channel.sendMessage("吵三小");break;
		  case 7:msg.channel.sendMessage("閉嘴啦臭肛門");break;
		  case 8:msg.channel.sendMessage("幹什麼幹啦");break;
		  case 9:msg.channel.sendMessage("他媽的你算三小");break;
		  case 10:msg.channel.sendMessage("不要跟我屁話");break;
		  case 11:msg.channel.sendMessage("機掰三小 你當你是老大喔");break;
		  case 12:msg.channel.sendMessage("北七一個 幹你媽啦幹");break;
  }
}
    }) ;

client.on('message',msg=>{
	   if(msg.content.startsWith("@retard_Confirm#0335 你在嗎")){
		   var rnd = Random(3,1);
  switch(rnd){
		  case 1:msg.channel.sendMessage("他媽的想怎樣");break;
		  case 2:msg.channel.sendMessage("林北在休息你在吵屁喔");break;
		  case 3:msg.channel.sendMessage("廢話 當你看著右邊的上線欄還問這個問題我就知道你是個智障了");break;
  }
}
    }) ;

client.on('message',msg=>{
			if(msg.content.startsWith("安安")){
				msg.reply("他媽的真的是一個低能兒。");
			}
	});

client.on('message',msg=>{
			if(msg.content.startsWith("040")){
				msg.channel.send("040");
			}
	});

	
	function Random(max,min){
             var rnd = Math.floor(Math.random()*max)+min ;
             return rnd ;
		}

    client.login(settings.token) ;
	
	
	
	
