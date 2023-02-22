import { getOAuth2Url } from '@api/constants';
import { wsChain } from '@api/gqlClients';
import { ComponentContext } from 'slash-create';
import Log from 'src/app/utils/Log';
import { disableAllComponents } from '../common';

export async function handleLinkButton(ctx: ComponentContext): Promise<void> {
	await ctx.editParent({ components: disableAllComponents(ctx) });

	try {
		const onDiscordUsers = wsChain('subscription')({
			discord_users: [
				{ where: { user_snowflake: { _eq: ctx.user.id } } },
				{ user_snowflake: true },
			],
		});
		onDiscordUsers.on(async ({ discord_users }) => {
			if (discord_users.find(({ user_snowflake }) => user_snowflake === ctx.user.id)) {
				await ctx.send({ content: `<@${ctx.user.id}>, you've been linked successfully!` });
				onDiscordUsers.ws.close();
			}
		});

		await ctx.send(`If you would like to interact with Coordinape within discord you will need to link your Coordinape account to your Discord. [Click here](${getOAuth2Url()}) to link your accounts. You will be asked to sign a message approving the bot to perform some Coordinape actions on your behalf.\n\nThis will not impact your ability to use the Coordinape app!`);
	} catch (error) {
		await ctx.send({ content: `Failed to link. ${error}` });
		Log.error(error);
	}
}
