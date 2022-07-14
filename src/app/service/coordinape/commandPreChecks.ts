import { CommandContext } from 'slash-create';

import Log from '../../utils/Log';

import graphQLDiscordProfileQuery from '../../schema/GraphQLDiscordProfileQuery';
import graphQLCircleAdminQuery from '../../schema/GraphQLCircleAdminQuery';

export async function commandPreChecks(ctx: CommandContext): Promise<any> {
	const subCommand: string = ctx.subcommands[0];

	if (subCommand == 'configuration') {
		const isDiscordAdmin = await ctx.creator.client.guilds
			.resolve(ctx.guildID).members.resolve(ctx.user.id).permissions.has('ADMINISTRATOR');
		Log.log({ isDiscordAdmin });
		if (!isDiscordAdmin) {
			return { status: false, msg: 'You must be an administrator in the Discord server to call this command.' };
		} else {
			return { status: true, data: {} };
		}
	} else if (subCommand == 'assign') {
		const profileQueryData = await graphQLDiscordProfileQuery(ctx.user.id);
		const discordUsers = profileQueryData.data.discord_users;
		if (discordUsers.length === 0) {
			return { status: false, msg: 'You must first link your Discord account to your Coordinape profile.' };
		}
		const profileId = discordUsers[0].profile.id;
		Log.log({ profileId });
		const circleAdminQueryData = await graphQLCircleAdminQuery(profileId);
		const _circleAdminIds = circleAdminQueryData.data.users;
		if (_circleAdminIds.length === 0) {
			return { status: false, msg: 'You must be the administrator of at least one circle to call this command.' };
		}
		const circleAdminIds = _circleAdminIds.map(c => c.circle_id);
		return {
			status: true, data: { userAdminCircleIds: circleAdminIds } };
	}
}