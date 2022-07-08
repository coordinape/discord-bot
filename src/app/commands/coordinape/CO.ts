import {
	CommandContext,
	CommandOptionType,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import { LogUtils } from '../../utils/Log';
// import { command } from '../../utils/Sentry';
import serviceSupport from '../../utils/ServiceSupport';

export default class CO extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'co',
			description: 'Coordinape commands for managing your Epochs and/or Epoch participation.',
			defaultPermission: true,
			options: [
				{
					name: 'configuration',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Configure the bot.',
					options: [
						{
							name: 'permissions',
							type: CommandOptionType.SUB_COMMAND,
							description: 'Configure bot permission scopes.',
						},
						{
							name: 'alerts',
							type: CommandOptionType.SUB_COMMAND,
							description: 'Configure bot alert types and frequency.',
						},
					],
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
		
		const subCommand: string = ctx.subcommands[0];

		try {
			switch (subCommand) {
			case 'configuration':
				if (ctx.subcommands[1] === 'permissions') {
					return serviceSupport.configurationPermissions(ctx);
				} else if (ctx.subcommands[1] === 'alerts') {
					return serviceSupport.configurationAlerts(ctx);
				} else {
					throw Error(`Unexpected subcommand ${ctx.subcommands[1]}`);
				}
			case 'support':
				if (ctx.subcommands[1] === 'coordinape-discord') {
					return serviceSupport.ephemeralError(ctx, 'Join the Coordinape Discord Server!');
				} else if (ctx.subcommands[1] === 'website') {
					return serviceSupport.ephemeralWebsite(ctx);
				} else {
					throw Error(`Unexpected subcommand ${ctx.subcommands[1]}`);
				}
			}
		} catch (e) {
			LogUtils.logError('Welp, this is fucked.', e);
			await serviceSupport.ephemeralError(ctx);
			return;
		}
	}
}