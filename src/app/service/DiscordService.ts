import { CategoryChannel, ChannelType, Client, Collection, Guild, GuildChannelCreateOptions, NonThreadGuildBasedChannel, Role, RoleCreateOptions, TextBasedChannel, TextChannel } from 'discord.js';
import { CommandContext, ComponentContext } from 'slash-create';
import Log from '../utils/Log';
import { notNull } from '../utils/notNull';

export class DiscordService {
	private _ctx: CommandContext | ComponentContext;

	constructor(ctx: CommandContext | ComponentContext) {
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

	async findTextChannelById(channelId: string): Promise<TextBasedChannel | undefined> {
		const textChannels = await this.getContextTextChannels();

		return textChannels.get(channelId);
	}

	async findCategoryByName(name: string): Promise<CategoryChannel | undefined> {
		const guild = await this.findGuild();

		const channels = await guild.channels.fetch();
		
		return channels.filter(notNull).filter(categoryChannel).filter((channel) => channel.name === name).first();
	}

	async createCategory({ name, ...rest }: GuildChannelCreateOptions): Promise<CategoryChannel | undefined> {
		try {
			const guild = await this.findGuild();
			return guild.channels.create({ name, ...rest, type: ChannelType.GuildCategory });
		} catch (e) {
			Log.error(e);
		}
	}

	async createChannel({ name, parent, ...rest }: GuildChannelCreateOptions): Promise<TextChannel | undefined> {
		try {
			const guild = await this.findGuild();
			return guild.channels.create({ name, parent, ...rest });
		} catch (e) {
			Log.error(e);
		}
	}

	async createRole({ name, ...rest }: Omit<RoleCreateOptions, 'icon'>): Promise<Role | undefined> {
		try {
			const guild = await this.findGuild();
			return guild.roles.create({
				name,
				color: '#717c7f',
				hoist: true,
				mentionable: true,
				...rest,
			});
		} catch (e) {
			Log.error(e);
		}
	}

	async findRole(id: string): Promise<Role | null> {
		try {
			const guild = await this.findGuild();
			return guild.roles.fetch(id);
		} catch (e) {
			Log.error(e);
			return null;
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

function categoryChannel(channel: NonThreadGuildBasedChannel): channel is CategoryChannel {
	return channel.type === ChannelType.GuildCategory;
}
