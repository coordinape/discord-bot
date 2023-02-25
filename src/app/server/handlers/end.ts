import { ButtonBuilder, ActionRowBuilder, ButtonStyle, Role } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';
import Log from 'src/app/utils/Log';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/end \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1072574945206480997",
	"roleId": "1058334400540061747",
	"epochName": "The Great Epoch",
	"circleId": "5",
	"circleName": "Circumference",
	"endTime": "2023-02-15T22:00:00+00:00",
	"giveCount": 1000,
	"userCount": 9
}'
 */

const End = z.object({
	channelId: z.string(),
	roleId: z.string(),
	epochName: z.string(),
	circleId: z.number(),
	circleName: z.string(),
	endTime: z.string(),
	giveCount: z.number(),
	userCount: z.number(),
});

type TEnd = Omit<z.infer<typeof End>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const response = End.safeParse(req.body);

		if (!response.success) {
			Log.debug(`[epoch-start] Invalid request body: ${response.error}`);
			throw new Error(`Invalid request body: ${response.error}`);
		}

		const { channelId, ...data } = response.data;

		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}
		
		const actions: ButtonBuilder[] = [{
			label: 'Contribute',
			url: `https://app.coordinape.com/circles/${data.circleId}/contributions`,
		}].map(({ label, url }) =>
			new ButtonBuilder()
				.setURL(url)
				.setLabel(label)
				.setStyle(ButtonStyle.Link),
		);
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

async function getContent({ role, epochName, circleName, endTime, giveCount, userCount, circleId }: { role: Role } & TEnd) {
	const endTimeEpoch = new Date(endTime).getTime() / 1000;
	return `${role} You've done it! ${epochName} for ${circleName} ended <t:${endTimeEpoch}:R>!\n\nI'm sure you crushed it. Your Circle gave ${giveCount} GIVE across ${userCount} users.\n\nTo see your results for the epoch click the Personal Summary button below, or view it in the app. https://app.coordinape.com/circles/${circleId}/history\n\nWe’d love to know how you felt about this epoch, if you react to this message we’ll use that data to make Coordinape better!\n\nIf you have 3 minutes you could also fill out the pulse survey below this data will help your team and Coordinape improve.\n\n**It's better to GIVE than receive**`;
}
