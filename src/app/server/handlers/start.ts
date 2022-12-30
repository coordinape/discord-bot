import { ButtonBuilder, ActionRowBuilder, ButtonStyle, Role } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/start \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1057926498524332083",
	"roleId": "1058334400540061747",
	"epochName": "The Great Epoch",
	"circleName": "Circumference",
	"startTime": "1672400616",
	"endTime": "1672566216"
}
'
 */

const Start = z.object({
	channelId: z.string(),
	roleId: z.string(),
	epochName: z.string(),
	circleName: z.string(),
	startTime: z.string(),
	endTime: z.string(),
});

type TStart = Omit<z.infer<typeof Start>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = Start.parse(req.body);
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}
		
		const actions: ButtonBuilder[] = ['Link', 'Contribute', 'Epoch Statement', 'Opt-in'].map((label) => (new ButtonBuilder()
			.setCustomId(`${label.toUpperCase()}_BUTTON`)
			.setLabel(label)
			.setStyle(ButtonStyle.Primary)));
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([...actions, COORDINAPE_BUTTON]);
		
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

async function getContent({ role, epochName, circleName, startTime, endTime }: { role: Role } & TStart) {
	return `Heads up ${role}! ${epochName} for ${circleName} has just started!\n\nIt will run from <t:${startTime}:f> to <t:${endTime}:f> <t:${endTime}:R>!\n\nDon't forget to opt in and let your Circlemates know what you did this this cycle in your epoch statement and contributions!\n\nIf you want to opt-in or update your statement you can do that by clicking the buttons below.\n\n**Get Giving**`;
}
