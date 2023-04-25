const apiKeys = Object.freeze({
	DISCORD_BOT_ID: process.env.DISCORD_BOT_APPLICATION_ID,
	sentryDSN: process.env.SENTRY_IO_DSN,
});

export default apiKeys;
