import { getOAuth2Url } from '@api/constants';
import { createUsersMutation } from '@api/createUsersMutation';
import { getDiscordRolesCircles } from '@api/getDiscordRolesCircles';
import { ButtonStyle, ComponentActionRow, ComponentButton, ComponentContext, ComponentSelectMenu, ComponentType, Message } from 'slash-create';
import Log from '../../../../utils/Log';
import { disableFirstRowComponentButtons } from '../common';
import { findProfileId } from '@api/findProfileId';
import { findProfile } from '@api/findProfile';
import { findApiKey } from '@api/findApiKey';

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

export async function assignRoleHandler(componentContext: ComponentContext) {
	try {
		componentContext.defer();

		const [userId] = componentContext.data.data.values || [];

		if (!userId) {
			throw new Error('Something went wrong, user id was not found');
		}

		const confirmationMessage = await componentContext.send({
			content: `You've selected <@${userId}>, are you sure that you want to add them to the circle?`,
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
			const profileId = await findProfileId({ userId });

			if (!profileId) {
				await ctx.send({ content: `<@${userId}> hasn't linked their Discord Account to Coordinape yet, please ask them to go [here](${getOAuth2Url()}) and link their accounts. Then you can try again\n\nYou can also add them directly in coordinape [here](https://app.coordinape.com/profile/me)` });
				return;
			}

			const profile = await findProfile({ profileId });

			if (!profile) {
				throw new Error(`User with profile ID ${profileId} not found!`);
			}

			const { discord_role_id, circle_id } = await getDiscordRolesCircles({ channelId: ctx.channelID });

			const guild = await ctx.creator.client.guilds.fetch(ctx.guildID);

			const guildMember = await guild.members.fetch(userId);
			const role = await guild.roles.fetch(discord_role_id);

			if (!role) {
				throw new Error(`Role ID ${discord_role_id} not found!`);
			}

			const member = await guildMember.roles.add(role, 'add to circle');
			await ctx.send({ content: `Role ${role} assigned to ${member}` });
			
			const apiKey = await findApiKey({ channelId: ctx.channelID });
			if (!apiKey) {
				throw new Error('Api key not found!');
			}

			const user = await createUsersMutation({ circleId: Number(circle_id), users: [profile], apiKey });
			if (user) {
				await ctx.send({ content: `User ${user.UserResponse?.profile.name} added to this circle` });
			}

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
