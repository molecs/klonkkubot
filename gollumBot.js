const discord = require ('discord.js')

var client = new discord.Client();

const token = "NTE3NDIzMzE1MTcwNzU0NTgx.DuCG3Q.n4xG7BzB-3UNd3Qa6NcrfFFmryI";

client.on ("ready", () => {
    console.log ("ready!");

    client.user.setGame ("Luikumassa nyöriin!");
});

const prefix = "klonkku";
client.on ("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix + " kys")) {
        message.reply ('kys');
    }

    if (message.content.startsWith ("klonkku")) {
        message.channel.send  ({files: ["klonkkutenkasja.png"]})
    }

});

client.login (process.env.BOT_TOKEN);
