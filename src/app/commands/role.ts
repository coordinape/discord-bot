import { CommandContext, SlashCommand, SlashCreator } from 'slash-create';
import { LogUtils } from '../utils/Log';
import { ServiceSupport } from '../service/ServiceSupport';
import { DiscordService } from '../service/DiscordService';

/**
 * Just for testing the create role flow
 */
export default class Coordinape extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'role',
			description: 'Testing the create role flow',
			defaultPermission: true,
		});
	}

	// @command
	async run(ctx: CommandContext) {
		LogUtils.logCommandStart(ctx);

		if (ctx.user.bot) return;

		const service = new ServiceSupport(ctx);
		const discord = new DiscordService(ctx);

		try {
			await ctx.defer();

			const role = await discord.createRole({ name: 'Foo Bar Member' });
			if (role) {
				await ctx.send(`Role ${role} created!`);
			}

		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
