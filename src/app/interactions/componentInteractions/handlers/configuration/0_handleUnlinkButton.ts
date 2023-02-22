import { chain } from '@api/gqlClients';
import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllComponents } from '../common';

export async function handleUnlinkButton(ctx: ComponentContext): Promise<void> {
	await ctx.editParent({ components: disableAllComponents(ctx) });

	try {
		const { delete_discord_users } = await chain('mutation')({
			delete_discord_users: [
				{ where: { user_snowflake: { _eq: ctx.user.id } } },
				{ affected_rows: true },
			],
		});
				
		if (delete_discord_users && delete_discord_users.affected_rows === 1) {
			await ctx.send({ content: 'I\'ve removed the link between Coordinape and Discord. I\'ll no longer be able to specifically notify you for any Coordinape events. You can still use the /coordinape Command in Discord severs where I\'m enabled!' });
			return;
		}
		await ctx.send({ content: 'Failed to unlink. Please run the command again' });
	} catch (error) {
		await ctx.send({ content: 'An error has occured, please contact coordinape\'s support' });
		Log.error(error);
	}
}
