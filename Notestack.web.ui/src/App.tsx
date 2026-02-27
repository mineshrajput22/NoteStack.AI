import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { Routes, Route } from 'react-router';
import SignUp from './pages/Signup';

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
}

export default App;
