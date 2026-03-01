import { AddNoteModal } from '@/components/ui/AddNoteModal';
import NoteGrid from '@/components/ui/NoteGrid';

export const Dashboard = () => {
	return (
		<>
			<AddNoteModal />
			<NoteGrid />
		</>
	);
};
