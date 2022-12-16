import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Role, TextChannel } from 'discord.js';
import { ComponentActionRow, ComponentContext, ComponentSelectMenu, ComponentSelectOption } from 'slash-create';
import { DiscordService } from 'src/app/service/DiscordService';
import { sleep } from 'src/app/utils/sleep';
import { handleSendAlerts } from './3_handleSendAlerts';

export const LINK_CIRCLE_INTERACTIONS = {
	Link: 'LINK_CIRCLE_BUTTON',
	Skip: 'SKIP_LINK_CIRCLE_BUTTON',
};

/**
 * Create a new Channel and Role for each Circle in the Coordinape Category
 * @param componentContext the component context
 */
export async function handleCreateNewChannels(componentContext: ComponentContext) {
	const discordService = new DiscordService(componentContext);

	const actionRowComponents = componentContext.message.components as ComponentActionRow[];
	const select = actionRowComponents[0].components[0] as ComponentSelectMenu;
	const circles = select.options?.filter(option => option.default) || [];

	const newEntitites: { channel: TextChannel; role: Role, circle: ComponentSelectOption }[] = [];
	for (const circle of circles) {
		const channel = await discordService.createChannel({ name: circle.label });
		const role = await discordService.createRole({ name: `${circle.label} Member` });

		if (!channel && !role) {
			componentContext.send('Failed to create both the channel and role. Please contact coordinape');
			continue;
		}

		if (!channel) {
			componentContext.send('Failed to create a channel. Please contact coordinape');
			role?.delete('Failed to create a channel for this role');
			continue;
		}
		if (!role) {
			componentContext.send('Failed to create a role. Please contact coordinape');
			channel.delete('Failed to create a role for this channel');
			continue;
		}

		newEntitites.push({ channel, role, circle });
	}

	const LINK_CIRCLE_BUTTON = new ButtonBuilder()
		.setCustomId(LINK_CIRCLE_INTERACTIONS.Link)
		.setLabel('Link Circle')
		.setStyle(ButtonStyle.Primary);

	// Only load if they have at least 1 circle already linked
	const SKIP_LINK_CIRCLE_BUTTON = new ButtonBuilder()
		.setCustomId(LINK_CIRCLE_INTERACTIONS.Skip)
		.setLabel('Skip Link Circle')
		.setStyle(ButtonStyle.Secondary);

	const linkCircleRow = new ActionRowBuilder<ButtonBuilder>()
		.addComponents(LINK_CIRCLE_BUTTON)
		.addComponents(SKIP_LINK_CIRCLE_BUTTON);
	
	for (const { channel, role, circle } of newEntitites) {
		channel.send({
			content: `<@${componentContext.user.id}> to manage \`${circle.label}\` in Discord I'll need to get the API Key for the circle. This will enable me to watch this circle so I can send alerts, to manage circle membership (with the role ${role}), and to let circle members interact with Coordinape from within Discord. With your permission I'll go get that now.`,
			components: [linkCircleRow],
		});
	}
	
	if (newEntitites.length === 1) {
		await componentContext.send(`Channel ${newEntitites[0].channel} and role ${newEntitites[0].role} created for circle \`${newEntitites[0].circle.label}\`, please go there to manage circle permissions`);
	}
	
	if (newEntitites.length > 1) {
		await componentContext.send(`I have created the following channels and roles, please go to each channel to manage circle permissions:\n${newEntitites.map(({ channel, role, circle }) => `> Channel ${channel} and role ${role} for circle \`${circle.label}\``).join('\n')}`);
	}

	await sleep(3000);

	return handleSendAlerts(componentContext);
}
