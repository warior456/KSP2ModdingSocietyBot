const Reply = require("../../../structures/handlers/replyHandler");
const {ApplicationCommandOptionType } = require("discord.js");
module.exports = {
	name: "requestyt", //extras: commandOptions
	aliases: [],
	options: [//optional
		{
			name: "link",
			type: ApplicationCommandOptionType.String ,
			description: "give your Youtube link",
			required: true,
		},

	],
	description: "request to verify your youtube channel",
	category: "other",
	run: async (client, message, args) => {
		//async only if deferring
        Reply.send(message, "submitted your channel")
        client.channels.cache.get(client.config.requestChannel).send(`User <@${message.member.id}> Requested verified Youtube with: ${args[0]}`)
	},
};