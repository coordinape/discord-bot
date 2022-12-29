import { CommandContext, ComponentContext } from 'slash-create';

export function isCommandContext(context: ComponentContext | CommandContext): context is CommandContext {
	return (context as CommandContext).subcommands !== undefined;
}
