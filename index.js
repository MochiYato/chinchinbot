var Discord = require("Discord.js")

var bot = new Discord.Client();
// on bot startup shows a message.
bot.on("ready", () => {
	console.log(`Ready to begin! Serving in ${bot.channels.length} channels`);
});
// on bot message received.
// reads chat and answers pretty much lmao

bot.on("message", function(message){
	if (message.content === "hey")
	{
		bot.sendMessage(message, "hey!");
	}
	if (message.content === "whats up?")
	{
		bot.sendMessage(message, "nm you?");
	}
	if (message.content === "chin chin")
	{
		bot.sendMessage(message, "yea?");
	}
	if (message.content === "whos bae?")
	{
		bot.sendMessage(message, "you are bae");
	}
	if (message.content === "what do you think bout toyo")
	{
		bot.sendMessage(message, "dis boi gay as fuq");
	}
	if (message.content === "kms")
	{
		bot.sendMessage(message, "have fun")
		bot.sendFile(message, "https://i.gyazo.com/e08997b69b52b2ac54f4f1cb4de52416.jpg");
	}
	if (message.content === "goodnight")
	{
		bot.sendMessage(message, "good night daddy ♥");
	}
	if (message.content === "kys")
	{
		bot.sendMessage(message, "Enjoy")
		bot.sendFile(message, "https://i.gyazo.com/e08997b69b52b2ac54f4f1cb4de52416.jpg");

	}
});
 bot.on("disconnected", () => {
	console.log("Disconnected, exiting!");
	process.exit();
 })
// Credentials here 
 //bot.loginWithToken("***REMOVED***");
 bot.login("***REMOVED***", "***REMOVED***")