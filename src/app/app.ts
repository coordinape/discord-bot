import * as Sentry from '@sentry/node';
import {
	SlashCreator,
	GatewayServer,
	SlashCommand,
	CommandContext,
	ComponentType,
} from 'slash-create';
import Discord, {
	Client,
	ClientOptions,
	GatewayIntentBits,
	Partials,
	GatewayDispatchEvents,
} from 'discord.js';
import path from 'path';
import fs from 'fs';
import Log, { LogUtils } from './utils/Log';
import apiKeys from './service/constants/apiKeys';
import constants from './service/constants/constants';
import { RewriteFrames } from '@sentry/integrations';
import { handleComponentInteraction } from './interactions/componentInteractions/handleComponentInteraction';
import { assignRoleHandler, unassignRoleHandler } from './interactions/componentInteractions/handlers';
import { ASSIGN_ROLE_USER_SELECT, UNASSIGN_ROLE_USER_SELECT } from './service/components/getChangeRoleSelect';
import { DiscordService } from './service/DiscordService';

initializeSentryIO();
const client: Client = initializeClient();
initializeEvents();

export type SlashCreatorWithDiscordJS = Omit<SlashCreator, 'client'> & { client?: Client };

const creator: SlashCreatorWithDiscordJS = new SlashCreator({
	applicationID: process.env.DISCORD_BOT_APPLICATION_ID || '',
	publicKey: process.env.DISCORD_BOT_PUBLIC_KEY,
	token: process.env.DISCORD_BOT_TOKEN,
	client,
});

creator.on('debug', (message) => Log.debug(`debug: ${ message }`));
creator.on('warn', (message) => Log.warn(`warn: ${ message }`));
creator.on('modalInteraction', (message) => Log.warn(`modalInteraction: ${ message }`));
creator.on('commandInteraction', (message) => Log.warn(`commandInteraction: ${ message }`));
creator.on('unknownInteraction', (message) => Log.warn(`unknownInteraction: ${ message }`));
creator.on('componentInteraction', async (componentContext) => {
	const discordService = new DiscordService(componentContext);
	if (componentContext.componentType === ComponentType.USER_SELECT) {
		if (componentContext.customID === ASSIGN_ROLE_USER_SELECT.custom_id) {
			return assignRoleHandler({ componentContext });
		}
		if (componentContext.customID === UNASSIGN_ROLE_USER_SELECT.custom_id) {
			return unassignRoleHandler({ componentContext });
		}
	}
	handleComponentInteraction({ ctx: componentContext, discordService });
	Log.warn(`componentInteraction: ${ componentContext }`);
});
creator.on('modalInteraction', async (message) => {
	message.send({ content: `<@${message.user.id}> you've typed\n> ||${message.values['TEXT_INPUT']}||\n in the \`TEXT_INPUT\` input field` });
	Log.warn(`modalInteraction: ${ message }`);
});
creator.on('autocompleteInteraction', (message) => Log.warn(`autocompleteInteraction: ${ message }`));
creator.on('error', (error: Error) => Log.error(`error: ${ error }`));
creator.on('synced', () => Log.debug('Commands synced!'));
creator.on('commandRegister', (command: SlashCommand) => Log.debug(`Registered command ${command.commandName}`));
creator.on('commandError', (command: SlashCommand, error: Error) => Log.error(`Command ${command.commandName}:`, {
	indexMeta: true,
	meta: {
		name: error.name,
		message: error.message,
		stack: error.stack,
		command,
	},
}));

// Ran after the command has completed
creator.on('commandRun', (command:SlashCommand, result: Promise<any>, ctx: CommandContext) => {
	LogUtils.logCommandEnd(ctx);
});

// Register command handlers
creator
	.withServer(
		new GatewayServer((handler) => client.ws.on(GatewayDispatchEvents.InteractionCreate, handler)),
	)
	.registerCommandsIn(path.join(__dirname, 'commands'), ['.ts'])
	.syncCommands();

// Log client errors
client.on('error', Log.error);

client.login(process.env.DISCORD_BOT_TOKEN);

function initializeClient(): Client {
	const clientOptions: ClientOptions = {
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildBans,
			GatewayIntentBits.GuildMembers,
			GatewayIntentBits.GuildEmojisAndStickers,
			GatewayIntentBits.GuildVoiceStates,
			GatewayIntentBits.GuildPresences,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.GuildMessageReactions,
			GatewayIntentBits.DirectMessages,
			GatewayIntentBits.DirectMessageReactions,
		],
		partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User],
	};
	return new Discord.Client(clientOptions);
}

function initializeEvents(): void {
	const eventFiles = fs.readdirSync(path.join(__dirname, '/events')).filter(file => file.endsWith('.js'));
	eventFiles.forEach(file => {
		const event = new (require(`./events/${file}`).default)();
		try {
			if (event.once) {
				client.once(event.name, (...args) => event.execute(...args, client));
			} else {
				client.on(event.name, (...args) => event.execute(...args, client));
			}
		} catch (e: any) {
			Log.error('Event failed to process', {
				indexMeta: true,
				meta: {
					name: e.name,
					message: e.message,
					stack: e.stack,
					event,
				},
			});
		}
	});
}

function initializeSentryIO() {
	Sentry.init({
		dsn: `${apiKeys.sentryDSN}`,
		tracesSampleRate: 1.0,
		debug: false,
		release: `${constants.APP_NAME}@${constants.APP_VERSION}`,
		environment: `${process.env.SENTRY_ENVIRONMENT}`,
		integrations: [
			new RewriteFrames({
				root: __dirname,
			}),
			new Sentry.Integrations.Http({ tracing: true }),
		],
	});
}

export default client;
