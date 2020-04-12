const discord = require("discord.js");
let bot = new discord.Client();

bot.on("ready", () => bot.user.setActivity("Looking SyntaXRP Server"));
bot.on("message", msg => msg.content.includes("hello") && msg.channel.send("*Hey, how i can help you today?*"));

bot.login("[Njk3Nzc4MjgzNzE4MjQ2NDcw.XpLslA.xKiHzAhmLAZj7LKdw0Q6WvoNZ84]");

mkdir botFolder &&
cd botFolder &&
copy NUL bot.js &&
notepad bot.js