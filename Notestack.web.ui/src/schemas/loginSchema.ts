import * as z from 'zod';

export const loginSchema = z.object({
	email: z.email({
		message: 'Please enter valid email address',
	}),
	password: z
		.string()
		.min(8, { message: 'Password must have minimum 8 character' }),
});

//Type for Login Schema
export type LoginFormData = z.infer<typeof loginSchema>;
