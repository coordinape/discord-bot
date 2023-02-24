export function extractUserId(text: string): string {
	const pattern = /<@(.*?)>/;
	const match = pattern.exec(text);
	if (!match) {
		throw new Error('Unable to find the user, please contact coordinape support');
	}
	return match[1];
}
