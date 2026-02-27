import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router';

const LandingPage = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='w-lg mx-auto mt-40 '>
				<Card className='p-5 flex flex-col gap-10'>
					<h1 className=' border-b pb-2 text-3xl font-bold tracking-tight'>
						Landing Page coming soon...
					</h1>

					<Button onClick={() => navigate('/signup')}>
						Navigate to Sign-up Page
					</Button>
					<Button onClick={() => navigate('/login')}>
						Navigate to Login Page
					</Button>
				</Card>
			</div>
		</>
	);
};

export default LandingPage;
