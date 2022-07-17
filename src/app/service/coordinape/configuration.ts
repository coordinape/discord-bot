import {
	CommandContext,
	ComponentType,
	TextInputStyle,
	ModalInteractionContext,
} from 'slash-create';

import Log from '../../utils/Log';

// Make sure the text inputs to the modal are in the right format
// If the format is right, return those inputs with spaces stripped out, if there were any
const modalInputSanityCheck = async (mctx: ModalInteractionContext) => {
	let parsedChannelId: string = null;

	// Just make sure that the channel ID parses correctly to number. We're gonna return it as string
	const channel = Number(mctx.values.channel_id);
	if (isNaN(channel)) {
		mctx.send({
			content: 'Invalid format for Channel ID.',
			ephemeral: true,
		});
	} else {
		parsedChannelId = mctx.values.channel_id.trim();
	}

	return { channelId: parsedChannelId };
};

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

const handleSubmitModal = async (mctx: ModalInteractionContext) => {
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

export async function configurationCommand(ctx: CommandContext): Promise<any> {
	try {
		await ctx.sendModal(
			{
				title: 'Bot Configuration',
				components: [
					{
						type: ComponentType.ACTION_ROW,
						components: [
							// Currently, channel must already exist, but we
							// can add the option for the user to provide a channel
							// name and create it, instead of providing the ID of an
							// already existing channel
							{
								type: ComponentType.TEXT_INPUT,
								label: 'Which channel to send alerts to?',
								style: TextInputStyle.SHORT,
								custom_id: 'channel_id',
								placeholder: 'Insert channel ID',
							},
						],
					},
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
				],
			},
			// TODO send ephemeral message with the inserted inputs
			async (mctx) => {
				await handleSubmitModal(mctx);
			},
		).catch(Log.error);
	} catch (e) {
		Log.error(e);
	}
}