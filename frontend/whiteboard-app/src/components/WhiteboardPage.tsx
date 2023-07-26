import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import Note from "../types";
import HeaderComponent from "./HeaderComponent";
import WhiteboardComponent from "./WhiteboardComponent";


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

  // Ajouter les états pour le déplacement du formulaire
  const [isFormDragging, setIsFormDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

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
    // La logique pour éditer une note peut être ajoutée ici
  };

  const handleDeleteNote = (noteId: number) => {
    const noteToDelete = notes.find((note) => note.noteId === noteId);
    if (noteToDelete) {
      setSelectedNote(noteToDelete);
      setShowDeleteDialog(true);
    }
  };

  const handleConfirmDelete = () => {
    if (selectedNote) {
      const updatedNotes = notes.filter((note) => note.noteId !== selectedNote.noteId);
      setNotes(updatedNotes);
    }
    setSelectedNote(null);
    setShowDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setSelectedNote(null);
    setShowDeleteDialog(false);
  };

  // Fonction pour gérer le début du déplacement du formulaire
  const handleFormDragStart = (event: MouseEvent<HTMLFormElement>) => {
    setIsFormDragging(true);
    setOffsetX(event.clientX - event.currentTarget.offsetLeft);
    setOffsetY(event.clientY - event.currentTarget.offsetTop);
  };

  // Fonction pour gérer le déplacement du formulaire
  const handleFormDrag = (event: MouseEvent<HTMLFormElement>) => {
    if (isFormDragging) {
      const newLeft = event.clientX - offsetX;
      const newTop = event.clientY - offsetY;

      event.currentTarget.style.left = `${newLeft}px`;
      event.currentTarget.style.top = `${newTop}px`;
    }
  };

  // Fonction pour gérer la fin du déplacement du formulaire
  const handleFormDragEnd = () => {
    setIsFormDragging(false);
  };

  return (
    <div>
      <HeaderComponent
        handleAddNoteClick={handleAddNoteClick}
        handleEditNote={handleEditNote}
        handleDeleteNote={() => handleDeleteNote(0)} // 0 est juste une valeur arbitraire pour ouvrir la boîte de dialogue depuis le début
      />
      <div className="body">
        <WhiteboardComponent notes={notes} handleDeleteNote={handleDeleteNote} />
        {isFormOpen && (
          <form
            className="note-form"
            onSubmit={handleNoteSubmit}
            onMouseDown={handleFormDragStart}
            onMouseMove={handleFormDrag}
            onMouseUp={handleFormDragEnd}
            
          >
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
        )}
        {showDeleteDialog && (
          <div className="dialog-box">
            <p className="dialog-box-message">Sind Sie sicher, dass sie die Notiz löschen wollen?</p>
            <div className="dialog-box-buttons">
              <button className="dialog-box-button delete" onClick={handleConfirmDelete}>
                Ja
              </button>
              <button className="dialog-box-button cancel" onClick={handleCancelDelete}>
                Nein
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhiteboardPage;
