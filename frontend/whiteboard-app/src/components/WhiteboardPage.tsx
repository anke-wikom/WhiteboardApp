import React, { useState, ChangeEvent, FormEvent } from "react";
import Note from "../types";
import HeaderComponent from "./HeaderComponent";

const WhiteboardPage = () => {
  const [noteForm, setNoteForm] = useState({
    title: "",
    description: ""
  });

  const [notes, setNotes] = useState<Note[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [lastNoteId, setLastNoteId] = useState(0);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleNoteChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNoteForm({
      ...noteForm,
      [event.target.name]: event.target.value
    });
  };

  const handleNoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newNote: Note = {
      noteId: lastNoteId + 1,
      title: noteForm.title,
      description: noteForm.description
    };
    setNotes([...notes, newNote]);
    setNoteForm({ title: "", description: "" });
    setLastNoteId(lastNoteId + 1);
  };

  const handleAddNoteClick = () => {
    setIsFormOpen(true);
  };

  const handleCancelClick = () => {
    setIsFormOpen(false);
  };

  const handleEditNote = () => {
    // Handle edit note logic
  };

  const handleDeleteNote = () => {
    if (selectedNote) {
      // Handle delete note logic
      const updatedNotes = notes.filter((note) => note.noteId !== selectedNote.noteId);
      setNotes(updatedNotes);
      setSelectedNote(null);
      setShowDeleteDialog(false);
    }
  };

  const handleConfirmDelete = () => {
    handleDeleteNote();
  };

  const handleCancelDelete = () => {
    setSelectedNote(null);
    setShowDeleteDialog(false);
  };

  return (
    <div>
      <HeaderComponent
        handleAddNoteClick={handleAddNoteClick}
        handleEditNote={handleEditNote}
        handleDeleteNote={() => setShowDeleteDialog(true)}
      />
      <div className="body">
        <div className="box">
          <ul>
            {notes.map((note) => (
              <li key={note.noteId}>
                <h3>{note.title}</h3>
                <div>{note.description}</div>
                <button onClick={() => { setSelectedNote(note); setShowDeleteDialog(true); }}>Delete</button>
              </li>
            ))}
          </ul>
          {isFormOpen && (
            <form className="note-form" onSubmit={handleNoteSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={noteForm.title}
                onChange={handleNoteChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                value={noteForm.description}
                onChange={handleNoteChange}
                className="note-form-textarea"
              />
              <div className="button-container">
                <button className="AddNote" type="submit">
                  Add
                </button>
                <button className="Cancel" type="button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            </form>
          )}
          {showDeleteDialog && (
            <div className="dialog-box">
              <p className="dialog-box-message">Are you sure you want to delete this note?</p>
              <div className="dialog-box-buttons">
                <button className="dialog-box-button delete" onClick={handleConfirmDelete}>
                  Delete
                </button>
                <button className="dialog-box-button cancel" onClick={handleCancelDelete}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhiteboardPage;
