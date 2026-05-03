import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNoteApi } from '@/api/services/noteApi';

export const useDeleteNote = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteNoteApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['notes'] });
		},
		onError: (err) => {
			console.error('Failed to delete note:', err);
		},
	});
};
