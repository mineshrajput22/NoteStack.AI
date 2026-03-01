import { NoteCard } from './NoteCard';

const NoteGrid = () => {
	return (
		<div className='w-[80%] mx-auto mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 '>
			<NoteCard />
			<NoteCard />
			<NoteCard />
		</div>
	);
};

export default NoteGrid;
