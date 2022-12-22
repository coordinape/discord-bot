export function extractCircleId(text: string): string {
	const pattern = /\(Circle\sID:\s(.*?)\)/;
	const match = pattern.exec(text);
	if (match) {
		return match[1];
	} else {
		throw new Error('Unable to link the circle, please contact coordinape support');
	}
}
