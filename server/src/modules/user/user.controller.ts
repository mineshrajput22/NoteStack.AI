import { Request, Response } from 'express';
import { getUser } from './user.service';
import { success } from 'zod';

export const getUserController = async (req: Request, res: Response) => {
	try {
		return res.status(200).json({
			success: true,
			data: req.user,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error instanceof Error ? error.message : 'Something went wrong',
		});
	}
};
