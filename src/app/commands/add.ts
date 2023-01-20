import {
	CommandContext,
	ComponentSelectMenu,
	ComponentType,
	SlashCommand,
	SlashCreator,
} from 'slash-create';
import { LogUtils } from '../utils/Log';

export default class Help extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'add',
			description: 'Testing the add to circle',
			defaultPermission: true,
		});
	}
	
	async run(ctx: CommandContext): Promise<any> {
		LogUtils.logCommandStart(ctx);
		if (ctx.user.bot) return;

		const USER_SELECT: ComponentSelectMenu = {
			type: ComponentType.USER_SELECT,
			options: ctx.members.map(member => ({ value: member.id, label: member.displayName })),
			placeholder: 'Select the user',
			custom_id: 'ADD_USER_CIRCLE_USER_SELECT',
		};
		
		await ctx.send({
			content: 'Which user do you want to add to circle X:',
			components: [{ type: ComponentType.ACTION_ROW, components: [USER_SELECT] }],
		});
	}
}
