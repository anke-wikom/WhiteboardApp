import React from "react";
import Note from '../types';

type Props = {
    notes: Note[],
}

const WhiteboardComponent = ({notes}: Props) => {
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
      </div>
    );
}

export default WhiteboardComponent;