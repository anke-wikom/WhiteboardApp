import React from "react";
import Note from '../types';
import NotizComponent from "./NotizComponent";

type WhiteboardComponentProps = {
  notes: Note[];
  handleDeleteNote: (noteId: number) => void; 
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
            handleDeleteNote={handleDeleteNote} 
          />
        ))}
      </ul>
    </div>
  );
}

export default WhiteboardComponent;
