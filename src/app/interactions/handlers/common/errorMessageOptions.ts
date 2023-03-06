import { MessageOptions } from 'slash-create';

type Props = {
    handlerName: string;
    error: unknown;
}

export function errorMessageOptions({ handlerName, error }: Props): MessageOptions {
	return {
		content: `Something is wrong, please try again or contact coordinape: [${handlerName}] ${error}`,
		ephemeral: true,
	};
}