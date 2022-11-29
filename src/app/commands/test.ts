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
					name: 'modal',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing modal',
				},
			],
		});
	}
	
	async run(ctx: CommandContext): Promise<any> {
		LogUtils.logCommandStart(ctx);
		if (ctx.user.bot) return;

		const members = ctx.members;
		const USER_SELECT: ComponentSelectMenu = {
			type: ComponentType.USER_SELECT,
			options: members.map(member => ({ value: member.id, label: member.displayName })),
			placeholder: 'Testing the "User Select" component',
			custom_id: 'USER_SELECT_BUTTON',
		};
		const channels = ctx.channels;
		const CHANNEL_SELECT: ComponentSelectMenu = {
			type: ComponentType.CHANNEL_SELECT,
			options: channels.map(channel => ({ value: channel.id, label: channel.name })),
			placeholder: 'Testing the "Channel Select" component',
			custom_id: 'CHANNEL_SELECT_BUTTON',
		};
		const MENTIONABLE_SELECT: ComponentSelectMenu = {
			type: ComponentType.MENTIONABLE_SELECT,
			options: members.map(member => ({ value: member.id, label: member.displayName })),
			placeholder: 'select in which both users and roles can be selected',
			custom_id: 'MENTIONABLE_SELECT',
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

		try {
			ctx.defer();
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
					components: [{ type: ComponentType.ACTION_ROW, components: [CHANNEL_SELECT] }],
				});
				break;
			case 'mentionable-select':
				await ctx.send({
					content: 'A user/role select component:',
					components: [{ type: ComponentType.ACTION_ROW, components: [MENTIONABLE_SELECT],
					}] });
				break;
			case 'modal':
				await ctx.send({
					content: 'click the button to open modal',
					components: [{ type: ComponentType.ACTION_ROW, components: [MODAL_BUTTON] }],
				});
				ctx.registerComponent('MODAL_BUTTON', (modalButtonContext: ComponentContext) => {
					modalButtonContext.sendModal({
						title: 'Testing Modal',
						components: [{ type: ComponentType.ACTION_ROW, components: [TEXT_INPUT] }],
						custom_id: 'MODAL_BUTTON',
					});
				});
				break;
			}
		} catch (error) {
			console.log(error);
		}
	}
}
