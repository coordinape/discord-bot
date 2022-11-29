import { ComponentType, ButtonStyle, ComponentContext, ComponentButton } from 'slash-create';
import { CallbackComponent } from '../types';
import Log from '../../utils/Log';
import { Message, MessageCollector } from 'discord.js';
import { DiscordService } from '../DiscordService';

type Props = {
	client: DiscordService;
}

type ChangeRoleFlowProps = {
	ctx: ComponentContext;
	type: 'add' | 'remove';
}

export async function getChangeRoleComponents({ client }: Props): Promise<CallbackComponent[]> {
	const ASSIGN_BUTTON: ComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.PRIMARY,
		label: 'ASSIGN',
		custom_id: 'ASSIGN_BUTTON',
	};

	const UNASSIGN_BUTTON: ComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.DESTRUCTIVE,
		label: 'UNASSIGN',
		custom_id: 'UNASSIGN_BUTTON',
	};
	
	const components = [ASSIGN_BUTTON, UNASSIGN_BUTTON];

	async function changeRoleFlow({ ctx, type }: ChangeRoleFlowProps): Promise<void> {
		try {
			await ctx.send({ content: `Mention the guild member to ${type}` });

			const channel = await client.findTextChannelById(ctx.channelID);

			const collector = new MessageCollector(channel, {
				filter: (({ author }: Message) => author.id === ctx.user.id),
			});
	
			collector.on('collect', async (message) => {
				const user = message.mentions.users.first();
				if (user) {
					collector.stop();

					// TODO Get the role created by the bot
					const roleFoo = { id: '1046402573273411716' };

					const guild = await client.findGuild();

					const guildMember = await guild.members.fetch(user.id);
					const role = await guild.roles.fetch(roleFoo.id);
	
					if (!role) {
						throw new Error(`Role ID ${roleFoo.id} not found!`);
					}
	
					if (type === 'add') {
						const member = await guildMember.roles.add(role, 'add to circle');
						await ctx.send({ content: `Role ${role} assigned to ${member}` });
					}

					if (type === 'remove') {
						const member = await guildMember.roles.remove(role, 'remove from circle');
						await ctx.send({ content: `Role ${role} unassigned from ${member}` });
					}
				} else {
					await ctx.send({ content: 'Please mention a member of this guild (e.g. @johnodoe)' });
				}
			});
		} catch (error) {
			await ctx.send({ content: 'An error has occured, please contact coordinape\'s support' });
			Log.error(error);
		}
	}

	const CALLBACKS = {
		[ASSIGN_BUTTON.custom_id]: async (ctx: ComponentContext) => changeRoleFlow({ ctx, type: 'add' }),
		[UNASSIGN_BUTTON.custom_id]: async (ctx: ComponentContext) => changeRoleFlow({ ctx, type: 'remove' }),
	};

	return components.map(component => ({ component, callback: CALLBACKS[component.custom_id] }));
}

