import { Message } from 'slash-create';

export function isMessage(message: boolean | Message): message is Message {
	return (message as Message).edit !== undefined;
}
