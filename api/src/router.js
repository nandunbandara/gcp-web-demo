import {Router} from 'express';
import * as NoteController from './controllers/note.controller.js';

// eslint-disable-next-line new-cap
const router = Router();

router.get('/notes', NoteController.readAllNotes);
router.post('/notes', NoteController.createNote);

export default router;
