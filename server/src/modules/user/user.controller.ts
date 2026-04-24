import { Request, Response } from 'express';
import { getUser } from './user.service';

export const getUserController = async (req: Request, res: Response) => {
	try {
		const userId = req.user._id.toString();

		const user = await getUser(userId);

		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'User not found',
			});
		}

		res.status(200).json({
			success: true,
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error instanceof Error ? error.message : 'Something went wrong',
		});
	}
};
