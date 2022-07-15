import {
	CommandContext,
	ComponentType,
	TextInputStyle,
	ModalInteractionContext,
} from 'slash-create';

import Log from '../../utils/Log';

// Make sure the inputs to the modal are in the right format
// If the format is right, return those inputs with spaces stripped out, if there were any
const modalInputSanityCheck = async (mctx: ModalInteractionContext) => {
	let parsedDiscordRoleId: string = null;
	let parsedCircleId: number = null;
	// Just make sure that the role ID parses correctly to number. We're gonna return it as string
	const roleNr = Number(mctx.values.discord_role_id);
	if (isNaN(roleNr)) {
		mctx.send({
			content: 'Invalid format for Discord Role ID.',
			ephemeral: true,
		});
	} else {
		parsedDiscordRoleId = mctx.values.discord_role_id.trim();
	}

	// Make sure that the circle ID parses correctly to number, and return it as an int
	const circleNr = Number(mctx.values.circle_id);
	if (isNaN(circleNr)) {
		mctx.send({
			content: 'Invalid format for Circle ID.',
			ephemeral: true,
		});
	} else {
		parsedCircleId = circleNr.valueOf();
	}

	return { discordRoleId: parsedDiscordRoleId, circleId: parsedCircleId };
};

const validateDiscordRole = async (mctx: ModalInteractionContext, discordRoleId: string) => {
	const roles = await mctx.creator.client.guilds.resolve(mctx.guildID).roles.fetch();
	const roleIds = roles.map((r: { id: string; }) => r.id);
	if (!roleIds.includes(mctx.values.discord_role_id)) {
		// TODO reusable method in ServiceSupport for this response?
		mctx.send({
			content: `**Error**: Role with ID ${discordRoleId} does not exist in this Discord server.`,
			ephemeral: true,
		});
		Log.log(`Discord user ${mctx.user.id} tried to assign role ${discordRoleId} which does not exist in server ${mctx.guildID}`);
		return false;
	}
	return true;
};

const validateCoordinapeCircle = async (mctx: ModalInteractionContext, userAdminCircleIds: number[], circleId: number) => {
	// TODO check beforehand that the user has inserted an int for the `circle_id`
	if (!userAdminCircleIds.includes(circleId)) {
		// TODO reusable method in ServiceSupport for this response?
		mctx.send({
			content: `**Error**: You're not an admin in circle with id ${circleId}.`,
			ephemeral: true,
		});
		Log.log(`Discord user ${mctx.user.id} tried assign circle ${circleId} in which they're not an admin.`);
		return false;
	}
	return true;
};

const handleSubmitModal = async (mctx: ModalInteractionContext, userAdminCircleIds: number[]) => {
	// Input sanity check and space stripping
	const { discordRoleId, circleId } = await modalInputSanityCheck(mctx);

	if (discordRoleId && circleId) {
		// Check whether provided Discord role exists in this server
		const isRoleValid = await validateDiscordRole(mctx, discordRoleId);
		if (!isRoleValid) return;
		// Check whether user that called the command admins the Coordinape circle
		const isCircleValid = await validateCoordinapeCircle(mctx, userAdminCircleIds, circleId);
		if(!isCircleValid) return;
		// TODO reusable method in ServiceSupport for this response?
		mctx.send({
			content:`Successfuly associated role ${mctx.values.discord_role_id} to circle with ID ${mctx.values.circle_id} [TODO show name here]`,
			ephemeral: true,
		});
		Log.log(`Successfuly associated role ${mctx.values.discord_role_id} to circle with ID ${mctx.values.circle_id}`);
	}
};


export async function assignCommand(ctx: CommandContext, userAdminCircleIds: number[]): Promise<any> {
	try {
		await ctx.sendModal(
			{
				title: 'Role <-> Circle Assignment',
				components: [
					{
						type: ComponentType.ACTION_ROW,
						components: [
							// TODO switch to role name? the lookup in `submitModal` is trivial. 
							// Up to Coordinape's preference
							{
								type: ComponentType.TEXT_INPUT,
								label: 'Discord role ID?',
								style: TextInputStyle.SHORT,
								custom_id: 'discord_role_id',
								placeholder: 'Insert Discord Role ID',
							},
						],
					},
					{
						type: ComponentType.ACTION_ROW,
						components: [
							{
								type: ComponentType.TEXT_INPUT,
								label: 'Circle ID?',
								style: TextInputStyle.SHORT,
								custom_id: 'circle_id',
								placeholder: 'Insert Circle ID',
							},
						],
					},
				],
			},
			async (mctx) => {
				await handleSubmitModal(mctx, userAdminCircleIds);
			},
		).catch(Log.error);
	} catch (e) {
		Log.error(e);
	}
}