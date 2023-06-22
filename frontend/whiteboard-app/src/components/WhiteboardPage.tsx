import React from "react";
import useNoteRequest from "../hooks/useNoteRequest";
import NotizBox from "./NotizBox";

const WhiteboardPage = () => {
    const {notes} = useNoteRequest();
    return  (
          <div className="whiteBoardParent">
            <h1>Whiteboard</h1>
            <ul>
              {
                notes !== undefined
               ? (notes.map(note => (
               <NotizBox  noteId= {note.noteId} 
                key={note.noteId}
                title= {note.title}
                description={note.description}/>
              )))
              : (<div>Fehler beim Laden der Notizen</div>)
               }
            </ul>
            </div>
    );
}

export default WhiteboardPage;