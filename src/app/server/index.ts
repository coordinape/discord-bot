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
import dailyUpdate from './handlers/dailyUpdate';
import { auth } from './handlers/middleware';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.post('/api/epoch/start', auth, start);
app.post('/api/epoch/end', auth, end);
app.post('/api/epoch/nomination', auth, nomination);
app.post('/api/epoch/vouch', auth, vouch);
app.post('/api/epoch/vouch-successful', auth, vouchSuccessful);
app.post('/api/epoch/vouch-unsuccessful', auth, vouchUnsuccessful);
app.post('/api/epoch/user-added', auth, userAdded);
app.post('/api/epoch/user-removed', auth, userRemoved);
app.post('/api/epoch/user-opts-out', auth, userOptsOut);
app.post('/api/epoch/daily-update', auth, dailyUpdate);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
