import React, { useState, ChangeEvent, FormEvent } from "react";
import Note from "../types";

const WhiteboardPage = () => {
  const [noteForm, setNoteForm] = useState({
    title: "",
    description: "",
    noteId: ""
  });

  const [notes, setNotes] = useState<Note[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleNoteChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNoteForm({
      ...noteForm,
      [event.target.name]: event.target.value
    });
  };

  const handleNoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newNote: Note = {
      noteId: noteForm.noteId,
      title: noteForm.title,
      description: noteForm.description
    };
    setNotes([...notes, newNote]);
    setNoteForm({ title: "", description: "", noteId: "" });
  };

  const handleAddNoteClick = () => {
    setIsFormOpen(true);
  };

  const handleCancelClick = () => {
    setIsFormOpen(false);
  };

  return (
    
    <>
      <h1>Whiteboard</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <h3>{note.title}</h3>
            <div>{note.description}</div>
          </li>
        ))}
      </ul>
      {!isFormOpen ? (
        <button className="add-note-button" onClick={handleAddNoteClick}>
          + Add Note
        </button>
      ) : (
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
            style={{ width: "100%", height: "150px", resize: "vertical" }}
          />
          <input
            type="text"
            name="noteId"
            placeholder="Note ID"
            value={noteForm.noteId}
            onChange={handleNoteChange}
            style={{ display: "none" }}
          />
          <button className="AddNote" type="submit">Add</button> 
          <button  className="Cancel" type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </form>
        
      )}
    </>
  );
};

export default WhiteboardPage;
