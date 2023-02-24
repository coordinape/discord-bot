import { NextFunction, Request, Response } from 'express';

export async function auth(req: Request, res: Response, next: NextFunction) {
	const coordinapeBotSecret = req.headers?.['x-coordinape-bot-secret'];

	if (!coordinapeBotSecret) {
		return res.status(400).send('Missing authorization header');
	}

	if (coordinapeBotSecret !== process.env.COORDINAPE_BOT_SECRET) {
		return res.status(401).send(`Invalid authorization header: "${req.headers['x-coordinape-bot-secret']}"`);
	}
    
	next();
}
