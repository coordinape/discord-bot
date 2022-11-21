import {
	CommandContext,
	CommandOptionType,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import { LogUtils } from '../../utils/Log';
import { ServiceSupport } from '../../service/ServiceSupport';
import { getCirclesQueryDocument, getOrganizationsQueryDocument } from '../../api/graphql';
import { GraphQLClient } from 'graphql-request';

export default class CO extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'co',
			description: 'Coordinape commands for managing your Epochs and/or Epoch participation.',
			defaultPermission: true,
			options: [
				// {
				// 	name: 'init',
				// 	type: CommandOptionType.SUB_COMMAND,
				// 	description: 'Initiate',
				// },
				{
					name: 'circles',
					type: CommandOptionType.SUB_COMMAND,
					description: 'Get Circles',
				},
				{
					name: 'roles',
					type: CommandOptionType.SUB_COMMAND,
					description: 'Get Roles',
				},
				{
					name: 'channels',
					type: CommandOptionType.SUB_COMMAND,
					description: 'Get Channels',
				},
				{
					name: 'organizations',
					type: CommandOptionType.SUB_COMMAND,
					description: 'Get Organizations',
				},
				{
					name: 'support',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Provides a link to Coordinape\'s Discord server.',
					options: [
						{
							name: 'coordinape-discord',
							type: CommandOptionType.SUB_COMMAND,
							description: 'Provides a link to Coordinape\'s Discord server.',
						},
						{
							name: 'website',
							type: CommandOptionType.SUB_COMMAND,
							description: 'This drops a link to the Coordinape website.',
						},
					],
				},
			],
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
			switch (ctx.subcommands[0]) {
			// case 'init': {
			// 	const { organizations } = await client.request(getInitQueryDocument, {});
			// 	service.init(organizations);
			// 	break;
			// }
			case 'circles': {
				const { circles } = await client.request(getCirclesQueryDocument, {});
				service.ephemeralText({ text: circles.map(({ name }) => name).join(', ') });
				break;
			}
			case 'roles': {
				const roles = await service.roles();
				service.ephemeralText({ text: roles.map(({ name }) => name).join(', ') });
				break;
			}
			case 'channels': {
				const channels = await service.channels();
				service.ephemeralText({ text: channels.map(({ name }) => name).join(', ') });
				break;
			}
			case 'organizations': {
				const { organizations } = await client.request(getOrganizationsQueryDocument, {});
				service.ephemeralText({ text: organizations.map(({ name }) => name).join(', ') });
				break;
			}
			case 'support':
				switch(ctx.subcommands[1]) {
				case 'coordinape-discord':
					service.ephemeralWebsite({
						label: 'Coordinape on Discord',
						url: 'https://discord.coordinape.com/',
						content: 'Join the Coordinape Discord Server!',
					});
					break;
				case 'website':
					service.ephemeralWebsite({
						label: 'Coordinape on the Web',
						url: 'https://coordinape.com',
						content: 'Visit us on the interwebs to access your Circles!',
					});
					break;
				}
				break;
			default:
				service.ephemeralError({ msg: `Command "${ctx.subcommands[0]}" not recognized` });
				break;
			}

		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
