import { ButtonStyle, ComponentButtonLink, ComponentType } from 'slash-create';

export const HELP_BUTTON: ComponentButtonLink = {
	type: ComponentType.BUTTON,
	label: 'Help',
	style: ButtonStyle.LINK,
	// TODO Add actual link
	url: 'https://docs.coordinape.com',
};
