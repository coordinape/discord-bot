import { ButtonStyle, CommandContext, ComponentButton, ComponentContext, ComponentType } from 'slash-create';
import { CustomId } from 'src/app/interactions/customId';
import Log from 'src/app/utils/Log';
import { disableAllParentComponents } from '../common';
import { errorMessageOptions } from '../common/errorMessageOptions';

export const SUBMIT_CONTRIBUTION_CONFIRM_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Submit',
	custom_id: CustomId.SubmitContributionConfirmButton,
	style: ButtonStyle.SUCCESS,
};

export const SUBMIT_CONTRIBUTION_CANCEL_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	label: 'Don\'t Submit',
	custom_id: CustomId.SubmitContributionCancelButton,
	style: ButtonStyle.DESTRUCTIVE,
};

/**
 * Handle the contribution flow
 * 
 * @param ctx the command context
 */
export async function handleContribution(ctx: CommandContext): Promise<void> {
	// TODO: Check that the user is has their account linked

	// TODO: Check this message was sent from a channel linked to a circle that the user belongs

	try {
		const text = ctx.options.contribution.text;

		if (text.length < 3) {
			await ctx.send({
				content: `<@${ctx.user.id}>, your contribution needs to have at least 3 characters`,
				ephemeral: true,
			});
			return;
		}

		await ctx.send({
			content: `<@${ctx.user.id}>, are you ready to submit the following contribution to your circle?\n\n> ${text}`,
			components: [{
				type: ComponentType.ACTION_ROW,
				components: [SUBMIT_CONTRIBUTION_CONFIRM_BUTTON, SUBMIT_CONTRIBUTION_CANCEL_BUTTON],
			}],
			ephemeral: true,
		});

		
	} catch (error) {
		await ctx.send(errorMessageOptions({ handlerName: 'handleConfirmContribution', error }));
		Log.error(error);
	}
}

export async function handleContributionConfirm(ctx: ComponentContext) {
	await disableAllParentComponents(ctx);

	// Get the contribution from the message
	const text = ctx.message.content.split('\n')[2].substring(2);
	
	await ctx.send(`<@${ctx.user.id}> has posted a contribution:\n\n> ${text}`);

	return;
}

export async function handleContributionCancel(ctx: ComponentContext) {
	await disableAllParentComponents(ctx);
	
	await ctx.send(`<@${ctx.user.id}> your contribution was ignored`, { ephemeral: true });

	return;
}
