export function getUsername({ discordId, address }: { discordId?: string; address?: string }) {
	if (discordId) {
		return `<@${discordId}>`;
	}

	return `Ox...${address?.slice(-4)}`;
}
