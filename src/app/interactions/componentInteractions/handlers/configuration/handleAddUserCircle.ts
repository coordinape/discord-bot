import { createUsersMutation } from '@api/createUsersMutation';
import { findApiKey } from '@api/findApiKey';
import { findProfile } from '@api/findProfile';
import { findProfileId } from '@api/findProfileId';
import { getDiscordRolesCircles } from '@api/getDiscordRolesCircles';
import { ComponentContext } from 'slash-create';
import { extractUserId } from 'src/app/utils/extractUserId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';

export async function handleAddUserCircle(ctx: ComponentContext): Promise<void> {
	try {
		await disableAllParentComponents(ctx);

		const userId = extractUserId(ctx.message.content);
	
		const profileId = await findProfileId({ userId });

		if (!profileId) {
			await ctx.send({ content: `<@${userId}> hasn't linked their Discord Account to Coordinape yet, please tell them to run \`/coordinape\` and click "Link" to link their account. Then you can try again\n\nYou can also add them directly in coordinape [here](https://app.coordinape.com/profile/me)` });
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
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleAddUserCircle] ${error}`);
		Log.error(error);
	}
}
