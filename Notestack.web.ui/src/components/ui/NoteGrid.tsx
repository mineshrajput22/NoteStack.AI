import { Loader2 } from 'lucide-react';
import { NoteCard } from './NoteCard';

export type Note = {
	_id: string;
	title: string;
	content: string;
	tags?: string[];
	isPinned: boolean;
	createdAt: string;
	updatedAt: string;
	user: string;
};

type NoteGridProp = {
	data: Note[];
	isLoading: boolean;
};

const NoteGrid = ({ data, isLoading }: NoteGridProp) => {
	if (data.length === 0)
		return (
			<div className='text-center mt-20 text-gray-400'>
				No notes yet. Create your first one!
			</div>
		);

	return (
		<div className='w-[80%] mx-auto mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 '>
			{isLoading ?
				<Loader2 className='mr-2 h-4 w-4 animate-spin' />
			:	data.map((note) => <NoteCard key={note._id} note={note} />)}
		</div>
	);
};

export default NoteGrid;
