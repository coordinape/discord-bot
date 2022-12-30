import { ButtonBuilder, ButtonStyle } from 'discord.js';

export const COORDINAPE_BUTTON: ButtonBuilder = new ButtonBuilder()
	.setURL('https://coordinape.com/')
	.setLabel('Coordinape.com')
	.setStyle(ButtonStyle.Link);
