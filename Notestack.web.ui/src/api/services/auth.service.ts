import axiosInstance from '../axios';

export const getCurrentUser = async () => {
	const { data } = await axiosInstance.get('/me');

	return data.data;
};
