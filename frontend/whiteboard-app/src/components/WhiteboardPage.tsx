import React, { useState } from "react";
import Note from "../types";
import HeaderComponent from "./HeaderComponent";
import WhiteboardComponent from "./WhiteboardComponent";

const WhiteboardPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const handleDeleteNote = (note: Note) => {
    const updatedNotes = notes.filter((n) => n.noteId !== note.noteId);
    setNotes(updatedNotes);
  };

  const handleConfirmDelete = () => {
    
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const handleAddNoteClick = () => {
    setIsFormOpen(true);
  };

  const handleCancelClick = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <HeaderComponent
        handleAddNoteClick={handleAddNoteClick}
        handleEditNote={() => setShowDeleteDialog(false)}
        handleDeleteNote={() => setShowDeleteDialog(true)}
      />
      <div className="body">
        <WhiteboardComponent
          notes={notes}
          onAddNote={handleAddNote}
          onDeleteNote={handleDeleteNote}
          isFormOpen={isFormOpen}
          onCancelClick={handleCancelClick}
        />
        {showDeleteDialog && (
          <div className="dialog-box">
            <p className="dialog-box-message">Sind Sie sicher, dass Sie die Notiz löschen wollen?</p>
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
