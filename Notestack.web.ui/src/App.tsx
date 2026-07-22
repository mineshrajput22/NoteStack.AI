import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { Routes, Route } from 'react-router';
import SignUp from './pages/SignUp';
import AppLayout from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import ProtectedRoute from './components/layout/ProtectedRoute';
import PublicRoute from './components/layout/PublicRoute';
import { useAuth } from './Context/useAuth';
import { LoadingScreen } from './pages/LoadingScreen';

function App() {
	const { isLoading } = useAuth();

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' element={<LandingPage />} />
				<Route
					path='/signup'
					element={
						<PublicRoute>
							<SignUp />
						</PublicRoute>
					}
				/>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path='/dashboard'
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
