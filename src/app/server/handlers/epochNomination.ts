import { ButtonBuilder, ActionRowBuilder, ButtonStyle } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';

const EpochNomination = z.object({
	channelId: z.string(),
	nominee: z.string(),
	nominator: z.string(),
	nominationReason: z.string(),
	numberOfVouches: z.number(),
});

type TEpochNomination = Omit<z.infer<typeof EpochNomination>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	const actions: ButtonBuilder[] = ['Vouch', 'Link'].map((label) => (new ButtonBuilder()
		.setCustomId(`${label.toUpperCase()}_BUTTON`)
		.setLabel(label)
		.setStyle(ButtonStyle.Primary)));

	try {
		const { channelId, ...data } = EpochNomination.parse(req.body);
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			res.status(404).send('Channel not found!');
			return;
		}

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([...actions, COORDINAPE_BUTTON]);
		const message = await channel.send({ content: getMessage(data), components: [row] });
		res.status(200).send({ createdAt: message.createdTimestamp, body: req.body });
	} catch (error) {
		res.status(400).send(error);
	}
}

function getMessage({ nominee, nominator, nominationReason, numberOfVouches }: TEpochNomination) {
	return `[role] ${nominee} was nominated by ${nominator} for ${nominationReason}!\n\nThey need ${numberOfVouches} vouches to join the circle.`;
}
