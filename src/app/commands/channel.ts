/* eslint-disable no-console */
import { CommandContext, SlashCommand, SlashCreator } from 'slash-create';
import { LogUtils } from '../utils/Log';
import { ServiceSupport } from '../service/ServiceSupport';
import { DiscordService } from '../service/DiscordService';

/**
 * Just for testing creating channels
 */
export default class Coordinape extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'channel',
			description: 'Testing the channel flow',
			defaultPermission: true,
		});
	}

	// @command
	async run(ctx: CommandContext) {
		LogUtils.logCommandStart(ctx);

		if (ctx.user.bot) return;

		const service = new ServiceSupport(ctx);

		try {
			await ctx.defer();

			const discord = new DiscordService(ctx);
			const coordinapeCategory = await discord.findCategoryByName('Coordinape');
			if (coordinapeCategory) {
				const c = await discord.createChannel({ name: 'foo' + Date.now(), parent: coordinapeCategory });
				await ctx.send(`Category already existed: ${coordinapeCategory}, channel ${c} as child`);
			} else {
				const parent = await discord.createCategory({ name: 'Coordinape', position: 0 });
				const c2 = await discord.createChannel({ name: 'bar' + Date.now(), parent });
				await ctx.send(`Category created: ${parent}, channel ${c2} as child`);
			}
		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
