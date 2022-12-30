import { ButtonBuilder, ActionRowBuilder, ButtonStyle, Role } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';
import { getUsername } from '../utils/getUsername';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/user-removed \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1057926498524332083",
	"roleId": "1058334400540061747",
	"discordId": "578033839910289408",
	"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
	"circleName": "Circumference",
	"methodOfRemoval": "Admin Removal",
	"refunds": [
		{ "username": "Alice", "give": 10 },
		{ "username": "Bob", "give": 15 },
		{ "username": "Mallory", "give": 75 }
	]
}
'
 */

const UserRemoved = z
	.object({
		channelId: z.string(),
		roleId: z.string(),
		discordId: z.string().optional(),
		address: z.string().optional(),
		circleName: z.string(),
		methodOfRemoval: z.string(),
		refunds: z.array(z.object({ username: z.string(), give: z.number() })),
	})
	.partial({ discordId: true, address: true })
	.refine(({ discordId, address }) => discordId || address, 'Either discordId or address should be filled in.');

type TUserRemoved = Omit<z.infer<typeof UserRemoved>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = UserRemoved.parse(req.body);
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}

		const USER_REMOVED_LINK_BUTTON: ButtonBuilder = new ButtonBuilder()
			.setCustomId('USER_REMOVED_LINK_BUTTON')
			.setLabel('Link')
			.setStyle(ButtonStyle.Primary);
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([USER_REMOVED_LINK_BUTTON, COORDINAPE_BUTTON]);
		
		const guild = await client.guilds.fetch(channel.guildId);
		const role = await guild.roles.fetch(data.roleId);
		if (!role) {
			throw new Error(`Role with id '${data.roleId}' not found!`);
		}

		const message = await channel.send({ content: await getContent({ role, ...data }), components: [row] });

		res.status(200).send({ createdAt: message.createdTimestamp, body: req.body });
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getContent({ role, discordId, address, circleName, methodOfRemoval, refunds }: { role: Role } & TUserRemoved) {
	return `${role}, ${getUsername({ discordId, address })} has left the ${circleName} circle via ${methodOfRemoval}\n\n${refunds.map(({ username, give }) => `${give} GIVE was refunded to ${username}`).join(', ')}.`;
}