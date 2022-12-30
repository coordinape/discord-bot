import express, { Express } from 'express';
import dotenv from 'dotenv';
import nomination from './handlers/nomination';
import vouch from './handlers/vouch';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(express.json());

app.post('/api/epoch/nomination', nomination);
app.post('/api/epoch/vouch', vouch);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
