import express, { Express } from 'express';
import dotenv from 'dotenv';
import start from './handlers/start';
import end from './handlers/end';
import nomination from './handlers/nomination';
import vouch from './handlers/vouch';
import vouchSuccessful from './handlers/vouchSuccessful';
import vouchUnsuccessful from './handlers/vouchUnsuccessful';
import userAdded from './handlers/userAdded';
import userRemoved from './handlers/userRemoved';
import userOptsOut from './handlers/userOptsOut';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.use(express.json());

app.post('/api/epoch/start', start);
app.post('/api/epoch/end', end);
app.post('/api/epoch/nomination', nomination);
app.post('/api/epoch/vouch', vouch);
app.post('/api/epoch/vouch-successful', vouchSuccessful);
app.post('/api/epoch/vouch-unsuccessful', vouchUnsuccessful);
app.post('/api/epoch/user-added', userAdded);
app.post('/api/epoch/user-removed', userRemoved);
app.post('/api/epoch/user-opts-out', userOptsOut);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
