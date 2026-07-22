import { useState, useEffect, useMemo, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { getCurrentUser } from '@/api/services/auth.service';
import type { UserDetials } from './AuthContext';

type Props = {
	children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<UserDetials | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const initializeAuth = async () => {
			const token = localStorage.getItem('token');

			if (!token) {
				setIsLoading(false);
				return;
			}

			try {
				const currentUser = await getCurrentUser();
				setUser(currentUser);
			} catch (error) {
				localStorage.removeItem('token');
				setUser(null);
			} finally {
				setIsLoading(false);
			}
		};

		initializeAuth();
	}, []);

	const Login = (token: string, user: UserDetials) => {
		localStorage.setItem('token', token);
		setUser(user);
	};

	const Logout = () =>{
		localStorage.removeItem('token');
		setUser(null)
	}

	const value = useMemo(()=>({
		user,
		isAuthenticated: !!user,
		isLoading,
		Login,
		Logout
	}),[user, isLoading])

	return(
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
};

