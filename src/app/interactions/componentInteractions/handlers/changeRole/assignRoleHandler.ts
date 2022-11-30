import { ButtonStyle, ComponentActionRow, ComponentButton, ComponentContext, ComponentSelectMenu, ComponentType, Message } from 'slash-create';
import { getLinkingStatus, OAUTH2_URL } from '../../../../service/components/common';
import Log from '../../../../utils/Log';
import { disableFirstRowComponentButtons } from './common';

export const ASSIGN_ROLE_USER_SELECT_CONFIRM_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Confirm',
	custom_id: 'ASSIGN_ROLE_USER_SELECT_CONFIRM_BUTTON',
	style: ButtonStyle.SUCCESS,
};

export const ASSIGN_ROLE_USER_SELECT_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Cancel',
	custom_id: 'ASSIGN_ROLE_USER_SELECT_CANCEL_BUTTON',
	style: ButtonStyle.DESTRUCTIVE,
};

export async function assignRoleHandler({ componentContext }: { componentContext: ComponentContext }) {
	try {
		componentContext.defer();

		const [userId] = componentContext.data.data.values || [];

		if (!userId) {
			throw new Error('Something went wrong, user id was not found');
		}
        
		const confirmationMessage = await componentContext.send({
			content: `You've selected <@${userId}>, are you sure that you want to remove them from the circle?`,
			components: [{
				type: ComponentType.ACTION_ROW,
				components: [ASSIGN_ROLE_USER_SELECT_CONFIRM_BUTTON, ASSIGN_ROLE_USER_SELECT_CANCEL_BUTTON],
			}],
		}) as Message;

		const originalActionRow = componentContext.message.components[0] as ComponentActionRow;
		const originalSelect = originalActionRow.components[0] as ComponentSelectMenu;

		// Disable the original select
		await componentContext.editParent({ components: [
			{ type: ComponentType.ACTION_ROW, components: [{ ...originalSelect, disabled: true }] },
		] });

		componentContext.registerComponent(ASSIGN_ROLE_USER_SELECT_CONFIRM_BUTTON.custom_id, async (ctx) => {
			const isLinked = await getLinkingStatus(userId);

			if (!isLinked) {
				await ctx.send({ content: `<@${userId}> hasn't linked their Discord Account to Coordinape yet, please ask them to go [here](${OAUTH2_URL}) and link their accounts. Then you can try again\n\nYou can also add them directly in coordinape [here](https://app.coordinape.com/profile/me)` });
				return;
			}

			// TODO Get the role created by the bot
			const roleFoo = { id: '1046402573273411716' };

			const guild = await ctx.creator.client.guilds.fetch(ctx.guildID);

			const guildMember = await guild.members.fetch(userId);
			const role = await guild.roles.fetch(roleFoo.id);

			if (!role) {
				throw new Error(`Role ID ${roleFoo.id} not found!`);
			}

			const member = await guildMember.roles.add(role, 'add to circle');
			await ctx.send({ content: `Role ${role} assigned to ${member}` });

			disableFirstRowComponentButtons({ message: confirmationMessage });
		});

		componentContext.registerComponent(ASSIGN_ROLE_USER_SELECT_CANCEL_BUTTON.custom_id, async () => {
			await componentContext.send('No worries, if you want to add another user just run `/coordinape` again');

			disableFirstRowComponentButtons({ message: confirmationMessage });
		});
	} catch (error) {
		Log.error(error);
	}
}
