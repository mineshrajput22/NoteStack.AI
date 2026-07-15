import { Button } from '@/components/ui/button';
import NoteGrid from '@/components/ui/NoteGrid';
import { SearchBar } from '@/components/ui/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { fetchNotesApi } from '@/api/services/noteApi';
import { NoteModal } from '@/components/ui/noteModal';

export const Dashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {
		data: notes,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['notes'],
		queryFn: fetchNotesApi,
		staleTime: 1000 * 60,
	});

	// console.log(notes);

	if (error) return <p>Error fetching notes</p>;

	return (
		<>
			<SearchBar />
			<NoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			<NoteGrid data={notes ?? []} isLoading={isLoading} />

			<div className='fixed right-8 bottom-8 '>
				<Button size='lg' onClick={() => setIsModalOpen(true)}>
					<Plus />
				</Button>
			</div>
		</>
	);
};
