export const getOAuth2Url = () => {
	if (!process.env.DISCORD_BOT_CLIENT_ID) {
		throw new Error('Environment variable `DISCORD_BOT_CLIENT_ID` is missing');
	}

	if (!process.env.DISCORD_BOT_REDIRECT_URI) {
		throw new Error('Environment variable `DISCORD_BOT_REDIRECT_URI` missing');
	}

	const oauth2Url = new URL('https://discord.com/api/oauth2/authorize');
	oauth2Url.searchParams.append('client_id', process.env.DISCORD_BOT_CLIENT_ID);
	oauth2Url.searchParams.append('redirect_uri', process.env.DISCORD_BOT_REDIRECT_URI);
	oauth2Url.searchParams.append('response_type', 'code');
	oauth2Url.searchParams.append('scope', 'identify');

	return oauth2Url.href;
};
