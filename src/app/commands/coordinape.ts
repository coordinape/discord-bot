import { ButtonStyle, CommandContext, ComponentButton, ComponentType, SlashCommand, SlashCreator } from 'slash-create';
import { LogUtils } from '../utils/Log';
import { ServiceSupport } from '../service/ServiceSupport';
import { CustomId } from '../interactions/customId';
import { findProfileId } from '@api/findProfileId';
import { getChannelLinkingStatus } from '@api/getChannelLinkingStatus';

const CONFIGURE_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.SUCCESS,
	label: 'CONFIGURE',
	custom_id: CustomId.ConfigButton,
};

const ASSIGN_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.PRIMARY,
	label: 'ASSIGN',
	custom_id: CustomId.AssignButton,
};

const UNASSIGN_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.DESTRUCTIVE,
	label: 'UNASSIGN',
	custom_id: CustomId.UnassignButton,
};

const UPDATE_ALERTS_BUTTON: ComponentButton = {
	type: ComponentType.BUTTON,
	style: ButtonStyle.SUCCESS,
	label: 'ALERTS',
	custom_id: CustomId.UpdateAlertsButton,
};

function getLinkButton({ isLinked }: {isLinked: boolean}): ComponentButton {
	if (isLinked) {
		return ({
			type: ComponentType.BUTTON,
			style: ButtonStyle.DESTRUCTIVE,
			label: 'UNLINK',
			custom_id: CustomId.UnlinkButton,
		});
	}

	return ({
		type: ComponentType.BUTTON,
		style: ButtonStyle.PRIMARY,
		label: 'LINK',
		custom_id: CustomId.LinkButton,
	});
}

export default class Coordinape extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'coordinape',
			description: 'Interact with Coordinape directly in Discord.',
			defaultPermission: true,
		});
	}

	// @command
	async run(ctx: CommandContext) {
		LogUtils.logCommandStart(ctx);

		if (ctx.user.bot) return;

		const service = new ServiceSupport(ctx);

		try {
			await ctx.defer();

			const profileId = await findProfileId({ userId: ctx.user.id });

			const isChannelLinked = await getChannelLinkingStatus({ channelId: ctx.channelID });
		
			if (isChannelLinked) {
				await ctx.send('Coordinape Single Command', { components: [
					{ type: ComponentType.ACTION_ROW, components: [getLinkButton({ isLinked: !!profileId })] },
					{ type: ComponentType.ACTION_ROW, components: [ASSIGN_BUTTON, UNASSIGN_BUTTON] },
					{ type: ComponentType.ACTION_ROW, components: [UPDATE_ALERTS_BUTTON] },
				] });

				return;
			}

			await ctx.send('Coordinape Single Command', { components: [
				{ type: ComponentType.ACTION_ROW, components: [getLinkButton({ isLinked: !!profileId })] },
				{ type: ComponentType.ACTION_ROW, components: [CONFIGURE_BUTTON] },
			] });
		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
