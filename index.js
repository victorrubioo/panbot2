const Discord = require("discord.js");

const TOKEN = "NDcxODI5ODQzNDA4MDYwNDE3.DljJ-Q.dJqVBAXsE6szMJ8V5NAIwv_YTTU"

const PREFIX = "p-";

var bimborespuesta = [
    "¡COMO LO VUELVAS A MENCIONAR ME CABREO! :rage:",
    "Emmm... ¿Tu eres tonto?",
    "¿A que huele?... Ah sí, a **baneo**",
    "De verdad, ¿Que haces con tu vida?",
    "Voy a ir llamando a los admins...",
    "Porfavor, para me quiero llevar bien contigo",
    "De verdad, ¿Vas a continuar con esto?",
    "¿Si?, vale, vaaale, me acaban de llamar y me han dicho que eres gilipollas.",
];

var fortunes = [
    "Sí",
    "No",
    "Puede",
    "Alomejor",
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Listo!");
})

bot.login(TOKEN);

bot.on("guildMemberAdd", function(message) {
    member.guild.channel.find("name", "general").sedMessage(member.toString() + "Bienvenido!");

    member.addRole(member.guild.roles.find("name", "[ 🍞 Iniciado 🍞] (lvl 1)"));
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLocaleLowerCase()) {
    case "ayuda":
        var embed = new Discord.RichEmbed()
        .setDescription("Para ver los comandos pon p-comandos, si es por otra cosas contacta con los admins.",)
        message.channel.sendEmbed(embed);
        break;
    case "bimbo":
        message.channel.sendMessage(bimborespuesta[Math.floor(Math.random() * bimborespuesta.length)])
        break;
    case "infobot":
        var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("**Este bot ha sido creado por @ElTitoCalle#1032 , si necesitas algunos de mis bots en tu server, contáctame.**");
        message.channel.sendEmbed(embed);
        break;
    case "panadivino":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("No puedo leer eso.");
        break;
    case "comandos":
        var embed = new Discord.RichEmbed()
            .addField("**__COMANDOS__**", "A continuación se mostrarán los comandos.",)
            .addField("**__AYUDA__**:thinking: ", "infobot y comandos",)
            .addField("**__DIVERSIÓN__**:tada: ", "panadivino p-panadivino (pregunta)",)
            .addField("**__ILEGALES__**:no_entry_sign: ", "bimbo", true)
            .setColor("BLUE")
            .setFooter("Todos los comando van seguidos de p-")
        
        message.channel.sendEmbed(embed);
        break;
    case "normas":
        var embed = new Discord.RichEmbed()
            .addField("**__Normas__**", "¡Lee y obedece!")
            .addField("**[1]**", "__Cada cosa en su lugar. Quien use comandos en lugares no permitidos, se le tendrá que sancionar. :bangbang:__ ")
            .addField("**[2]**", "__Respeto ante todo. Este es un grupo sin censura y con todo tipo de humor, pero no se permiten los insultos serios. Si hay discusiones y peleas se le tendrá que poner límites al humor. :frowning:__",)
            .addField("**[3]**", "__No pidan rangos. Los rangos solo se darán a los más antiguos. Si quieren un rango, pídanselo al dueño de la panadería (YO) y discutiremos entre los admins.__", )
            .addField("**[4]**", "__No spameen mensajes. Es muy molesto para los que quieren hablar tranquilamente.__",)
            .addField("**[5]**", "__Esto es una coña, pero para nosotros es importante. NO ALABAR AL PAN BIMBO, ES EL SATANÁS DEL PANISMO.__",)
            .addField("**[6]**", "__Por favor, nada de molestar con el bot de música. Algunos quieren escuchar música tranquilamente y si lo paráis para poner cualquier gilipollez pues no está bien...__",)
            .addField("**[7]**", "__Disfrutad de todo esto, y si necesitáis ayuda, tan solo llámanos!__",)
            .setColor('ORANGE')
            .setFooter("-ATTE: EL EQUIPO DE PANS :PANS: ")
            .setThumbnail(message.author.avatarURL)

        message.channel.sendEmbed(embed);
        break;
    default:
         var embed = new Discord.RichEmbed()
         .setColor("RED")
         .setFooter("Para saber los comandos disponibles ponga p-comandos.")
         .setDescription("**Intruduzca un comando válido.**");
        message.channel.sendEmbed(embed);

    }
})