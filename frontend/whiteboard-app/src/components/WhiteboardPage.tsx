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
    
  };

  const handleDeleteNote = () => {
   
  };

  return (
    <div>
      <HeaderComponent
        handleAddNoteClick={handleAddNoteClick}
        handleEditNote={handleEditNote}
        handleDeleteNote={handleDeleteNote}
      />
      <div className="body">
        <div className="box">
          <ul>
            {notes.map((note) => (
              <li key={note.noteId}>
                <h3>{note.title}</h3>
                <div>{note.description}</div>
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
        </div>
      </div>
    </div>
  );
};

export default WhiteboardPage;
