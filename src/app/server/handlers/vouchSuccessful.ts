import { ButtonBuilder, ActionRowBuilder, ButtonStyle, Role } from 'discord.js';
import client from '../../app';
import { COORDINAPE_BUTTON } from '../components';
import { isTextChannel } from '../utils';
import { Request, Response } from 'express';
import { z } from 'zod';

/**
 * curl --request POST \
  --url http://localhost:4000/api/epoch/vouch-successful \
  --header 'Content-Type: application/json' \
  --data '{
	"channelId": "1057926498524332083",
	"roleId": "1058334400540061747",
	"nominee": "John Doe",
	"nomineeProfile": "http://localhost:3000/profile/me",
	"vouchers": ["Alice", "Bob", "Mallory"],
	"nominationReason": "Good contributions"
}
'
 */

const VouchSuccessful = z.object({
	channelId: z.string(),
	roleId: z.string(),
	nominee: z.string(),
	nomineeProfile: z.string(),
	vouchers: z.array(z.string()),
	nominationReason: z.string(),
});

type TVouchSuccessful = Omit<z.infer<typeof VouchSuccessful>, 'channelId'>;

export default async function handler(req: Request, res: Response) {
	try {
		const { channelId, ...data } = VouchSuccessful.parse(req.body);
		
		const channel = await client.channels.fetch(channelId);
		if (!channel || !isTextChannel(channel)) {
			throw new Error('Channel not found!');
		}

		const NOMINEE_PROFILE_BUTTON: ButtonBuilder = new ButtonBuilder()
			.setURL(data.nomineeProfile)
			.setLabel(`${data.nominee}'s Profile`)
			.setStyle(ButtonStyle.Link);
		
		const VOUCH_SUCCESSFUL_NOTE_BUTTON = new ButtonBuilder()
			.setCustomId('VOUCH_SUCCESSFUL_NOTE_BUTTON')
			.setLabel('Note')
			.setStyle(ButtonStyle.Primary);
			
		const LINK_BUTTON: ButtonBuilder = new ButtonBuilder()
			.setURL('http://localhost:3000')
			.setLabel('Link')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
			[VOUCH_SUCCESSFUL_NOTE_BUTTON, NOMINEE_PROFILE_BUTTON, LINK_BUTTON, COORDINAPE_BUTTON],
		);
		
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

async function getContent({ role, nominee, vouchers, nominationReason }: { role: Role } & TVouchSuccessful) {
	return `${role} ${nominee} was successfully Vouched into the Circle by ${vouchers.join(', ')} for ${nominationReason}!\n\nDon't forget to welcome them to the circle with a note!`;
}
