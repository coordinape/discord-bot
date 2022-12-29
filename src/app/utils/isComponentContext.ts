import { CommandContext, ComponentContext } from 'slash-create';

export function isComponentContext(context: ComponentContext | CommandContext): context is ComponentContext {
	return (context as ComponentContext).customID !== undefined;
}
