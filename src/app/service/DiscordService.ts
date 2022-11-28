import { CategoryChannel, ChannelType, Client, Collection, Guild, NonThreadGuildBasedChannel, TextBasedChannel, TextChannel } from 'discord.js';
import { CommandContext } from 'slash-create';
import Log from '../utils/Log';
import { notNull } from '../utils/notNull';

export class DiscordService {
	private _ctx: CommandContext;

	constructor(ctx: CommandContext) {
		this._ctx = ctx;
	}

	get client(): Client {
		return this._ctx.creator.client;
	}

	async findGuild(): Promise<Guild> {
		if (!this._ctx.guildID) {
			throw new Error('guildID is required');
		}

		return this.client.guilds.fetch(this._ctx.guildID);
	}

	async findTextChannelById(channelId: string): Promise<TextBasedChannel> {
		const textChannels = await this.getContextTextChannels();

		const channel = textChannels.get(channelId);

		if (!channel) {
			throw new Error(`No text channel found with id ${channelId}`);
		}

		return await channel.fetch();
	}

	async createCategory({ name }: { name: string }): Promise<CategoryChannel | undefined> {
		try {
			const guild = await this.findGuild();
			return guild.channels.create({ name, type: ChannelType.GuildCategory });
		} catch (e) {
			Log.error(e);
		}
	}

	async createChannel({ name, parent }: { name: string; parent?: CategoryChannel }): Promise<TextChannel | undefined> {
		try {
			const guild = await this.findGuild();
			return guild.channels.create({ name, parent });
		} catch (e) {
			Log.error(e);
		}
	}

	private async getContextTextChannels(): Promise<Collection<string, TextChannel>> {
		const guild = await this.findGuild();

		const channels = await guild.channels.fetch();
		
		return channels.filter(notNull).filter(textChannel);
	}
}

function textChannel(channel: NonThreadGuildBasedChannel): channel is TextChannel {
	return channel.type === ChannelType.GuildText;
}
