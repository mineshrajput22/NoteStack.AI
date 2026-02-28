import { Plus } from 'lucide-react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './card';
import { Field, FieldLabel } from './field';
import { Input } from './input';
import { Textarea } from './textarea';

export const AddNoteModal = () => {
	return (
		<div className='backdrop-blur-sm flex items-center justify-center'>
			<Card className='z-50 mx-auto w-[50%] max-w-lg mt-45'>
				<CardHeader>
					<CardTitle className='text-3xl'>
						Add Note<span className='mx-1'>➕</span>
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-6'>
					<Field>
						<FieldLabel htmlFor='noteTitle'>Title:</FieldLabel>
						<Input
							id='noteTitle'
							type='text'
							placeholder='Go to gym at 5'></Input>
					</Field>
					<Field>
						<FieldLabel htmlFor='addNote-textarea'>Title:</FieldLabel>
						<Textarea id='addNote' placeholder='Add Description ' />
					</Field>
					<Field className='w-[40%]'>
						<FieldLabel htmlFor='noteTag'>Tag:</FieldLabel>
						<div className='relative flex items-center justify-center'>
							<Input id='noteTag' type='text' placeholder='#gym'></Input>
							<Button className='adsolute right-3 mx-2'>
								<Plus size={30} />
							</Button>
						</div>
					</Field>
				</CardContent>
				<CardFooter>
					<Button>Add</Button>
				</CardFooter>
			</Card>
		</div>
	);
};
