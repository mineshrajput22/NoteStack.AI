import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './Context/AuthProvider.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<StrictMode>
			<BrowserRouter>
				<AuthProvider>
					<App />
				</AuthProvider>
			</BrowserRouter>
		</StrictMode>
	</QueryClientProvider>,
);
