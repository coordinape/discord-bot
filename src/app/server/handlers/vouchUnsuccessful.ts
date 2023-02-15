import { ButtonBuilder, ActionRowBuilder, Role, ButtonStyle } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/vouch-unsuccessful \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1072574945206480997",
	"roleId": "1058334400540061747",
	"circleId": "5",
	"nominee": "John Doe"}'
 */

const VouchUnsuccessful = z.object({
	channelId: z.string(),
	roleId: z.string(),
	circleId: z.string(),
	nominee: z.string(),
});

type TVouchUnsuccessful = Omit<z.infer<typeof VouchUnsuccessful>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = VouchUnsuccessful.parse(req.body);
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}
		
		const NOMINATE_LINK_BUTTON: ButtonBuilder = new ButtonBuilder()
			.setURL(`https://app.coordinape.com/circles/${data.circleId}/members`)
			.setLabel('Nominate')
			.setStyle(ButtonStyle.Link);
		const row = new ActionRowBuilder<ButtonBuilder>().addComponents([NOMINATE_LINK_BUTTON, COORDINAPE_BUTTON]);
		
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

async function getContent({ role, nominee }: { role: Role } & TVouchUnsuccessful) {
	return `${role} ${nominee} did not receive enough vouches to join the circle their Nomination has expired. They can be renominated now.`;
}
