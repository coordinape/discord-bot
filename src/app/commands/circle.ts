import { CommandContext, SlashCommand, SlashCreator } from 'slash-create';
import { LogUtils } from '../utils/Log';
import { ServiceSupport } from '../service/ServiceSupport';
import { handleLinkCircles } from '../interactions/componentInteractions/handlers/configuration/2_handleLinkCircles';

/**
 * Just for testing the circle flow
 */
export default class Coordinape extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'circle',
			description: 'Testing the circle flow',
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

			await handleLinkCircles(ctx);
		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
