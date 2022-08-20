const apiKeys = Object.freeze({
	DISCORD_BOT_ID: process.env.DISCORD_BOT_APPLICATION_ID,
	
	datadogKey: process.env.DD_API_KEY,
	AppName: process.env.APPNAME,
	logDefault: process.env.LOG_DEFAULT_LEVEL,
	
	sentryDSN: process.env.SENTRY_IO_DSN,
});

export default apiKeys;