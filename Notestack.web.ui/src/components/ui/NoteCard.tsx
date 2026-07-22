import { Pencil, Trash2 } from 'lucide-react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './card';
import { useDeleteNote } from '@/hooks/useDeleteNote';
import { type Note } from '@/schemas/noteSchema';

type NoteCardProps = {
	note: Note;
	onEdit: (note: Note) => void;
};

export const NoteCard = ({ note, onEdit }: NoteCardProps) => {
	const { mutate: deleteNote } = useDeleteNote();

	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl'>{note.title}</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-2'>
					<div className='font-normal indent-9 border-2 border-white/20  rounded-xl p-2 border-dotted min-h-40 '>
						<p className='w-100% h-100%'>{note.content}</p>
					</div>
					<div className='font-medium flex flex-wrap gap-2'>
						{note.tags?.map((tag) => (
							<Button variant='outline'> {`#${tag}`}</Button>
						)) || null}
					</div>
				</CardContent>
				<CardFooter>
					<div className='flex gap-4 justify-end w-full'>
						<Button onClick={() => onEdit(note)}>
							<Pencil />
						</Button>
						<Button
							onClick={() => {
								if (window.confirm('Delete this note?')) {
									deleteNote(note._id);
								}
							}}>
							<Trash2 />
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};
