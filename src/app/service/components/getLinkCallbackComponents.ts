import { AnyComponentButton, ComponentType, ButtonStyle, ComponentContext, CommandContext } from 'slash-create';
import { wsChain, chain } from '../../api/gqlClients';
import { CallbackComponent } from '../types';
import Log from '../../utils/Log';

const OAUTH2_URL = 'https://discord.com/api/oauth2/authorize?client_id=1031475126652383282&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord%2Flink&response_type=code&scope=identify';

export async function getLinkCallbackComponents(commandContext: CommandContext): Promise<CallbackComponent[]> {
	const { discord_users: discordUsers } = await chain('query')({
		discord_users: [
			{ where: { user_snowflake: { _eq: commandContext.user.id } } },
			{ user_snowflake: true },
		],
	});

	if (discordUsers.length > 1) {
		throw new Error('Something is wrong, please contact coordinape');
	}

	const isLinked = discordUsers.length === 1;

	/**
 	 * Link buttons must have a `url`, and cannot have a `custom_id`
	 * Link buttons do not send an interaction to your app when clicked
	 * 
	 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
	 */
	const LINK_BUTTON: AnyComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.PRIMARY,
		label: 'LINK',
		custom_id: 'LINK_BUTTON',
		disabled: isLinked,
	};

	const UNLINK_BUTTON: AnyComponentButton = {
		type: ComponentType.BUTTON,
		style: ButtonStyle.DESTRUCTIVE,
		label: 'UNLINK',
		custom_id: 'UNLINK_BUTTON',
		disabled: !isLinked,
	};

	const components = [...(isLinked ? [UNLINK_BUTTON] : [LINK_BUTTON])];

	const CALLBACKS = {
		[LINK_BUTTON.custom_id]: async (componentContext: ComponentContext) => {
			try {
				const onDiscordUsers = wsChain('subscription')({
					discord_users: [
						{ where: { user_snowflake: { _eq: componentContext.user.id } } },
						{ user_snowflake: true },
					],
				});
				onDiscordUsers.on(async ({ discord_users }) => {
					if (discord_users.find(({ user_snowflake }) => user_snowflake === componentContext.user.id)) {
						await componentContext.send({ content: `<@${componentContext.user.id}>, you've been linked successfully!` });
						onDiscordUsers.ws.close();
					}
				});

				await componentContext.send(`If you would like to interact with Coordinape within discord you will need to link your Coordinape account to your Discord. [Click here](${OAUTH2_URL}) to link your accounts. You will be asked to sign a message approving the bot to perform some Coordinape actions on your behalf.\n\nThis will not impact your ability to use the Coordinape app!`);
			} catch (error) {
				await componentContext.send({ content: 'Failed to link. Please run the command again' });
				Log.error(error);
			}
		},
		[UNLINK_BUTTON.custom_id]: async (componentContext: ComponentContext) => {
			try {
				const { delete_discord_users } = await chain('mutation')({
					delete_discord_users: [
						{ where: { user_snowflake: { _eq: componentContext.user.id } } },
						{ affected_rows: true },
					],
				});
				
				if (delete_discord_users && delete_discord_users.affected_rows === 1) {
					await componentContext.send({ content: 'I\'ve removed the link between Coordinape and Discord. I\'ll no longer be able to specifically notify you for any Coordinape events. You can still use the /coordinape Command in Discord severs where I\'m enabled!' });
					return;
				}
				await componentContext.send({ content: 'Failed to unlink. Please run the command again' });
			} catch (error) {
				await componentContext.send({ content: 'An error has occured, please contact coordinape\'s support' });
				Log.error(error);
			}
		},
	};

	return components.map(component => ({ component, callback: CALLBACKS[component.custom_id] }));
}
