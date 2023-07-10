import React from "react";
import Note from '../types';

type Props = {
  notes: Note[],
  onAddNote: (note: Note) => void,
  onDeleteNote: (note: Note) => void,
  isFormOpen: boolean,
  onCancelClick: () => void,
}

const WhiteboardComponent = ({ notes, onAddNote, isFormOpen, onCancelClick }: Props) => {
  const [noteForm, setNoteForm] = React.useState({ title: '', description: '' });

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNoteForm((prevNoteForm) => ({
      ...prevNoteForm,
      [name]: value,
    }));
  };

  const handleNoteSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newNote: Note = {
      noteId: notes.length + 1,
      title: noteForm.title,
      description: noteForm.description
    };
    onAddNote(newNote);
    setNoteForm({ title: '', description: '' });
  };

  const handleCancelClick = () => {
    onCancelClick();
    setNoteForm({ title: '', description: '' });
  };

  return (
    <div className="box">
      <ul>
        {notes.map((note) => (
          <li key={note.noteId}>
            <h3>{note.title}</h3>
            <div>{note.description}</div>
          </li>
        ))}
      </ul>

      <div className="notizbox">
        {isFormOpen ? (
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
                Hinzufügen
              </button>
              <button className="Cancel" type="button" onClick={handleCancelClick}>
                Abbrechen
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}

export default WhiteboardComponent;
