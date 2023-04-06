import { deleteUsersMutation } from '@api/deleteUsersMutation';
import { findApiKey } from '@api/findApiKey';
import { findProfile } from '@api/findProfile';
import { findProfileId } from '@api/findProfileId';
import { getDiscordRolesCircles } from '@api/getDiscordRolesCircles';
import { ComponentContext } from 'slash-create';
import { extractUserId } from 'src/app/utils/extractUserId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';

export async function handleRemoveUserCircle(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);

		const userId = extractUserId(ctx.message.content);
	
		const profileId = await findProfileId({ userId });

		if (!profileId) {
			await ctx.send({
				content: `<@${userId}> hasn't linked their Discord Account to Coordinape yet, please tell them to run \`/coordinape config\` and click "Link" to link their account. Then you can try again\n\nYou can also add them directly in coordinape [here](https://app.coordinape.com/profile/me)`,
				ephemeral: true,
			});
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

		const member = await guildMember.roles.remove(role, 'remove from circle');
		await ctx.send({
			content: `Role ${role} unassigned from ${member}`,
			ephemeral: true,
		});

		
		const apiKey = await findApiKey({ channelId: ctx.channelID });
		if (!apiKey) {
			throw new Error('Api key not found!');
		}

		const user = await deleteUsersMutation({
			circleId: Number(circle_id),
			addresses: [profile.address],
			apiKey,
		});
		if (user) {
			await ctx.send({
				content: `User ${profile.name} removed from this circle`,
				ephemeral: true,
			});
		}
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleRemoveUserCircle', error }));
		Log.error(error);
	}
}
