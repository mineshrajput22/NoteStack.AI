import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editNoteAPi } from '@/api/services/noteApi';

type UseEditNoteOptions = {
	onSuccess?: () => void;
	onError?: (error: unknown) => void;
};

export const useEditNote = (options?: UseEditNoteOptions) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: editNoteAPi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['notes'] });

			options?.onSuccess?.();
		},

		onError: (error) => {
			options?.onError?.(error);
		},
	});
};
