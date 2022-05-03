import { MessageOptions } from 'slash-create';

export default (): MessageOptions => {
	return {
		embeds: [{
			title: 'Discord Bot Template',
			description: 'This template can be used to build out new bots.',
			fields: [
				{
					name: '-> /help me',
					value: 'Display ',
					inline: false,
				},
				{
					name: '-> Useful Links',
					value: '[The DAO Bot Garage](https://discord.gg/EWRMHjqQVf)\n',
					inline: false,
				},
			],
		}],
	};
};