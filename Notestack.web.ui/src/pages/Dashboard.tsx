import { Button } from '@/components/ui/button';
import NoteGrid from '@/components/ui/NoteGrid';
import { SearchBar } from '@/components/ui/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { fetchNotesApi } from '@/api/services/noteApi';
import { NoteModal } from '@/components/ui/NoteModal';
import type { Note } from '@/schemas/noteSchema';

type ModalState =
	| { isOpen: false }
	| { isOpen: true; type: 'add' }
	| { isOpen: true; type: 'edit'; note: Note };

export const Dashboard = () => {
	const [modalState, setModalState] = useState<ModalState>({ isOpen: false });

	// const openCreateModal = () => {
	// 	setModalState({
	// 		isOpen: true,
	// 		type: 'add',
	// 	}); 
	// };

	const openEditMoal = (note: Note) => {
		setModalState({
			isOpen: true,
			type: 'edit',
			note,
		});
	};

	const closeModal = () => {
		setModalState({
			isOpen: false,
		});
	};

	const {
		data: notes,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['notes'],
		queryFn: fetchNotesApi,
		staleTime: 1000 * 60,
	});

	const noteModalProps =
		modalState.isOpen && modalState.type === 'edit' ?
			{
				isOpen: true,
				onClose: closeModal,
				type: 'edit' as const,
				note: modalState.note,
			}
		:	{
				isOpen: modalState.isOpen,
				onClose: closeModal,
				type: 'add' as const,
			};
	// console.log(notes);

	if (error) return <p>Error fetching notes</p>;

	return (
		<>
			<SearchBar />
			<NoteModal {...noteModalProps} />
			<NoteGrid
				data={notes ?? []}
				isLoading={isLoading}
				onEdit={openEditMoal}
			/>

			<div className='fixed right-8 bottom-8 '>
				<Button
					size='lg'
					onClick={() => setModalState({ isOpen: true, type: 'add' })}>
					<Plus />
				</Button>
			</div>
		</>
	);
};
