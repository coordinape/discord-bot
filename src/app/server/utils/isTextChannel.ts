import { Channel, ChannelType, TextChannel } from 'discord.js';

export function isTextChannel(channel: Channel): channel is TextChannel {
	return (channel as TextChannel).type === ChannelType.GuildText;
}
