import { AddNoteModal } from '@/components/ui/AddNoteModal';
import { Button } from '@/components/ui/button';
import NoteGrid from '@/components/ui/NoteGrid';
import { SearchBar } from '@/components/ui/SearchBar';
import { Plus } from 'lucide-react';

export const Dashboard = () => {
	return (
		<>
			<SearchBar />
			{/* <AddNoteModal /> */}
			<NoteGrid />
			<div className='fixed right-8 bottom-8 '>
				<Button size='lg'>
					<Plus />
				</Button>
			</div>
		</>
	);
};
