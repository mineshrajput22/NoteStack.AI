import { Loader2 } from 'lucide-react';
import { NoteCard } from './NoteCard';
import { type Note } from '@/schemas/noteSchema';

type NoteGridProp = {
	data: Note[];
	isLoading: boolean;
	onEdit: (note: Note) => void;
};

const NoteGrid = ({ data, isLoading, onEdit }: NoteGridProp) => {
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
			:	data.map((note) => (
					<NoteCard key={note._id} note={note} onEdit={() => onEdit(note)} />
				))
			}
		</div>
	);
};

export default NoteGrid;
