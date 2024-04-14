import { Router } from 'express';
import * as Notes from './controllers/note_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

/// your routes will go here

// create a Note

const handleNoteCreate = async (req, res) => {
  const NoteFields = req.body;
  try {
    // use req.body etc to await some contoller function
    const result = await Notes.createNote(NoteFields);
    // send back the result
    res.json(result);
  } catch (error) {
    // or catch the error and send back an error
    res.status(500).json({ error });
  }
};

const handleGetAllNote = async (req, res) => {
  try {
    // use req.body etc to await some contoller function

    const result = await Notes.getNotes();

    // send back the result
    res.json(result);
  } catch (error) {
    // or catch the error and send back an error
    res.status(404).json({ error });
  }
};

const handlePut = async (req, res) => {
  const { id } = req.params;
  const NoteFields = req.body;
  try {
    // use req.body etc to await some contoller function
    const result = await Notes.updateNote(id, NoteFields);
    // send back the result
    res.json(result);
  } catch (error) {
    // or catch the error and send back an error
    res.status(500).json({ error });
  }
};

const handleNoteGet = async (req, res) => {
  const { id } = req.params;
  try {
    // use req.body etc to await some contoller function
    const result = await Notes.getNote(id);
    // send back the result
    res.json(result);
  } catch (error) {
    // or catch the error and send back an error
    res.status(404).json({ error });
  }
};

const handleDelete = async (req, res) => {
  const { id } = req.params;
  try {
    // use req.body etc to await some contoller function
    const result = await Notes.deleteNote(id);
    // send back the result
    if (result == null) {
      res.status(404).json(null);
    } else {
      res.json(result);
    }
  } catch (error) {
    // or catch the error and send back an error
    res.status(401).json({ error });
  }
};

router.route('/notes/all')
  .get(handleGetAllNote);

router.route('/notes/new')
  .post(handleNoteCreate);

router.route('/notes/:id')
  .put(handlePut)
  .get(handleNoteGet)
  .delete(handleDelete);

export default router;
