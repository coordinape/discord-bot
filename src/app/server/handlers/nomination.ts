/* eslint-disable no-console */
import { ButtonBuilder, ActionRowBuilder, Role, ButtonStyle } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';
import Log from 'src/app/utils/Log';

/**
 * curl --request POST \
  --url https://coordinape-discord-bot.herokuapp.com/api/epoch/nomination \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1078378830433099928",
	"roleId": "1078378845759082587",
	"circleId": "2663",
	"nominee": "John Doe",
	"nominator": "Jane Doe",
	"nominationReason": "great contributions",
	"numberOfVouches": 2
}'
 */

const Nomination = z.object({
	channelId: z.string(),
	roleId: z.string(),
	circleId: z.string(),
	nominee: z.string(),
	nominator: z.string(),
	nominationReason: z.string(),
	numberOfVouches: z.number(),
});

type TNomination = Omit<z.infer<typeof Nomination>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		Log.debug('Handling nomination', req.body);
		
		const response = Nomination.safeParse(req.body);

		if (!response.success) {
			throw new Error(`Invalid request body: ${response.error}`);
		}

		const { channelId, ...data } = response.data;
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error(`Channel id ${channelId} not found!`);
		}

		const VOUCH_BUTTON: ButtonBuilder = new ButtonBuilder()
			.setURL(`https://app.coordinape.com/circles/${data.circleId}/members`)
			.setLabel('Vouch')
			.setStyle(ButtonStyle.Link);
		
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([VOUCH_BUTTON, COORDINAPE_BUTTON]);
		
		const guild = await client.guilds.fetch(channel.guildId);
		if (!guild) {
			throw new Error(`Guild id ${channel.guildId} not found!`);
		}

		const role = await guild.roles.fetch(data.roleId);
		if (!role) {
			throw new Error(`Role with id '${data.roleId}' not found!`);
		}

		const message = await channel.send({ content: await getContent({ role, ...data }), components: [row] });
		if (!message) {
			throw new Error(`Failed to send message to channel id ${channelId}!`);
		}

		res.status(200).send({ createdAt: message.createdTimestamp, body: req.body });
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getContent({ role, nominee, nominator, nominationReason, numberOfVouches }: { role: Role } & TNomination) {
	return `${role} ${nominee} was nominated by ${nominator} for:\n\n> "${nominationReason}"!\n\nThey need ${numberOfVouches} vouches to join the circle.`;
}
