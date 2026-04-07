import * as z from 'zod';

export const signUpschema = z
	.object({
		name: z.string().min(2, {
			message:
				'Username is required and it should contain atleast 2 characters.',
		}),
		email: z.email({
			message: 'Please enter valid email address',
		}),
		password: z
			.string()
			.min(8, { message: 'Password must have minimum 8 characters.' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'Password must have minimum 8 characters' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

//Type for SignUp schema
export type SignUpFormData = z.infer<typeof signUpschema>;
