import { CommandContext, SlashCommand, SlashCreator } from 'slash-create';
import { LogUtils } from '../utils/Log';
import { ServiceSupport } from '../service/ServiceSupport';

export default class Coordinape extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'coordinape',
			description: 'Interact with Coordinape directly in Discord.',
			defaultPermission: true,
		});
	}

	// @command
	async run(ctx: CommandContext) {
		LogUtils.logCommandStart(ctx);

		if (ctx.user.bot) return;

		const service = new ServiceSupport(ctx);

		try {
			ctx.defer();

			const { componentActionRows, callbackComponents } = await service.getCallbackComponentsWithRows();

			await ctx.send('Coordinape Single Command', { components: componentActionRows });
			
			for (const { component: { custom_id }, callback } of callbackComponents) {
				ctx.registerComponent(custom_id, callback);
			}
		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
