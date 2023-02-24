import { findProfileId } from '@api/findProfileId';
import { getDiscordRolesCircles } from '@api/getDiscordRolesCircles';
import { ComponentContext } from 'slash-create';
import { extractUserId } from 'src/app/utils/extractUserId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

export async function handleRemoveUserCircle(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);

		const userId = extractUserId(ctx.message.content);
	
		const profileId = await findProfileId({ userId });

		if (!profileId) {
			await ctx.send({ content: `<@${userId}> hasn't linked their Discord Account to Coordinape yet, please tell them to run \`/coordinape\` and click "Link" to link their account. Then you can try again\n\nYou can also add them directly in coordinape [here](https://app.coordinape.com/profile/me)` });
			return;
		}

		const { discord_role_id } = await getDiscordRolesCircles({ channelId: ctx.channelID });

		const guild = await ctx.creator.client.guilds.fetch(ctx.guildID);

		const guildMember = await guild.members.fetch(userId);
		const role = await guild.roles.fetch(discord_role_id);

		if (!role) {
			throw new Error(`Role ID ${discord_role_id} not found!`);
		}

		const member = await guildMember.roles.remove(role, 'remove from circle');
		await ctx.send({ content: `Role ${role} unassigned from ${member}` });

		// TODO Remove user from circle in coordinape

	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleRemoveUserCircle] ${error}`);
		Log.error(error);
	}
}