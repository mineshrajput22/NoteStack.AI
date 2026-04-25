import express, { Application, Request, Response } from 'express';
import authRoutes from './modules/auth/auth.route';
import noteRoutes from './modules/note/note.route';
import userRoutes from './modules/user/user.route';
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

app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);

app.use('/me', userRoutes);

export default app;
