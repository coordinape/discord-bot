import { Client, Guild } from 'discord.js';
import { DiscordEvent } from '../types/discord/DiscordEvent';
import Log, { LogUtils } from '../utils/Log';

export default class implements DiscordEvent {
	name = 'ready';
	once = true;

	async execute(client: Client): Promise<any> {
		try {
			if (!client.user) return;

			Log.info('Starting up the bot...');
			
			client.user.setActivity(process.env.DISCORD_BOT_ACTIVITY || '');
			client.guilds.cache.forEach((guild: Guild) => {
				Log.info(`Bot is active for: ${guild.id}, ${guild.name}`);
			});
			
			Log.info('CO Kong is ready to Coordinape!');
		} catch (e) {
			LogUtils.logError('Error processing event ready', e);
		}
	}
}
