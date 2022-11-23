import { CategoryChannel, ChannelType, Client, Collection, Guild, GuildBasedChannel, Role, TextChannel } from 'discord.js';
import { CommandContext } from 'slash-create';
import Log from '../utils/Log';

export class DiscordService {
	private _ctx: CommandContext;

	constructor(ctx: CommandContext) {
		this._ctx = ctx;
	}

	get client(): Client {
		return this._ctx.creator.client;
	}

	get guild(): Guild | undefined {
		if (!this._ctx.guildID) return;

		return this.client.guilds.cache.get(this._ctx.guildID);
	}

	get channels(): GuildBasedChannel[] | undefined {
		if (!this.guild) return;

		return this.guild.channels.cache.reduce((a, v): any => {
			if (v.type === ChannelType.GuildCategory) {
				return a;
			}

			return [...a, v];
		}, []);
	}

	get roles(): Collection<string, Role> | undefined {
		if (!this.guild) return;

		return this.guild.roles.cache;
	}

	async createCategory({ name }: { name: string }): Promise<CategoryChannel | undefined> {
		if (!this.guild) return;

		try {
			return this.guild.channels.create({ name, type: ChannelType.GuildCategory });
		} catch (e) {
			Log.error(e);
		}
	}

	async createChannel({ name, parent }: { name: string; parent?: CategoryChannel }): Promise<TextChannel | undefined> {
		if (!this.guild) return;
		
		try {
			return this.guild.channels.create({ name, parent });
		} catch (e) {
			Log.error(e);
		}
	}
}
