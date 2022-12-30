import express, { Express } from 'express';
import dotenv from 'dotenv';
import epochNomination from './handlers/epochNomination';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(express.json());

app.post('/api/epoch/nomination', epochNomination);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
