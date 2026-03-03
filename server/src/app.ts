import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
	res.status(200).json({
		succes: true,
		message: 'Server is healthy',
	});
});

export default app;