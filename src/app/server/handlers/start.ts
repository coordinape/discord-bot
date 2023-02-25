import { ButtonBuilder, ActionRowBuilder, ButtonStyle, Role } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';
import Log from 'src/app/utils/Log';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/start \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1072574945206480997",
	"roleId": "1058334400540061747",
	"epochName": "The Great Epoch",
	"circleId": "5",
	"circleName": "Circumference",
	"startTime": "2023-02-14T22:00:00+00:00",
	"endTime": "2023-02-15T22:00:00+00:00"
}'
 */

const Start = z.object({
	channelId: z.string(),
	roleId: z.string(),
	epochName: z.string(),
	circleId: z.number(),
	circleName: z.string(),
	startTime: z.string(),
	endTime: z.string(),
});

type TStart = Omit<z.infer<typeof Start>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const response = Start.safeParse(req.body);

		if (!response.success) {
			Log.debug(`[epoch-start] Invalid request body: ${response.error}`);
			throw new Error(`Invalid request body: ${response.error}`);
		}

		const { channelId, ...data } = response.data;

		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}

		const actions: ButtonBuilder[] = [
			{
				label: 'Contribute',
				url: `https://app.coordinape.com/circles/${data.circleId}/contributions`,
			},
			{
				label: 'Epoch Statement',
				url: `https://app.coordinape.com/circles/${data.circleId}/give`,
			},
			{
				label: 'Opt-in',
				url: `https://app.coordinape.com/circles/${data.circleId}/give`,
			},
		].map(({ label, url }) =>
			new ButtonBuilder()
				.setURL(url)
				.setLabel(label)
				.setStyle(ButtonStyle.Link),
		);
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([
			...actions,
			COORDINAPE_BUTTON,
		]);

		const guild = await client.guilds.fetch(channel.guildId);
		const role = await guild.roles.fetch(data.roleId);
		if (!role) {
			throw new Error(`Role with id '${data.roleId}' not found!`);
		}

		const message = await channel.send({
			content: await getContent({ role, ...data }),
			components: [row],
		});

		res
			.status(200)
			.send({ createdAt: message.createdTimestamp, body: req.body });
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getContent({
	role,
	epochName,
	circleName,
	startTime,
	endTime,
}: { role: Role } & TStart) {
	const startTimeEpoch = new Date(startTime).getTime() / 1000;
	const endTimeEpoch = new Date(endTime).getTime() / 1000;
	return `Heads up ${role}! ${epochName} for ${circleName} has just started!\n\nIt will run from <t:${startTimeEpoch}:f> to <t:${endTimeEpoch}:f> (<t:${endTimeEpoch}:R>)!\n\nDon't forget to opt in and let your Circlemates know what you did this this cycle in your epoch statement and contributions!\n\nIf you want to opt-in or update your statement you can do that by clicking the buttons below.\n\n**Get Giving**`;
}
