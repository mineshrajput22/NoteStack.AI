import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import PasswordInput from '@/components/ui/PasswordInput';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpschema, type SignUpFormData } from '@/schemas/signUpSchema';
import { useNavigate } from 'react-router';
import axiosInstance from '@/api/axios';

const SignUp = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignUpFormData>({ resolver: zodResolver(signUpschema) });

	const onSubmit = async (data: SignUpFormData) => {
		try {
			const { name, email, password } = data;

			const payload = {
				name,
				email,
				password,
			};

			// console.log('Sending:', payload);

			const response = await axiosInstance.post('/auth/signup', payload);

			// console.log('RESPONSE:', response.data);

			if (response.data?.error) {
				return;
			}

			navigate('/login');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<div>
				<div className='w-lg mx-auto mt-20'>
					<Card>
						<CardHeader>
							<CardTitle className='text-3xl'>
								Sign Up<span className='mx-1'>🎯</span>
							</CardTitle>
							<CardDescription className='text-md mt-2'>
								Let's get you started. Add your name, email, and password.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className=' flex flex-col gap-6 text-4xl'>
								<Field>
									<FieldLabel htmlFor='name'>Enter your name:</FieldLabel>
									<Input
										id='name'
										type='text'
										placeholder='John Doe'
										{...register('name')}
									/>
									<FieldDescription className='text-red-500 '>
										{errors.name && <p>{errors.name.message}</p>}
									</FieldDescription>
								</Field>
								<Field>
									<FieldLabel htmlFor='email'>Enter your Email:</FieldLabel>
									<Input
										id='email'
										type='text'
										placeholder='johndoe@gmail.com'
										{...register('email')}
									/>
									<FieldDescription className='text-red-500'>
										{errors.email && <p>{errors.email.message}</p>}
									</FieldDescription>
								</Field>
								<PasswordInput
									fieldName='Enter Password:'
									{...register('password')}
									error={errors.password?.message}
								/>
								<PasswordInput
									fieldName='Confirm Password:'
									{...register('confirmPassword')}
									error={errors.confirmPassword?.message}
								/>
							</div>
						</CardContent>
						<CardFooter>
							<Button
								onClick={handleSubmit(onSubmit)}
								disabled={isSubmitting}
								size='lg'>
								{isSubmitting ? 'Creating..' : 'Create your account'}
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};

export default SignUp;
