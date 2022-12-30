import { ButtonBuilder, ActionRowBuilder, ButtonStyle, TextChannel } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/nomination \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1057926498524332083",
	"roleId": "1058334400540061747",
	"nominee": "John Doe",
	"nominator": "Jane Doe",
	"nominationReason": "great contributions",
	"numberOfVouches": 2
}
'
 */

const EpochNomination = z.object({
	channelId: z.string(),
	roleId: z.string(),
	nominee: z.string(),
	nominator: z.string(),
	nominationReason: z.string(),
	numberOfVouches: z.number(),
});

type TEpochNomination = Omit<z.infer<typeof EpochNomination>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = EpochNomination.parse(req.body);
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}
		
		const actions: ButtonBuilder[] = ['Vouch', 'Link'].map((label) => (new ButtonBuilder()
			.setCustomId(`${label.toUpperCase()}_BUTTON`)
			.setLabel(label)
			.setStyle(ButtonStyle.Primary)));
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([...actions, COORDINAPE_BUTTON]);
		
		const message = await channel.send({ content: await getContent({ channel, ...data }), components: [row] });

		res.status(200).send({ createdAt: message.createdTimestamp, body: req.body });
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getContent({ channel, roleId, nominee, nominator, nominationReason, numberOfVouches }: { channel: TextChannel } & TEpochNomination) {
	const guild = await client.guilds.fetch(channel.guildId);
	const role = await guild.roles.fetch(roleId);
	if (!role) {
		throw new Error(`Role with id '${roleId}' not found!`);
	}
	return `${role} ${nominee} was nominated by ${nominator} for ${nominationReason}!\nThey need ${numberOfVouches} vouches to join the circle.`;
}
