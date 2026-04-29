import { Navigate, useLocation } from 'react-router';

type ProtectedRouteProps = {
	children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const token = localStorage.getItem('token');

	const location = useLocation();

	//No token found then navigate to login page
	if (!token) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	//when token found  allow access
	return <>{children}</>;
};

export default ProtectedRoute;
