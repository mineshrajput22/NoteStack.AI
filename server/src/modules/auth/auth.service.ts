import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../user/user.model';

interface AuthResponse {
	user: {
		id: string;
		name: string;
		email: string;
	};
	token: string;
}

const generateToken = (userId: string): string => {
	return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, {
		expiresIn: '7d',
	});
};

export const registerUser = async (
	name: string,
	email: string,
	password: string,
): Promise<AuthResponse> => {
	const existingUser = await User.findOne({ email });

	if (existingUser) {
		throw new Error('User already exits');
	}
	const hashedPassword = await bcrypt.hash(password, 10);

	const user: IUser = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	const token = generateToken(user._id.toString());

	return {
		user: {
			id: user._id.toString(),
			name: user.name,
			email: user.email,
		},
		token,
	};
};

export const loginUser = async (
	email: string,
	password: string,
): Promise<AuthResponse> => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error('Invalid credentials');
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error('Invalid credentials');
	}

	const token = generateToken(user._id.toString());

	return {
		user: {
			id: user._id.toString(),
			name: user.name,
			email: user.email,
		},
		token,
	};
};
