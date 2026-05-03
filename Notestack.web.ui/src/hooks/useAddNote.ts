import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNoteApi } from '@/api/services/noteApi';

type UseAddNoteOptions = {
	onSuccess?: () => void;
	onError?: (error: unknown) => void;
};

export const useAddNote = (options?: UseAddNoteOptions) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: addNoteApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['notes'] });

			options?.onSuccess?.();
		},

		onError: (error) => {
			options?.onError?.(error);
		},
	});
};
