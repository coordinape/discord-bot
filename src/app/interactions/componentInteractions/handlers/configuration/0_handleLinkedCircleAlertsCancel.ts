import { ComponentContext } from 'slash-create';
import { disableAllComponents } from '../common';

export async function handleLinkedCircleAlertsCancel(ctx: ComponentContext): Promise<void> {
	await ctx.editParent({ components: disableAllComponents(ctx) });
}
