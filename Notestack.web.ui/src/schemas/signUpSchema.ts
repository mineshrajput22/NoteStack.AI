import * as z from 'zod';

export const signUpschema = z
	.object({
		userName: z.string().min(1, { message: 'Username is required!' }),
		email: z
			.email({ message: 'Please enter valid email address' })
			.min(1, { message: 'Email is required!' }),
		password: z
			.string()
			.min(1, { message: 'Password is required!' })
			.min(8, { message: 'Password must have minimum 8 characters.' }),
		confirmPassword: z
			.string()
			.min(1, { message: 'Password is required!' })
			.min(8, { message: 'Password must have minimum 8 characters' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});
