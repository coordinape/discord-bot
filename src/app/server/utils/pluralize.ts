type Props = {
    count: number;
    noun: string;
    suffix?: string;
}

export function pluralize({ count, noun, suffix = 's' }: Props) {
	return `${count} ${noun}${count !== 1 ? suffix : ''}`;
}
