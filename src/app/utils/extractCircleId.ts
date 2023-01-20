export function extractCircleId(text: string): number {
	const pattern = /\(Circle\sID:\s(.*?)\)/;
	const match = pattern.exec(text);
	if (match) {
		return Number(match[1]);
	} else {
		throw new Error('Unable to link the circle, please contact coordinape support');
	}
}
