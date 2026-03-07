import { Router } from 'express';
import {
	createNoteController,
	getUserNotesController,
	updateNoteController,
	deleteNoteController,
} from './note.controller';

import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

// Create Note
router.post('/', authMiddleware, createNoteController);

// Get all notes of the logged user
router.get('/', authMiddleware, getUserNotesController);

// update note
router.put('/:id', authMiddleware, updateNoteController);

// Delete note
router.delete('/:id', authMiddleware, deleteNoteController);

export default router;
