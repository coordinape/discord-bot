import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CategoryChannel, Role, TextChannel } from 'discord.js';
import { ComponentActionRow, ComponentContext, ComponentSelectMenu, ComponentSelectOption } from 'slash-create';
import { DiscordService } from 'src/app/service/DiscordService';
import { sleep } from 'src/app/utils/sleep';
import { disableAllComponents } from '../common';
import { handleSendAlerts } from './3_handleSendAlerts';

export const CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS = {
	Link: 'LINK_CIRCLE_BUTTON',
	Skip: 'SKIP_LINK_CIRCLE_BUTTON',
};

/**
 * Create a new Channel and Role for each Circle in the Coordinape Category
 * @param ctx the component context
 */
export async function handleCreateNewEntities(ctx: ComponentContext) {
	await ctx.editParent({ components: disableAllComponents(ctx) });

	const discordService = new DiscordService(ctx);

	const actionRowComponents = ctx.message.components as ComponentActionRow[];
	const select = actionRowComponents[0].components[0] as ComponentSelectMenu;
	const circles = select.options?.filter(option => option.default) || [];
	const coordinapeCategory = await getCoordinapeCategory(discordService);

	const newEntitites: { channel: TextChannel; role: Role, circle: ComponentSelectOption }[] = [];
	for (const circle of circles) {
		const channel = await discordService.createChannel({ name: circle.label, parent: coordinapeCategory });
		const role = await discordService.createRole({ name: `${circle.label} Member` });

		if (!channel && !role) {
			await ctx.send('Failed to create both the channel and role. Please contact coordinape');
			continue;
		}

		if (!channel) {
			await ctx.send('Failed to create a channel. Please contact coordinape');
			await role?.delete('Failed to create a channel for this role');
			continue;
		}
		if (!role) {
			await ctx.send('Failed to create a role. Please contact coordinape');
			await channel.delete('Failed to create a role for this channel');
			continue;
		}

		newEntitites.push({ channel, role, circle });
	}

	const LINK_CIRCLE_BUTTON = new ButtonBuilder()
		.setCustomId(CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS.Link)
		.setLabel('Link Circle')
		.setStyle(ButtonStyle.Primary);

	// Only load if they have at least 1 circle already linked
	const SKIP_LINK_CIRCLE_BUTTON = new ButtonBuilder()
		.setCustomId(CREATE_NEW_ENTITIES_HANDLER_INTERACTIONS.Skip)
		.setLabel('Skip Link Circle (TODO)')
		.setStyle(ButtonStyle.Secondary);

	const linkCircleRow = new ActionRowBuilder<ButtonBuilder>()
		.addComponents(LINK_CIRCLE_BUTTON)
		.addComponents(SKIP_LINK_CIRCLE_BUTTON);
	
	for (const { channel, role, circle } of newEntitites) {
		await channel.send({
			content: `<@${ctx.user.id}> to manage \`${circle.label}\` (Circle ID: ${circle.value}) in Discord I'll need to get the API Key for the circle. This will enable me to watch this circle so I can send alerts, to manage circle membership (with the role ${role}), and to let circle members interact with Coordinape from within Discord. With your permission I'll go get that now.`,
			components: [linkCircleRow],
		});
	}
	
	if (newEntitites.length === 1) {
		await ctx.send(`Channel ${newEntitites[0].channel} and role ${newEntitites[0].role} created for circle \`${newEntitites[0].circle.label}\` under the ${coordinapeCategory} category, please go there to manage circle permissions`);
	}
	
	if (newEntitites.length > 1) {
		await ctx.send(`I have created the following channels (under the ${coordinapeCategory} category) and roles, please go to each channel to manage circle permissions:\n${newEntitites.map(({ channel, role, circle }) => `> Channel ${channel} and role ${role} for circle \`${circle.label}\``).join('\n')}`);
	}

	// Just to improve message flow
	await sleep(3000);

	// Next question
	return handleSendAlerts(ctx);
}

async function getCoordinapeCategory(discordService: DiscordService): Promise<CategoryChannel> {
	let category = await discordService.findCategoryByName('Coordinape');

	if (!category) {
		category = await discordService.createCategory({ name: 'Coordinape', position: 0 });
	}
	
	if (!category) {
		throw new Error('Failed to create the Coordinape category');
	}
	
	return category;
}
