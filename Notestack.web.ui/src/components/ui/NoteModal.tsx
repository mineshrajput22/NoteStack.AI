import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './card';
import { Field, FieldLabel } from './field';
import { Input } from './input';
import { Textarea } from './textarea';
import { Controller, useForm } from 'react-hook-form';
import { type noteFormData, noteSchema } from '@/schemas/noteSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddNote } from '@/hooks/useAddNote';
import TagInput from './TagInput';
import { useEffect } from 'react';

type NoteModalProps = {
	isOpen: boolean; // controls modal visibility from parent
	onClose: () => void; // callback to close the modal
	type: 'add' | 'edit';
	initialData?: noteFormData;
};

export const NoteModal = ({
	isOpen,
	onClose,
	type,
	initialData,
}: NoteModalProps) => {
	// initialize form with Zod validation and empty tags as default
	const {
		register, // connects inputs to RHF
		handleSubmit, // wraps submit with validation
		control, // needed for controlled components (e.g. TagInput)
		reset, // resets form fields to defaultValues
		formState: { errors }, // holds field-level validation errors
	} = useForm<noteFormData>({
		resolver: zodResolver(noteSchema),
		defaultValues: initialData ?? {
			title: '',
			content: '',
			tags: [],
		},
	});

	useEffect(() => {
		if (initialData) {
			reset(initialData);
		}
	}, [initialData, reset]);

	// mutation hook — calls the API to add a note
	const { mutate: addNote, isPending } = useAddNote({
		onSuccess: () => {
			reset(); // clear form after successful submission
			onClose(); // close modal
		},
		onError: (err) => {
			console.error('Failed to add note:', err);
		},
	});

	// don't render anything if modal is closed
	if (!isOpen) return null;

	return (
		// full-screen overlay container
		<div className='fixed inset-0 flex items-center justify-center'>
			{/* semi-transparent blurred backdrop */}
			<div className='absolute inset-0 -z-10 bg-black/10 backdrop-blur-sm' />

			<Card className='w-full max-w-lg m-10'>
				<CardHeader>
					<CardTitle className='text-3xl'>
						Add Note<span className='mx-1'>➕</span>
					</CardTitle>
				</CardHeader>

				<CardContent className='flex flex-col gap-6'>
					{/* Title field */}
					<Field>
						<FieldLabel htmlFor='noteTitle'>Title:</FieldLabel>
						<Input
							id='noteTitle'
							type='text'
							placeholder='Go to gym at 5'
							{...register('title')} // registers input with RHF
						/>
						{errors.title && <p>{errors.title?.message}</p>}
					</Field>

					{/* Description / content field */}
					<Field>
						<FieldLabel htmlFor='addNote-textarea'>Description:</FieldLabel>
						<Textarea
							id='addNote'
							placeholder='Add Description'
							{...register('content')}
						/>
						{errors.content && <p>{errors.content.message}</p>}
					</Field>

					{/* Tags field — uses Controller since TagInput is a custom controlled component */}
					<Field>
						<Controller
							control={control}
							name='tags'
							render={({ field }) => (
								// passes RHF's value and onChange into TagInput
								<TagInput value={field.value ?? []} onChange={field.onChange} />
							)}
						/>
					</Field>
				</CardContent>

				<CardFooter className='gap-3'>
					{/* Submit button — triggers validation then fires the mutation */}
					<Button
						onClick={handleSubmit((data) => addNote(data))}
						disabled={isPending}>
						{isPending ? 'Adding...' : 'Add'}
					</Button>

					{/* Cancel button — resets form and closes modal without saving */}
					<Button
						onClick={() => {
							reset();
							onClose();
						}}>
						Cancel
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};
