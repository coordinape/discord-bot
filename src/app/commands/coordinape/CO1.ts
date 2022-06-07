// import { GuildMember } from 'discord.js';
/*
import {
	CommandContext,
	CommandOptionType,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import serviceSupport from '../../utils/ServiceSupport';
import Log, { LogUtils } from '../../utils/Log';
import { command } from '../../utils/Sentry';

export default class CO1 extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'co',
			description: 'Coordinape commands for managing your Epochs and/or Epoch participation.',
			defaultPermission: true,
			options: [
				{
					name: 'help',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'This populates a list of available Coordinape commands and what they do.',
					options: [
						{
							name: 'commands',
							type: CommandOptionType.SUB_COMMAND,
							description: 'This populates a list of available Coordinape commands and what they do.',
						},
						{
							name: 'coordinape discord',
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
				{
					name: 'contribute',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'What did you do this Epoch? Enter your contribution statement:',
				},
				{
					name: 'create',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Create a new Circle for your Org',
				},
				{
					name: 'feedback',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'How can Coordinpae improve? This drops a link to a feedback form.',
				},
				{
					name: 'link',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Link your Discord account to your Coordinape account',
				},
				{
					name: 'nominate',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Nominate a fellow contributor to be added to your Circle.',
				},
				{
					name: 'note',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Leave a note for your fellow contributors!',
				},
				{
					name: 'notes',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Review the notes you\'ve left your fellow contributors!',
				},
				{
					name: 'opt-in',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Opt in to recieve GIVE',
				},
				{
					name: 'opt-out',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Opt out of recieving GIVE',
				},
				{
					name: 'summary',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Most recent Epoch summary',
				},
				{
					name: 'vouch',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Vouch for a nominee.',
				},
			],
		});
	}

	@command
	async run(ctx: CommandContext): Promise<void> {
		LogUtils.logCommandStart(ctx);
		if (ctx.user.bot) return;
		
		const subCommand: string = ctx.subcommands[0];

		try {
			switch (subCommand) {
			case 'help':
				if (ctx.subcommands[1] == 'coordinape discord') {
					return serviceSupport.ephemeralError(ctx, 'Join the Coordinape Discord Server!');
				} else {
					return serviceSupport.ephemeralWebsite(ctx);
				}
			case 'contribute':
				return;
			case 'create':
				return;
			default:
				await ctx.send({ content: 'Hmm ... That didn\'t work. Why not try another command?', ephemeral: true }).catch(Log.error);
				return;
			}
		} catch (e) {
			LogUtils.logError('Welp, this is fucked.', e);
			await serviceSupport.ephemeralError(ctx);
			return;
		}
	}
}
*/