import { createContext } from 'react';

export type UserDetials = {
	id: string;
	name: string;
	email: string;
};

export type AuthContextType = {
	user: UserDetials | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	Login: (token: string, user: UserDetials) => void;
	Logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
