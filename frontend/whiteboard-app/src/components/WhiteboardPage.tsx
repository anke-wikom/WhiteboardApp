import React from "react";
import useNoteRequest from "../hooks/useNoteRequest";
import WhiteBoardComponent from "./WhiteBoardComponent";

const WhiteboardPage = () => {
    const {notes} = useNoteRequest();
    return  (
          <div className="whiteBoardParent">
            <WhiteBoardComponent/>
            <h1>Whiteboard</h1>
            <ul>
              {
                notes !== undefined
               ? (notes.map(note => (
                <li key={note.noteId}>
                <h3>{note.title}</h3>
                <div>{note.description}</div>
              </li>
              )))
              : (<div>Fehler beim Laden der Notizen</div>)
               }
            </ul>
            </div>
    );
}

export default WhiteboardPage;