import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../modules/user/user.model';

interface JwtPayload {
	id: string;
}

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith('Bearer')) {
			return res.status(401).json({
				success: false,
				message: 'No Token Provided',
			});
		}

		const token = authHeader.split(' ')[1];

		const decoded = jwt.verify(
			token,
			process.env.JWT_SECRET as string,
		) as JwtPayload;

		const user = await User.findById(decoded.id).select('-password');

		if (!user) {
			return res.status(401).json({
				success: true,
				message: 'User not Found',
			});
		}

		req.user = user;

		next();
	} catch (error) {
		return res.status(401).json({
			success: true,
			message: 'Invalid token',
		});
	}
};
