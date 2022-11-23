import {
	CommandContext,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import { LogUtils } from '../utils/Log';
import { ServiceSupport } from '../service/ServiceSupport';
import { Chain } from '../api/zeus';


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

		const chain = Chain('http://localhost:8080/v1/graphql', {
			headers: {
				'x-hasura-admin-secret': 'admin-secret',
			},
		});
		
		const service = new ServiceSupport(ctx);

		try {
			const { discord_users } = await chain('query')({
				discord_users: [
					{ where: { user_snowflake: { _eq: ctx.user.id } } },
					{ user_snowflake: true },
				],
			});

			service.link(discord_users);
		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
