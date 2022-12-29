import { ButtonStyle, CommandContext, CommandOptionType, ComponentButton, ComponentButtonLink, ComponentType, SlashCommand, SlashCreator } from 'slash-create';
import { LogUtils } from '../utils/Log';
import { ServiceSupport } from '../service/ServiceSupport';

const COORDINAPE_BUTTON: ComponentButtonLink = {
	type: ComponentType.BUTTON,
	label: 'Coordinape.com',
	style: ButtonStyle.LINK,
	url: 'https://coordinape.com/',
};

/**
 * Just for testing the epoch update messages
 */
export default class Coordinape extends SlashCommand {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: 'epoch',
			description: 'Testing the epoch update messages',
			options: [
				{
					name: 'epoch-start',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing epoch-start',
				},
				{
					name: 'epoch-end',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing epoch-end',
				},
				{
					name: 'nomination',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing nomination',
				},
				{
					name: 'vouch',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing vouch',
				},
				{
					name: 'vouch-successful',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing vouch-successful',
				},
				{
					name: 'vouch-unsuccessful',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing vouch-unsuccessful',
				},
				{
					name: 'user-added-to-circle',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing user-added-to-circle',
				},
				{
					name: 'user-leaves-circle',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing user-leaves-circle',
				},
				{
					name: 'user-opts-out',
					type: CommandOptionType.SUB_COMMAND,
					description: 'testing user-opts-out',
				},
			],
		});
	}

	// @command
	async run(ctx: CommandContext) {
		LogUtils.logCommandStart(ctx);

		if (ctx.user.bot) return;

		const service = new ServiceSupport(ctx);

		try {
			await ctx.defer();

			switch (ctx.subcommands[0]) {
			case 'epoch-start': {
				const actions: ComponentButton[] = ['Link', 'Contribute', 'Epoch Statement', 'Opt-in'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: 'Heads up `[role]`! `[epoch name]` for `[circle]` has just started!\n\nIt will run from <t:1668223320:f> to <t:1668223320:f> <t:1665417300:R>!\n\nDon\'t forget to opt in and let your Circlemates know what you did this this cycle in your epoch statement and contributions!\n\nIf you want to opt-in or update your statement you can do that by clicking the buttons below.\n\n**Get Giving**',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			case 'epoch-end': {
				const actions: ComponentButton[] = ['Pulse Survey', 'Link', 'Contribute', 'Personal Summary'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: '`[role]` You\'ve done it! `[epoch name]` for `[circle]` ended <t:1665417300:R>!\n\nI\'m sure you crushed it. Your Circle gave `[SUM give]` across `[count users]`.\n\nTo see your results for the epoch click the Personal Summary button below, or view it in the app. `[circle history link]`\n\nWe’d love to know how you felt about this epoch, if you react to this message we’ll use that data to make Coordinape better!\n\nIf you have 3 minutes you could also fill out the pulse survey below this data will help your team and Coordinape improve.\n\n**It\'s better to GIVE than receive**',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			case 'nomination': {
				const actions: ComponentButton[] = ['Vouch', 'Link'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: '`[role]` `[Nominee]` was nominated by `[Nominator]` for `[Nomination reason]`!\n\nThey need `[number of vouches]` vouches to join the circle.',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			case 'vouch': {
				const actions: ComponentButton[] = ['Vouch', 'Link'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: '`[role]` `[Nominee]` was Vouched for by `[Voucher]` for `[Nomination reason]`!\n\nThey need `[number of vouches]` vouches to join the circle.',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			case 'vouch-successful': {
				const actions: ComponentButton[] = ['Note', '[Nominee Profile]', 'Link'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: '`[role]` `[Nominee]` was successfully Vouched into the Circle `[Voucher1, Voucher N]` for `[Nomination reason]`!\n\nDon\'t forget to welcome them to the circle with a note!',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			case 'vouch-unsuccessful': {
				const actions: ComponentButton[] = ['Nominate', 'Link'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: '`[role]` `[Nominee]` did not receive enough vouches to join the circle their Nomination has expired. They can be renominated now.',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			case 'user-added-to-circle': {
				const actions: ComponentButton[] = ['Note', 'Link'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: '`[role]` `[New User]`, `[Username]` - `[0x+last 4 of address]` has been added to the `[circle name]` circle via `[method of addition]` _ successful Vouch, magic link, csv input, or manually_\n\nDon\'t forget to welcome them to the Circle with a note in the next Epoch!',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			case 'user-leaves-circle': {
				const actions: ComponentButton[] = ['Link'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: '`[Username]` - `[0x+last 4 of address]` has left the `[circle name]` circle via `[method of removal]` _ manual, admin removal_\n\n`[Give allocated]` was refunded to `[Username 1]...` `[Give allocated]` was refunded to `[Username n]`',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			case 'user-opts-out': {
				const actions: ComponentButton[] = ['Link'].map((label) => ({
					type: ComponentType.BUTTON,
					label,
					custom_id: `${label.toUpperCase()}_BUTTON`,
					style: ButtonStyle.PRIMARY,
				}));
				await ctx.send({
					content: '`[Username]` - `[0x+last 4 of address]` has opted out of the current Epoch for `[circle name]` circle.\n\n`[Give allocated]` was refunded to `[Username 1]...` `[Give allocated]` was refunded to `[Username n]`',
					components: [{ type: ComponentType.ACTION_ROW, components: [...actions, COORDINAPE_BUTTON] }],
				});
				break;
			}
			default:
				break;
			}
		} catch (e) {
			LogUtils.logError('Welp, something went wrong', e);
			await service.ephemeralError({ msg: JSON.stringify(e) });
		}
	}
}
