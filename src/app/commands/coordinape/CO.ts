import {
	CommandContext,
	CommandOptionType,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import { LogUtils } from '../../utils/Log';
// import { command } from '../../utils/Sentry';
import serviceSupport from '../../utils/ServiceSupport';
import { commandPreChecks } from '../../service/coordinape/commandPreChecks';
import { configurationCommand } from '../../service/coordinape/configure';
import { assignCommand } from '../../service/coordinape/assign';

export default class CO extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'co',
			description: 'Coordinape commands for managing your Epochs and/or Epoch participation.',
			defaultPermission: true,
			options: [
				{
					name: 'configure',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Configure the bot.',
					options: [
						{
							name: 'alerts',
							type: CommandOptionType.SUB_COMMAND,
							description: 'Configure alerts.',
							options: [
								{
									name: 'channel',
									description: 'The name or snowflake of the alerts channel',
									type: CommandOptionType.CHANNEL,
									required: true,
								},
							],
						},
						{
							name: 'roles',
							type: CommandOptionType.SUB_COMMAND,
							description: 'Configure roles.',
							options: [
								{
									name: 'role',
									description: 'The name or snowflake of the role',
									type: CommandOptionType.ROLE,
									required: true,
								},
							],
						},
					]
				},
				{
					name: 'assign',
					type: CommandOptionType.SUB_COMMAND,
					description: 'Assign a Discord role to a circle.',
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
		
		const subCommand: string[] = ctx.subcommands;

		try {
			// Pre-validation of requirements before returning modals in
			// 1. `configurationCommand`: user must be discord server admin 
			// 2. `assignCommand` user must be admin in at least one circle && have linked their discord user account to coordinape
			let preCheck;
			if (subCommand[0] == 'configure' || subCommand[0] == 'assign') {
				preCheck = await commandPreChecks(ctx);
				if (!preCheck.status) {
					return serviceSupport.ephemeralError(ctx, preCheck.msg);
				}
			}
			if (subCommand[0] == 'configure') {
				return configurationCommand(ctx);
			}
			/*
			switch (subCommand) {
			case 'configuration':
				
			case 'assign':
				return assignCommand(ctx, preCheck.data.userAdminCircleIds);
			case 'support':
				if (ctx.subcommands[1] === 'coordinape-discord') {
					return serviceSupport.ephemeralError(ctx, 'Join the Coordinape Discord Server!');
				} else if (ctx.subcommands[1] === 'website') {
					return serviceSupport.ephemeralWebsite(ctx);
				}
			}
			*/
		} catch (e) {
			LogUtils.logError('Welp, this is fucked.', e);
			await serviceSupport.ephemeralError(ctx);
			return;
		}
	}
}