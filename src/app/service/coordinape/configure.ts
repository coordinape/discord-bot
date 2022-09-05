import {
	CommandContext,
	ComponentType,
	ModalInteractionContext,
	ButtonStyle,
} from 'slash-create';

import Log from '../../utils/Log';

// Examples for component registration here https://github.com/Snazzah/slash-create/blob/master/docs/examples/components.md

const validateDiscordChannel = async (mctx: ModalInteractionContext, channelId: string) => {
	const channel = await mctx.creator.client.guilds.resolve(mctx.guildID).channels.resolve(channelId);

	if (!channel) {
		// TODO reusable method in ServiceSupport for this response?
		mctx.send({
			content: `**Error**: Channel with ID ${channelId} does not exist in this Discord server.`,
			ephemeral: true,
		});
		Log.log(`Discord user ${mctx.user.id} tried to set alerts to channel ${channelId} which does not exist in server ${mctx.guildID}`);
		return false;
	}
	return true;
};

/*

const handleSubmit = async (mctx: ModalInteractionContext) => {
	// Input sanity check and space stripping
	const { channelId } = await modalInputSanityCheck(mctx);

	if (channelId) {
		// Check whether provided Discord channel exists in this server
		const isChannelValid = await validateDiscordChannel(mctx, channelId);
		if (!isChannelValid) return;
		// Currently select options must be fetched like this because it's still not clear how
		// Discord will handle selects in modals. 
		// See https://github.com/Snazzah/slash-create/issues/339 
		// and https://github.com/Snazzah/slash-create/issues/338
		const alertTypesSelect : {
			custom_id: string,
			component_type: ComponentType,
			values?: string[]
		} = mctx.data.data.components[1].components[0] as never;
		// TODO remove, just debugging the return of the select values
		mctx.send({ content: JSON.stringify(alertTypesSelect.values) });
		// TODO depending on how the webhook is configured, we might need either to pass the channel
		// ID to it as well as alert types, so that we also receive it back in the message it sends, 
		// or we need to store the channel ID + alert types in hasura so that every time we receive
		// an event from the webhook, we'll know whether to pass it or not, depending on what was set on alert types. 
		// The circle ID's to alert for are the ones already stored in `roles_circles`. 
	}
};

*/

export async function configurationCommand(ctx: CommandContext): Promise<any> {
	try {
		if (ctx.subcommands[1] == 'alerts') {
			await ctx.defer();
			await ctx.send({
				content: 'Which alerts should be sent?',
				ephemeral: true,
				// embeds: // if necessary we can put some additional info here
				components: [
					{
						type: ComponentType.ACTION_ROW,
						components: [
							// These events will be sent by the webhook, and their frequency
							// is determined by how often the webhook sends events for each event type.
							{
								type: ComponentType.SELECT,
								custom_id: 'alert_types',
								min_values: 1,
								max_values: 4,
								placeholder: 'Alert types',
								options: [
									{
										label: 'Epoch start/end',
										value: 'epoch_start_end',
									},
									{
										label: 'Periodically during the Epoch',
										value: 'epoch_periodically',
									},
									{
										label: 'Epoch ending warnings',
										value: 'epoch_end_warning',
									},
									{
										label: 'Nominations/Vouches',
										value: 'nominations_vouches',
									},
								],
							},
						],
					},
					{
						type: ComponentType.ACTION_ROW,
						components: [
							{
								type: ComponentType.BUTTON,
								label: 'Confirm',
								custom_id: 'confirm-btn',
								style: ButtonStyle.PRIMARY,
							},
						],
					},
				],
			});

			/**
			 * This function handles component contexts within a command, so you
			 * can use the previous context aswell.
			 */
			ctx.registerComponent('confirm-btn', async (btnCtx) => {
				await btnCtx.editOriginal('Clicked button');
			});
		} else if (ctx.subcommands[1] == 'roles') {
			await ctx.send('bla');
		}
	} catch (e) {
		Log.error(e);
	}
}