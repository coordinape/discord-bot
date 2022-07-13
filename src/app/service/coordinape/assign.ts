import {
	CommandContext,
	ComponentType,
	TextInputStyle,
	ModalInteractionContext,
} from 'slash-create';

import Log from '../../utils/Log';

import graphQLDiscordProfileQuery from '../../schema/GraphQLDiscordProfileQuery';

const validateDiscordRole = async (mctx: ModalInteractionContext) => {
	const roles = await mctx.creator.client.guilds.resolve(mctx.guildID).roles.fetch();
	const roleIds = roles.map((r: { id: string; }) => r.id);
	if (!roleIds.includes(mctx.values.discord_role_id)) {
		mctx.send(`**Error**: Role with ID ${mctx.values.discord_role_id} does not exist in this Discord server.`);
		Log.log(`Discord user ${mctx.user.id} tried to assign role ${mctx.values.discord_role_id} which does not exist in server ${mctx.guildID}`);
		return false;
	}
	return true;
};

const validateCoordinapeCircle = async (mctx: ModalInteractionContext) => {
	const queryData = await graphQLDiscordProfileQuery(mctx.user.id);
	Log.log(JSON.stringify(queryData));
	return false;
};

/*
// Checks to be made before showing the modal
const preChecks = async (user: string) => {
	// Check if user is a circle admin
};
*/

const handleSubmitModal = async (mctx: ModalInteractionContext) => {
	// TODO strip spaces from input values - Discord doesn't handle that and it will error out cause the id comes with a space
	// Check whether provided Discord role exists in this server
	const isRoleValid = validateDiscordRole(mctx);
	if (!isRoleValid) return;
	// Check whether user that called the command admins the Coordinape circle
	const isCircleValid = validateCoordinapeCircle(mctx);
	if(!isCircleValid) return;

	mctx.send(`Successfuly associated role ${mctx.values.discord_role_id} to circle with ID ${mctx.values.circle_id} [TODO show name here]`);
};


export async function assignCommand(ctx: CommandContext): Promise<any> {
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
			// TODO send ephemeral message with the inserted inputs
			async (mctx) => {
				await handleSubmitModal(mctx);
			},
		).catch(Log.error);
	} catch (e) {
		Log.error(e);
	}
}