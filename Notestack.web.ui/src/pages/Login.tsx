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
import { loginSchema, type LoginFormData } from '@/schemas/loginSchema';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import axiosInstance from '@/api/axios';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

	const onSubmit = async (data: LoginFormData) => {
		try {
			const response = await axiosInstance.post('/auth/login', data);

			if (response.data?.data?.error) {
				return;
			}

			const token = response.data?.data?.token;

			if (token) {
				localStorage.setItem('token', token);
				navigate('/dashboard', { replace: true });
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<div>
				<div className='w-lg mx-auto mt-40'>
					<Card>
						<CardHeader>
							<CardTitle className='text-3xl'>
								Login<span className='mx-1'>🎯</span>
							</CardTitle>
							<CardDescription className='text-md mt-2'>
								Enter your Regiestered EmailId and Password
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className=' flex flex-col gap-6 text-4xl'>
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
							</div>
						</CardContent>
						<CardFooter>
							<Button
								onClick={handleSubmit(onSubmit)}
								disabled={isSubmitting}
								size='lg'>
								{isSubmitting ? 'Loging In..' : 'Submit'}
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Login;
