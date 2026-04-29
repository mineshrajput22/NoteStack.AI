import { Navigate, useLocation } from 'react-router';

type PublicRouteProps = {
	children: React.ReactNode;
};
const PublicRoute = ({ children }: PublicRouteProps) => {
	const token = localStorage.getItem('token');
	const location = useLocation();

	// if Already logged in then send them back or dashboard
	const from = location.state?.from?.pathname || '/dashboard';

	if (token) {
		return <Navigate to={from} replace />;
	}

	return <>{children}</>;
};

export default PublicRoute;
