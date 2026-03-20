import { z } from 'zod';



export const registerSchema = z.object({
	name: z.string().min(2, 'Name must be atleast 2 characters'),
	email: z.email({ message: 'Please Enter valid email address' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters' }),
});

export const loginSchema = z.object({
	email: z.email({ message: 'Please Enter valid email address' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters' }),
});
