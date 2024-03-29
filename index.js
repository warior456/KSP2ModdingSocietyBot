
(async () => {
	require("dotenv").config();
	const { Client, GatewayIntentBits, Partials, Collection, ActivityType } = require("discord.js");
	const config = require("./Config");
	const fs = require("fs");
	const DirPath = __dirname;
	const {
		MessageCommandHandler,
		EventManager,
		ButtonCommandHandler,
		SelectMenuHandler,
		SlashCommandsHandler,
		ContextMenuHandler,
		ModalFormsHandler,
	} = require("./src/structures/handlers/HandlersManager");




	const client = new Client({
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
			//GatewayIntentBits.GuildPresences,
			GatewayIntentBits.DirectMessages,
			GatewayIntentBits.MessageContent,
			GatewayIntentBits.DirectMessageReactions,
			GatewayIntentBits.GuildMembers,
			GatewayIntentBits.GuildMessageReactions,
			GatewayIntentBits.GuildWebhooks,
			GatewayIntentBits.GuildVoiceStates,
			GatewayIntentBits.GuildInvites,
			GatewayIntentBits.GuildBans,
		],
		partials: [Partials.Channel],
	});

	client.commands = new Collection();
	client.limitCommandUses = new Collection();
	client.expireAfter = new Collection();
	client.messageCommands = new Collection();
	client.messageCommands_Aliases = new Collection();
	client.events = new Collection();
	client.slashCommands = new Collection();
	client.contextMenus = new Collection();
	client.selectMenus = new Collection();
	client.buttonCommands = new Collection();
	client.modalForms = new Collection();

	exports.rootPath = DirPath;




	client.config = require('./Config')

	await MessageCommandHandler(client, DirPath);
	await EventManager(client, DirPath);
	await ButtonCommandHandler(client, DirPath);
	await SelectMenuHandler(client, DirPath);
	await ModalFormsHandler(client, DirPath);

	await client.login(config.token);

	client.user.setActivity("Starting", {
		type: ActivityType.Playing,
	});

	await SlashCommandsHandler(client, DirPath);
	await ContextMenuHandler(client, DirPath);
})();
