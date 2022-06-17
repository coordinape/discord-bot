import {
	GuildMember,
	PartialGuildMember,
	Collection,
	Snowflake,
	Role,
} from 'discord.js';
import { DiscordEvent } from '../types/discord/DiscordEvent';
import Log, { LogUtils } from '../utils/Log';

export default class implements DiscordEvent {
	name = 'guildMemberUpdate';
	once = true;

	async execute(oldMember: GuildMember | PartialGuildMember, newMember: GuildMember | PartialGuildMember) {
		try {
			if (oldMember.partial) {
				oldMember = await oldMember.fetch();
			}
			if (newMember.partial) {
				newMember = await newMember.fetch();
			}

			const removeRole = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
			const addRole = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
            
			if (removeRole.size > 0) {
				Log.debug(`The roles ${removeRole.map(r => r.name)} were removed from ${oldMember.displayName}.`);
				this.rolesRemoved(newMember as GuildMember, removeRole);
				return;
			}
			if (addRole.size > 0) {
				Log.debug(`The roles ${addRole.map(r => r.name)} were added to ${oldMember.displayName}.`);
				this.rolesAdded(newMember as GuildMember, addRole);
			}

		} catch (e) {
			return LogUtils.logError('Retrieval of member details has failed. Please try this again. Or try something else.', e);
		}
	}

	/**
	 * Handler for when roles are removed from a member.
	 *
	 * @param guildMember member that roles were removed from
	 * @param roles roles that were removed from member
	 */
	rolesRemoved = (guildMember: GuildMember, roles: Collection<Snowflake, Role>): void => {
		roles.each(async role => {
			// logic for removing roles
		});
	};

	/**
	 * Handler for when roles are added to a member.
	 *
	 * @param guildMember member to whom roles were added
	 * @param roles roles added
	 */
	rolesAdded = (guildMember: GuildMember, roles: Collection<Snowflake, Role>): void => {
		roles.each(async role => {
			// logic for applying role addition
		});
	};
	
}