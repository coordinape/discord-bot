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
			name: 'CO',
			description: 'Coordinape commands for managing your Epochs and/or Epoch participation.',
			defaultPermission: true,
			options: [
				{
					name: 'Contribute',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'What did you do this Epoch? Enter your contribution statement:',
				},
				{
					name: 'Create',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Create a new Circle for your Org',
				},
				{
					name: 'Discord',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Join the Coordinape Discord',
				},
				{
					name: 'Feedback',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'How can Coordinpae improve? This drops a link to a feedback form.',
				},
				{
					name: 'Help',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'This populates a list of available Coordinape commands and what they do.',
				},
				{
					name: 'Link',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Link your Discord account to your Coordinape account',
				},
				{
					name: 'Nominate',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Nominate a fellow contributor to be added to your Circle.',
				},
				{
					name: 'Note',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Leave a note for your fellow contributors!',
				},
				{
					name: 'Notes',
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
					name: 'Summary',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Most recent Epoch summary',
				},
				{
					name: 'Vouch',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'Vouch for a nominee.',
				},
				{
					name: 'Website',
					type: CommandOptionType.SUB_COMMAND_GROUP,
					description: 'This drops a link to the Coordinape website.',
				},

			],
		});
	}
}