import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import PasswordInput from '@/components/ui/PasswordInput';

const SignUp = () => {
	return (
		<>
			<div>
				<div className='w-lg mx-auto mt-40'>
					<Card>
						<CardHeader>
							<CardTitle className='text-3xl'>
								Sign Up<span className='mx-1'>🎯</span>
							</CardTitle>
							<CardDescription className='text-md mt-2'>
								Let’s get you started. Add your name, email, and password.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className=' flex flex-col gap-6 text-4xl'>
								<Field>
									<FieldLabel htmlFor='name'>Enter your name:</FieldLabel>
									<Input id='name' type='text' placeholder='John Doe'></Input>
								</Field>
								<Field>
									<FieldLabel htmlFor='email'>Enter your Email:</FieldLabel>
									<Input
										id='email'
										type='text'
										placeholder='johndoe@gmail.com'></Input>
								</Field>
								<PasswordInput fieldName='Enter Password:' value={''} />
								<PasswordInput fieldName='Confirm Password:' value={''} />
							</div>
							<CardFooter className='px-0 '>
								<Button className='w-[40%] my-5' size='lg'>
									Create your account
								</Button>
							</CardFooter>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default SignUp;
