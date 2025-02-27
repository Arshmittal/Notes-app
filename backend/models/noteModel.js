const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  content: String,
  isImportant: { type: Boolean, default: false },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", notesSchema); // Ensure proper export
module.exports = Note;
