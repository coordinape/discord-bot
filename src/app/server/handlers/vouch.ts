import { ButtonBuilder, ActionRowBuilder, ButtonStyle, Role } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';
import { progressBar } from '../utils/progressBar';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/vouch \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1072574945206480997",
	"roleId": "1058334400540061747",
	"nominee": "John Doe",
	"voucher": "Jane Doe",
	"circleId": "5",
	"nominationReason": "great contributions",
	"currentVouches": 1,
	"requiredVouches": 3
}'
 */

const Vouch = z.object({
	channelId: z.string(),
	roleId: z.string(),
	nominee: z.string(),
	voucher: z.string(),
	circleId: z.string(),
	nominationReason: z.string(),
	currentVouches: z.number(),
	requiredVouches: z.number(),
});

type TVouch = Omit<z.infer<typeof Vouch>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = Vouch.parse(req.body);

		if (isLastVouchRequired(data)) {
			return;
		}
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}
		
		const VOUCH_BUTTON: ButtonBuilder = new ButtonBuilder()
			.setURL(`https://app.coordinape.com/circles/${data.circleId}/members`)
			.setLabel('Vouch')
			.setStyle(ButtonStyle.Link);
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([VOUCH_BUTTON, COORDINAPE_BUTTON]);
		
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

async function getContent({ role, nominee, voucher, nominationReason, currentVouches, requiredVouches }: { role: Role } & TVouch) {
	// the actual nomination is in a way a "vouch"
	const vouches = currentVouches + 1;
	return `${role} ${nominee} was Vouched by ${voucher} for ${nominationReason}!\nThey currently have ${vouches} vouches and need ${requiredVouches} vouches to join the circle.\n${progressBar({
		current: vouches,
		max: requiredVouches,
		length: 20,
	})}`;
}

function isLastVouchRequired({ requiredVouches, currentVouches }: TVouch) {
	// nomination is a "vouch"
	return requiredVouches === currentVouches + 1;
}
