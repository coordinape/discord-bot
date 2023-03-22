import client from '../../app';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/daily-update \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1072574945206480997",
	"roleId": "1058334400540061747",
	"message": "Daily update message"
}'
 */

const DailyUpdate = z.object({
	channelId: z.string(),
	roleId: z.string(),
	message: z.string(),
});

type TDailyUpdate = Omit<z.infer<typeof DailyUpdate>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = DailyUpdate.parse(req.body);

		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}
		
		const guild = await client.guilds.fetch(channel.guildId);
		const role = await guild.roles.fetch(data.roleId);
		if (!role) {
			throw new Error(`Role with id '${data.roleId}' not found!`);
		}

		const message = await channel.send({ content: getContent(data), components: [] });

		res.status(200).send({ createdAt: message.createdTimestamp, body: req.body });
	} catch (error) {
		res.status(400).send(error);
	}
}

function getContent({ message }: TDailyUpdate) {
	return message;
}
