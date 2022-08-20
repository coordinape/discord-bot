import {
	createLogger,
	format,
	transports,
} from 'winston';
import { CommandContext } from 'slash-create';
import * as Sentry from '@sentry/node';

const logger = createLogger({
	level: 'info',
	exitOnError: false,
	format: format.json(),
	transports: [
		new transports.File({ filename: './../../../logs/<FILE_NAME>.log' }),
	],
});

const envCond = `${process.env.NODE_ENV != 'production'}
					&& ${process.env.NODE_ENV != 'staging'}`;

const Log = {
	
	debug(statement: string | any, options?: Omit<null, 'level'>): void {
		if (envCond || !logger.debug) {
			// eslint-disable-next-line no-console
			console.log(statement);
		} else {
			logger.debug(statement, options);
		}
	},
	
	info(statement: string | any, options?: Omit<null, 'level'>): void {
		if (envCond || !logger.info) {
			// eslint-disable-next-line no-console
			console.log(statement);
		} else {
			logger.info(statement, options);
		}
	},
	
	// Trace is used to denote 'notice'-level logs
	trace(statement: string | any, options?: Omit<null, 'level'>): void {
		if (process.env.NODE_ENV != 'production' || !logger.notice) {
			// eslint-disable-next-line no-console
			console.debug(statement);
		} else {
			logger.debug(statement, options);
		}
	},

	warn(statement: string | any, options?: Omit<null, 'level'>): void {
		if (process.env.NODE_ENV != 'production' || !logger.warn) {
			// eslint-disable-next-line no-console
			console.log(statement);
		} else {
			logger.warn(statement, options);
		}
	},
	
	error(statement: string | any, options?: Omit<null, 'level'>): void {
		if (process.env.NODE_ENV != 'production' || !logger.error) {
			// eslint-disable-next-line no-console
			console.error(statement);
		} else {
			logger.error(statement, options);
		}
	},
	
	crit(statement: string | any, options?: Omit<null, 'level'>): void {
		if (process.env.NODE_ENV != 'production' || !logger.crit) {
			// eslint-disable-next-line no-console
			console.error(statement);
		} else {
			logger.crit(statement, options);
		}
	},
	
	log(statement: string | any, options?: Omit<null, 'level'>): void {
		if (process.env.NODE_ENV != 'production') {
			// eslint-disable-next-line no-console
			console.log(statement);
		}
		logger.log(statement, options);
	},

};

export const LogUtils = {
	logCommandStart(ctx: CommandContext): void {
		Log.info(`/${ctx.commandName} ran ${ctx.user.username}#${ctx.user.discriminator}`, {
			indexMeta: true,
			meta: {
				guildId: ctx.guildID,
				userTag: `${ctx.user.username}#${ctx.user.discriminator}`,
				userId: ctx.user.id,
				params: ctx.options,
			},
		});
	},
	
	logCommandEnd(ctx: CommandContext): void {
		Log.info(`/${ctx.commandName} ended ${ctx.user.username}#${ctx.user.discriminator}`, {
			indexMeta: true,
			meta: {
				guildId: ctx.guildID,
				userTag: `${ctx.user.username}#${ctx.user.discriminator}`,
				userId: ctx.user.id,
				params: ctx.options,
			},
		});
	},
	
	logError(message: string, error: Error | any, guildId?: string): void {
		try {
			if (error != null && error instanceof Error) {
				Sentry.captureException(error, {
					tags: {
						guildId: guildId,
					},
				});
				Log.error(message, {
					indexMeta: true,
					meta: {
						name: error?.name,
						message: error?.message,
						stack: error?.stack,
						guildId: guildId,
					},
				});
			} else {
				Log.error(message);
			}
		} catch (e) {
			Log.warn(message);
		}
	},
};

export default Log;