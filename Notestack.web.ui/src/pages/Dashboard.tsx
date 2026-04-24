import { AddNoteModal } from '@/components/ui/AddNoteModal';
import { Button } from '@/components/ui/button';
import NoteGrid from '@/components/ui/NoteGrid';
import { SearchBar } from '@/components/ui/SearchBar';
import { Plus } from 'lucide-react';
import { useState } from 'react';



export const Dashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<SearchBar />
			<AddNoteModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
			<NoteGrid />
			<div className='fixed right-8 bottom-8 '>
				<Button size='lg' onClick={() => setIsModalOpen(true)}>
					<Plus />
				</Button>
			</div>
		</>
	);
};
