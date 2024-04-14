import mongoose, { Schema } from 'mongoose';

// create a NoteSchema with a title field
const NoteSchema = new Schema({
  title: String,
  content: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// create NoteModel class from schema
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
