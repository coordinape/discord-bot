type Props = {
	discordId?: string;
	address?: string;
	profileName?: string;
}

export function getUsername({ discordId, address, profileName }: Props) {
	if (discordId) {
		return `<@${discordId}>`;
	}

	if (profileName && address) {
		return `Ox...${address?.slice(-4)} ${profileName}`;
	}

	if (address) {
		return `Ox...${address?.slice(-4)}`;
	}

	if (profileName) {
		return profileName;
	}

	return 'Unknown user';
}
