import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Server is running on port: ${PORT}`);
		});
	} catch (error) {}
};

startServer();
