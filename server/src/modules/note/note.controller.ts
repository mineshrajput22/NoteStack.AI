import { Request, Response } from 'express';
import {
	createNote,
	getUserNotes,
	updateNote,
	deleteNote,
} from './note.service';

export const createNoteController = async (req: Request, res: Response) => {
	try {
		const { title, content, tags } = req.body;

		const userId = req.user._id.toString();

		const note = await createNote(title, content, tags || [], userId);

		res.status(201).json({
			success: true,
			data: note,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error instanceof Error ? error.message : 'Something went wrong',
		});
	}
};

export const getUserNotesController = async (req: Request, res: Response) => {
	try {
		const userId = req.user._id.toString();

		const notes = await getUserNotes(userId);

		res.status(200).json({
			succes: true,
			data: notes,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error instanceof Error ? error.message : 'Something went wrong',
		});
	}
};

export const updateNoteController = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	try {
		const { id } = req.params;
		const userId = req.user._id.toString();

		const note = await updateNote(id, userId, req.body);

		res.status(200).json({
			success: true,
			data: note,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error instanceof Error ? error.message : 'Something went wrong',
		});
	}
};

export const deleteNoteController = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	try {
		const { id } = req.params;
		const userId = req.user._id.toString();

		const note = await deleteNote(id, userId);

		res.status(200).json({
			success: true,
			data: note,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error instanceof Error ? error.message : 'Something went wrong',
		});
	}
};
