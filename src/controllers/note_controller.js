import Note from '../models/note_model';

export async function createNote(NoteFields) {
  const newNote = new Note();
  console.log(NoteFields);
  newNote.title = NoteFields.title;
  newNote.tags = NoteFields.tags;
  newNote.content = NoteFields.content;
  newNote.coverUrl = NoteFields.coverUrl;
  // await creating a Note
  // return Note
  try {
    const savedNote = await newNote.save();
    return savedNote;
  } catch (error) {
    console.log(error);
    throw new Error(`create Note error: ${error}`);
  }
}
export async function getNotes() {
  // await finding Notes
  try {
    const Notes = await Note.find();
    console.log(Notes);
    return Notes;
  } catch (error) {
    throw new Error(`get Notes error: ${error}`);
  }

  // return Notes
}
export async function getNote(id) {
  try {
    const Note = await Note.findById(id);
    return Note;
  } catch (error) {
    throw new Error(`get Note error: ${error}`);
  }
}
export async function deleteNote(id) {
  try {
    const Note = await Note.findByIdAndDelete(id);
    return Note;
  } catch (error) {
    throw new Error(`get Note error: ${error}`);
  }
}
export async function updateNote(id, NoteFields) {
  try {
    await Note.findByIdAndUpdate(id, NoteFields);
    const Note = await Note.findById(id);
    return Note;
  } catch (error) {
    throw new Error(`get Note error: ${error}`);
  }
}
