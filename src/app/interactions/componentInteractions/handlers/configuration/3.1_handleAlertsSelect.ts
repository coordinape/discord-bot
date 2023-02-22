import { ComponentActionRow, ComponentContext, ComponentSelectMenu, ComponentType } from 'slash-create';
import Log from 'src/app/utils/Log';
import { ALERTS_SELECT_CANCEL_BUTTON, ALERTS_SELECT_CONFIRM_BUTTON, buildAlertsSelect } from './3.2_handleAlertsToSend';

/**
 * Handle alert select
 * @param ctx the component context
 */
export async function handleAlertsSelect(ctx: ComponentContext) {
	try {
		const actionRowComponents = ctx.message.components as ComponentActionRow[];
		const select = actionRowComponents[0].components[0] as ComponentSelectMenu;
	
		const options = select.options?.map((option) => {
			option.default = ctx.values.includes(option.value);
			return option;
		});
	
		const newSelectComponent = buildAlertsSelect({ options });
	
		const selectActionRow = { type: ComponentType.ACTION_ROW, components: [newSelectComponent] } as ComponentActionRow;
	
		const buttons = { type: ComponentType.ACTION_ROW, components: [
			{ ...ALERTS_SELECT_CONFIRM_BUTTON, ...(options?.some((o) => o.default) ? { disabled: false } : { }) },
			ALERTS_SELECT_CANCEL_BUTTON,
		] } as ComponentActionRow;
	
		await ctx.editParent({ components: [selectActionRow, buttons] });
	} catch (error) {
		await ctx.send(`Something is wrong, please try again or contact coordinape: [handleAlertsSelect] ${error}`);
		Log.error(error);
	}
}
