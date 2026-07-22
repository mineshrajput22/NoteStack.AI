import { Button } from './button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './card';
import { Field, FieldLabel } from './field';
import { Input } from './input';
import { Textarea } from './textarea';
import { Controller, useForm } from 'react-hook-form';
import { type noteFormData, type Note, noteSchema } from '@/schemas/noteSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddNote } from '@/hooks/useAddNote';
import { useEditNote } from '@/hooks/useEditNote';
import TagInput from './TagInput';
import { useEffect } from 'react';

type BaseModalProps = {
	isOpen: boolean; // controls modal visibility from parent
	onClose: () => void; // callback to close the modal
};

type AddModalProps = {
	type: 'add';
	note?: noteFormData;
};

type EditModalProps = {
	type: 'edit';
	note: Note;
};

type NoteModalProps = BaseModalProps & (AddModalProps | EditModalProps);

export const NoteModal = ({ isOpen, onClose, type, note }: NoteModalProps) => {
	// initialize form with Zod validation and empty tags as default
	const {
		register, // connects inputs to RHF
		handleSubmit, // wraps submit with validation
		control, // needed for controlled components (e.g. TagInput)
		reset, // resets form fields to defaultValues
		formState: { errors }, // holds field-level validation errors
	} = useForm<noteFormData>({
		resolver: zodResolver(noteSchema),
		defaultValues: {
			title: '',
			content: '',
			tags: [],
		},
	});

	useEffect(() => {
		if (!isOpen) return;

		if (type === 'edit' && note) {
			reset({
				title: note.title,
				content: note.content,
				tags: note.tags,
			});
		} else {
			reset({
				title: '',
				content: '',
				tags: [],
			});
		}
	}, [type, note, isOpen, reset]);

	// mutation hook — calls the API to add a note
	const { mutate: addNote, isPending: isAdding } = useAddNote({
		onSuccess: () => {
			reset(); // clear form after successful submission
			onClose(); // close modal
		},
		onError: (err) => {
			console.error('Failed to add note:', err);
		},
	});

	const { mutate: updateNote, isPending: isUpdating } = useEditNote({
		onSuccess: () => {
			reset();
			onClose();
		},
		onError: (err) => {
			console.error('Failed to Edit the note:', err);
		},
	});

	const isPending = isAdding || isUpdating;

	const onSubmit = (data: noteFormData) => {
		if (type === 'add') {
			addNote(data);
		} else {
			updateNote({
				id: note._id,
				data,
			});
		}
	};

	// don't render anything if modal is closed
	if (!isOpen) return null;

	return (
		// full-screen overlay container
		<div className='fixed inset-0 flex items-center justify-center'>
			{/* semi-transparent blurred backdrop */}
			<div className='absolute inset-0 -z-10 bg-black/10 backdrop-blur-sm' />

			<Card className='w-full max-w-lg m-10'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CardHeader>
						<CardTitle className='text-3xl'>
							{type === 'add' ? 'Add Note ➕' : 'Edit note ✏️'}
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
									<TagInput
										value={field.value ?? []}
										onChange={field.onChange}
									/>
								)}
							/>
						</Field>
					</CardContent>

					<CardFooter className='gap-3 pt-5'>
						{/* Submit button — triggers validation then fires the mutation */}
						<Button type='submit' disabled={isPending}>
							{isPending ?
								type === 'add' ?
									'Adding...'
								:	'Saving...'
							: type === 'add' ?
								'Add'
							:	'Save'}
						</Button>

						{/* Cancel button — resets form and closes modal without saving */}
						<Button
							type='button'
							onClick={() => {
								reset();
								onClose();
							}}>
							Cancel
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
};
