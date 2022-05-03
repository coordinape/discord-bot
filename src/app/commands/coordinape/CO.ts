import {
	// CommandContext,
	CommandOptionType,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
// import ServiceUtils from '../../utils/ServiceUtils';
// import constants from '../../service/constants/constants';
// import { GuildMember } from 'discord.js';
// import { command } from '../../utils/Sentry';

export default class CO extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'co',
			description: 'Coordinape commands for managing your Epochs and/or Epoch participation.',
			defaultPermission: true,
			options: [
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
					name: 'discord',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Join the Coordinape Discord',
				},
				{
					name: 'feedback',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'How can Coordinpae improve? This drops a link to a feedback form.',
				},
				{
					name: 'help',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'This populates a list of available Coordinape commands and what they do.',
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
				{
					name: 'website',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'This drops a link to the Coordinape website.',
				},

			],
		});
	}
}