import { Outlet } from 'react-router';
import Navbar from '../ui/Navbar';

const AppLayout = () => {
	return (
		<>
			<div>
				<nav>
					<Navbar />
				</nav>
				<main>
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default AppLayout;
