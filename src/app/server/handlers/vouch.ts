import { ButtonBuilder, ActionRowBuilder, ButtonStyle, Role } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/vouch \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1057926498524332083",
	"roleId": "1058334400540061747",
	"nominee": "John Doe",
	"voucher": "Jane Doe",
	"nominationReason": "great contributions",
	"numberOfVouches": 2
}
'
 */

const Vouch = z.object({
	channelId: z.string(),
	roleId: z.string(),
	nominee: z.string(),
	voucher: z.string(),
	nominationReason: z.string(),
	numberOfVouches: z.number(),
});

type TVouch = Omit<z.infer<typeof Vouch>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = Vouch.parse(req.body);
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}
		
		const actions: ButtonBuilder[] = ['Vouch', 'Link'].map((label) => (new ButtonBuilder()
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

async function getContent({ role, nominee, voucher, nominationReason, numberOfVouches }: { role: Role } & TVouch) {
	return `${role} ${nominee} was Vouched by ${voucher} for ${nominationReason}!\nThey need ${numberOfVouches} vouches to join the circle.`;
}
