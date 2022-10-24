import {
	CommandContext,
	CommandOptionType,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import { LogUtils } from '../../utils/Log';
// import { command } from '../../utils/Sentry';
import { ServiceSupport } from '../../service/ServiceSupport';

export default class CO extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'co',
			description: 'Coordinape commands for managing your Epochs and/or Epoch participation.',
			defaultPermission: true,
			options: [
				{
					name: 'ping',
					type: CommandOptionType.SUB_COMMAND,
					description: 'Testing',
				},
				{
					name: 'link',
					type: CommandOptionType.SUB_COMMAND,
					description: 'Link your Discord and Coordinape accounts.',
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
		
		const service = new ServiceSupport(ctx);

		try {
			switch (ctx.subcommands[0]) {
			case 'ping':
				service.ephemeralText({ text: 'pong' });
				break;
			case 'link':
				service.ephemeralText({ text: 'TODO' });
				break;
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
