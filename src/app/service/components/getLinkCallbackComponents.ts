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
				await componentContext.send({
					embeds: [{
						title: 'Click here to link coordinape',
						url: OAUTH2_URL,
					}],
				});
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
				
				if (delete_discord_users) {
					const isDiscordUserDeleted = delete_discord_users.affected_rows === 1;
					await componentContext.send({ content: isDiscordUserDeleted ? `<@${componentContext.user.id}>, you've been unlinked successfully!` : 'Failed to unlink' });
				}
			} catch (error) {
				await componentContext.send({ content: 'Failed to unlink. Please run the command again' });
				Log.error(error);
			}
		},
	};

	return components.map(component => ({ component, callback: CALLBACKS[component.custom_id] }));
}
