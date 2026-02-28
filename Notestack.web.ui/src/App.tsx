import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { Routes, Route } from 'react-router';
import SignUp from './pages/SignUp';
import AppLayout from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';

function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' element={<LandingPage />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>
		</Routes>
	);
}

export default App;
