import { CommandContext, ComponentActionRow, SlashCommand, SlashCreator } from 'slash-create';
import { LogUtils } from '../utils/Log';
import { ServiceSupport } from '../service/ServiceSupport';
import { CallbackComponent } from '../service/types';

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
			const rows = await service.getRows();
			
			ctx.defer();
			const componentActionRows: ComponentActionRow[] = rows.map(({ componentActionRow }) => componentActionRow);
			await ctx.send('Coordinape Single Command', { components: componentActionRows });

			const callbackComponents: CallbackComponent[] = rows.flatMap((row) => row.callbackComponents);
			
			for (const { component: { custom_id }, callback } of callbackComponents) {
				ctx.registerComponent(custom_id, callback);
			}
		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
