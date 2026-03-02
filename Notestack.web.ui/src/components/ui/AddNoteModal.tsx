import { Plus } from 'lucide-react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './card';
import { Field, FieldLabel } from './field';
import { Input } from './input';
import { Textarea } from './textarea';

export const AddNoteModal = () => {
	return (
		<div className='fixed inset-0 flex items-center justify-center '>
			<div className='absolute inset-0 -z-10 bg-black/10 backdrop-blur-sm' />
			<Card className='w-full max-w-lg m-10'>
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
						<FieldLabel htmlFor='addNote-textarea'>Description:</FieldLabel>
						<Textarea id='addNote' placeholder='Add Description ' />
					</Field>
					<Field className='w-[40%]'>
						<FieldLabel htmlFor='noteTag'>Tag:</FieldLabel>
						<div className=' flex items-center justify-center'>
							<Input id='noteTag' type='text' placeholder='#gym'></Input>
							<Button className=' right-3 mx-2'>
								<Plus size={26} />
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
