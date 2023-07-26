import React from "react";
import Note from '../types';
import NotizComponent from "./NotizComponent";

type WhiteboardComponentProps = {
  notes: Note[];
  handleDeleteNote: (noteId: number) => void; // Assurez-vous que le prop handleDeleteNote est déclaré ici
}

const WhiteboardComponent = ({ notes, handleDeleteNote }: WhiteboardComponentProps) => {
  return (
    <div className="box">
      <ul>
        {notes.map((note) => (
          <NotizComponent
            key={note.noteId}
            noteId={note.noteId}
            title={note.title}
            description={note.description}
            handleDeleteNote={handleDeleteNote} // Assurez-vous que le prop handleDeleteNote est passé ici
          />
        ))}
      </ul>
    </div>
  );
}

export default WhiteboardComponent;
