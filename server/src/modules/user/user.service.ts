import User, { IUser } from './user.model';
import mongoose from 'mongoose';

export const getUser = async (userId: string): Promise<IUser | null> => {
	if (!mongoose.Types.ObjectId.isValid(userId)) {
		throw new Error('Invalid user ID');
	}

	const user = await User.findById(userId).select('-password');

	return user;
};
