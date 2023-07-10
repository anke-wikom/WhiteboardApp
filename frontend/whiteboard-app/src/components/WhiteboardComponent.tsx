import React from "react";
import Note from '../types';
import NotizComponent from "./NotizComponent";

type Props = {
    notes: Note[],
}

const WhiteboardComponent = ({notes}: Props) => {
    return (
    <div className="box">
        <ul>
          {notes.map((note) => (
           <NotizComponent noteId={note.noteId} title={note.title} description={note.description} />
          ))}
        </ul>
      </div>
    );
}

export default WhiteboardComponent;