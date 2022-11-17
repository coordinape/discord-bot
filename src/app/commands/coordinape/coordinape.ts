import {
	CommandContext,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import { LogUtils } from '../../utils/Log';
import { ServiceSupport } from '../../service/ServiceSupport';
import { GraphQLClient } from 'graphql-request';
import { getDiscordUsersQueryDocument } from '../../graphql/getDiscordUserBySnowflake';

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
		
		const client = new GraphQLClient('http://localhost:8080/v1/graphql', { headers: {
			'x-hasura-admin-secret': 'admin-secret',
		} });

		const service = new ServiceSupport(ctx);

		try {
			const { discord_users } = await client.request(getDiscordUsersQueryDocument, { userSnowflake: ctx.user.id });

			service.link(discord_users);
		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
