type Props = {
    current: number;
    max: number;
    length: number;
}

export function progressBar({ current, max, length }: Props): string {
	const percentage = current / max;
	const progress = Math.round((length * percentage));

	return '▰'.repeat(progress) + '▱'.repeat(length - progress) + ' ' + Math.round(percentage * 100) + '%';
}
