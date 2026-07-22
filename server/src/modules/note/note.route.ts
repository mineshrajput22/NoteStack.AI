import { Router } from 'express';
import {
	createNoteController,
	getUserNotesController,
	updateNoteController,
	deleteNoteController,
} from './note.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';
import { validate } from '../../middlewares/validate.middleware';
import { createNoteSchema, updateNoteSchema } from './note.validation';

const router = Router();

// Create Note
router.post(
	'/',
	authMiddleware,
	validate(createNoteSchema),
	createNoteController,
);

// Get all notes of the logged user
router.get('/', authMiddleware, getUserNotesController);

// update note
router.patch(
	'/:id',
	authMiddleware,
	validate(updateNoteSchema),
	updateNoteController,
);

// Delete note
router.delete('/:id', authMiddleware, deleteNoteController);

export default router;
