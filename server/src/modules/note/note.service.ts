import Note, { INote } from './note.model';
import mongoose from 'mongoose';

export const createNote = async (
	title: string,
	content: string,
	tags: string[],
	userId: string,
): Promise<INote> => {
	const note = await Note.create({
		title,
		content,
		tags,
		user: new mongoose.Types.ObjectId(userId),
	});

	return note;
};

export const getUserNotes = async (userId: string): Promise<INote[]> => {
	const notes = await Note.find({
		user: new mongoose.Types.ObjectId(userId),
	}).sort({ createdAt: -1 });

	return notes;
};

export const updateNote = async (
	noteId: string,
	userId: string,
	data: Partial<INote>,
): Promise<INote | null> => {
	const updatedNote = await Note.findOneAndUpdate(
		{
			_id: noteId,
			user: userId,
		},
		data,
		{ new: true },
	);
	return updatedNote;
};

export const deleteNote = async (
	noteId: string,
	userId: string,
): Promise<INote | null> => {
	const deleteNote = await Note.findOneAndDelete({
		_id: noteId,
		user: userId,
	});

	return deleteNote;
};
