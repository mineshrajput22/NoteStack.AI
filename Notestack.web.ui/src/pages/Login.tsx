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

const Login = () => {
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
										placeholder='johndoe@gmail.com'></Input>
								</Field>
								<PasswordInput fieldName='Enter Password:' value={''} />
							</div>
							<CardFooter className='px-0'>
								<Button className='w-[30%] my-5' size='lg'>
									Submit
								</Button>
							</CardFooter>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Login;
