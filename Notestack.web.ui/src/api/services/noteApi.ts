import type { noteFormData } from '@/schemas/noteSchema';
import axiosInstance from '../axios';

export type EditNoteVariables = {
	id: string;
	data: noteFormData;
};

export const fetchNotesApi = async () => {
	const response = await axiosInstance.get('/notes');
	return response.data.data;
};

export const addNoteApi = async (data: noteFormData) => {
	const response = await axiosInstance.post('/notes', data);
	return response.data;
};

export const editNoteAPi = async ({ id, data }: EditNoteVariables) => {
	const response = await axiosInstance.patch(`/notes/${id}`, data);
	return response.data;
};

export const deleteNoteApi = async (id: string) => {
	const response = await axiosInstance.delete('/notes/' + id);
	return response.data;
};
