/* eslint-disable no-console */
import { CommandContext } from 'slash-create';
import * as Sentry from '@sentry/node';

try {
	if (process.env.NODE_ENV != 'production') {
		console.debug('Logger initialized!');
	}
} catch (e) {
	throw new Error();
}

const Log = {
	info(statement: string | any): void {
		if (process.env.NODE_ENV != 'production') {
			console.log(statement);
		}
	},

	warn(statement: string | any): void {
		if (process.env.NODE_ENV != 'production') {
			console.log(statement);
		}
	},

	debug(statement: string | any): void {
		if (process.env.NODE_ENV != 'production') {
			console.debug(statement);
		}
	},

	error(statement: string | any): void {
		if (process.env.NODE_ENV != 'production') {
			console.error(statement);
		}
	},

	fatal(statement: string | any): void {
		if (process.env.NODE_ENV != 'production') {
			console.error(statement);
		}
	},

	trace(statement: string | any): void {
		if (process.env.NODE_ENV != 'production') {
			console.log(statement);
		}
	},

	log(statement: string | any): void {
		if (process.env.NODE_ENV != 'production') {
			console.log(statement);
		}
	},
};

export const LogUtils = {
	logCommandStart(ctx: CommandContext): void {
		Log.info(
			`/${ctx.commandName} ran ${ctx.user.username}#${ctx.user.discriminator}`,
		);
	},

	logCommandEnd(ctx: CommandContext): void {
		Log.info(
			`/${ctx.commandName} ended ${ctx.user.username}#${ctx.user.discriminator}`,
		);
	},

	logError(message: string, error: Error | any, guildId?: string): void {
		try {
			if (error != null && error instanceof Error) {
				Sentry.captureException(error, {
					tags: {
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
