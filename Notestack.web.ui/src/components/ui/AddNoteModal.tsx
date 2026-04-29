import { Plus } from 'lucide-react';
import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './card';
import { Field, FieldLabel } from './field';
import { Input } from './input';
import { Textarea } from './textarea';
import { useForm } from 'react-hook-form';
import { type noteFormData, noteSchema } from '@/schemas/noteSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axiosInstance from '@/api/axios';
import { useState } from 'react';

type AddNoteModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const AddNoteModal = ({ isOpen, onClose }: AddNoteModalProps) => {
	const [tagInput, setTagInput] = useState('');
	const [tags, setTags] = useState<string[]>([]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<noteFormData>({ resolver: zodResolver(noteSchema) });

	if (!isOpen) return null;

	const addNote = async (data: noteFormData) => {
		try {
			const { title, content, tags } = data;

			const payload = {
				title,
				content,
				tags,
			};

			const response = await axiosInstance.post('/notes', payload);

			console.log('RESPONSE:', response.data);

			//Clear form
			reset();
			//Close the modal
			onClose();
		} catch (err) {
			console.error(err);
		}
	};

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
							placeholder='Go to gym at 5'
							{...register('title')}></Input>
						{errors.title && <p>{errors.title?.message} </p>}
					</Field>
					<Field>
						<FieldLabel htmlFor='addNote-textarea'>Description:</FieldLabel>
						<Textarea
							id='addNote'
							placeholder='Add Description '
							{...register('content')}
						/>
						{errors.content && <p>{errors.content.message}</p>}
					</Field>
					<Field className='w-[40%]'>
						<FieldLabel htmlFor='noteTag'>Tag:</FieldLabel>
						<div className=' flex items-center justify-center'>
							<Input
								id='noteTag'
								type='text'
								placeholder='#gym'
								onChange={(e) => setTagInput(e.target.value)}
							/>

							<Button className=' right-3 mx-2'>
								<Plus size={26} />
							</Button>
						</div>
					</Field>
				</CardContent>
				<CardFooter className='gap-3'>
					<Button onClick={handleSubmit(addNote)}>Add</Button>
					<Button onClick={onClose}>Cancel</Button>
				</CardFooter>
			</Card>
		</div>
	);
};
