import { ButtonBuilder, ActionRowBuilder, Role } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';
import { getUsername } from '../utils/getUsername';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/user-added \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1072574945206480997",
	"roleId": "1058334400540061747",
	"discordId": "578033839910289408",
	"address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
	"circleName": "Circumference",
	"methodOfAddition": "Successful Vouch"
}'
 */

const UserAdded = z
	.object({
		channelId: z.string(),
		roleId: z.string(),
		discordId: z.string().optional(),
		address: z.string().optional(),
		circleName: z.string(),
		methodOfAddition: z.string(),
	})
	.partial({ discordId: true, address: true })
	.refine(({ discordId, address }) => discordId || address, 'Either discordId or address should be filled in.');

type TUserAdded = Omit<z.infer<typeof UserAdded>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = UserAdded.parse(req.body);
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([COORDINAPE_BUTTON]);
		
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

async function getContent({ role, discordId, address, circleName, methodOfAddition }: { role: Role } & TUserAdded) {
	return `${role}, ${getUsername({ discordId, address })} has been added to the ${circleName} circle via ${methodOfAddition}\n\nDon't forget to welcome them to the Circle with a note in the next Epoch!`;
}
