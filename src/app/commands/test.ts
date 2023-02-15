/* eslint-disable no-console */
import {
	ButtonStyle,
	CommandContext,
	CommandOptionType, ComponentButton, ComponentContext, ComponentSelectMenu, ComponentTextInput, ComponentType,
	SlashCommand,
	SlashCreator,
	TextInputStyle,
} from 'slash-create';
import { LogUtils } from '../utils/Log';

export default class Help extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'test',
			description: 'testing',
			options: [
				{
					name: 'user-select',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing user-select',
				},
				{
					name: 'channel-select',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing channel-select',
				},
				{
					name: 'mentionable-select',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing mentionable-select',
				},
				{
					name: 'role-select',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing role-select',
				},
				{
					name: 'string-select',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing string-select',
				},
				{
					name: 'modal',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing modal',
				},
				{
					name: 'text',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing text formatting',
				},
				{
					name: 'time',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing time formatting',
				},
			],
		});
	}
	
	async run(ctx: CommandContext): Promise<any> {
		LogUtils.logCommandStart(ctx);
		if (ctx.user.bot) return;

		const USER_SELECT: ComponentSelectMenu = {
			type: ComponentType.USER_SELECT,
			options: ctx.members.map(member => ({ value: member.id, label: member.displayName })),
			placeholder: 'Testing the "User Select" component',
			custom_id: 'USER_SELECT_BUTTON',
		};
		const CHANNEL_SELECT: ComponentSelectMenu = {
			type: ComponentType.CHANNEL_SELECT,
			options: ctx.channels.map(channel => ({ value: channel.id, label: channel.name })),
			placeholder: 'Testing the "Channel Select" component',
			custom_id: 'CHANNEL_SELECT_BUTTON',
		};
		const MENTIONABLE_SELECT: ComponentSelectMenu = {
			type: ComponentType.MENTIONABLE_SELECT,
			options: ctx.members.map(member => ({ value: member.id, label: member.displayName })),
			placeholder: 'select in which both users and roles can be selected',
			custom_id: 'MENTIONABLE_SELECT',
		};
		const ROLE_SELECT: ComponentSelectMenu = {
			type: ComponentType.ROLE_SELECT,
			options: ctx.members.map(member => ({ value: member.id, label: member.displayName })),
			placeholder: 'select role component',
			custom_id: 'ROLE_SELECT',
		};
		const STRING_SELECT: ComponentSelectMenu = {
			type: ComponentType.STRING_SELECT,
			options: [
				'Epoch Summary',
				'Epoch Created',
				'Epoch Start',
				'Daily Change',
				'Nominations',
				'Vouching',
				'New Circle Member',
				'Member Leaves Circle',
				'When a user opts out of a circle',
			].map(str => ({ value: str, label: str })),
			placeholder: 'string select component',
			custom_id: 'STRING_SELECT',
			min_values: 0,
			max_values: 8,
		};
		const TEXT_INPUT: ComponentTextInput = {
			type: ComponentType.TEXT_INPUT,
			label: 'Text Input label',
			required: true,
			placeholder: 'select in which both users and roles can be selected',
			custom_id: 'TEXT_INPUT',
			style: TextInputStyle.SHORT,
		};
		const MODAL_BUTTON: ComponentButton = {
			type: ComponentType.BUTTON,
			label: 'Open Modal',
			custom_id: 'MODAL_BUTTON',
			style: ButtonStyle.DESTRUCTIVE,
		};
		const NEXT_BUTTON: ComponentButton = {
			type: ComponentType.BUTTON,
			label: 'Next',
			custom_id: 'NEXT_BUTTON',
			style: ButtonStyle.SUCCESS,
		};
		const SKIP_BUTTON: ComponentButton = {
			type: ComponentType.BUTTON,
			label: 'Skip',
			custom_id: 'SKIP_BUTTON',
			style: ButtonStyle.DESTRUCTIVE,
		};

		try {
			await ctx.defer();

			switch (ctx.subcommands[0]) {
			case 'user-select':
				await ctx.send({
					content: 'A user select component:',
					components: [{ type: ComponentType.ACTION_ROW, components: [USER_SELECT] }],
				});
				break;
			case 'channel-select':
				await ctx.send({
					content: 'A channel select component:',
					components: [
						{ type: ComponentType.ACTION_ROW, components: [CHANNEL_SELECT] },
						{ type: ComponentType.ACTION_ROW, components: [NEXT_BUTTON, SKIP_BUTTON] }],
				});
				break;
			case 'mentionable-select':
				await ctx.send({
					content: 'A user/role select component:',
					components: [{ type: ComponentType.ACTION_ROW, components: [MENTIONABLE_SELECT],
					}] });
				break;
			case 'role-select':
				await ctx.send({
					content: 'A role select component:',
					components: [{ type: ComponentType.ACTION_ROW, components: [ROLE_SELECT],
					}] });
				break;
			case 'string-select':
				await ctx.send({
					content: 'A string select component\n\n[Click here for docs](http://docs.com)',
					components: [
						{ type: ComponentType.ACTION_ROW, components: [STRING_SELECT] },
						{ type: ComponentType.ACTION_ROW, components: [NEXT_BUTTON, SKIP_BUTTON] }],
				});
				break;
			case 'modal':
				await ctx.send({
					content: 'click the button to open modal',
					components: [{ type: ComponentType.ACTION_ROW, components: [MODAL_BUTTON] }],
				});
				ctx.registerComponent('MODAL_BUTTON', (modalButtonContext: ComponentContext) => {
					modalButtonContext.sendModal({
						title: 'Testing Modal',
						components: [
							{ type: ComponentType.ACTION_ROW, components: [TEXT_INPUT] },
						],
						custom_id: 'MODAL_BUTTON',
					});
				});
				break;
			case 'text':
				await ctx.send('**bold**\n*italics*\n__underline__\n~~Strikethrough~~\n`one line code block`\n```\nmultiple\nline\ncodeblock```\n> Single line quote\n\n>>> multiline\nquote\nquote');
				break;
			case 'time': {
				const epoch = new Date('2023-02-14T22:00:00+00:00').getTime() / 1000;
				await ctx.send(`<t:${epoch}:f>`);
				break;
			}
			}
		} catch (error) {
			console.log(error);
		}
	}
}
