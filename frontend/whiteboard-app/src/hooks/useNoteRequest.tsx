import { useCallback, useEffect, useState } from "react";
import Note from "../types";

const useNoteRequest = () => {
    const [notes, setNotes] = useState<Note[]>();
    const fetchNote = useCallback((noteId: string) => {
        fetch(`http://localhost:3001/notes/${noteId}/`, {
          method: 'GET',
          mode: 'cors',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.noteId);
            setNotes([...data]);
          })
          .catch((err) => {
          console.log(err.message);
        });
      }, []);

      const fetchAllNotes = useCallback((() => {
        fetch(`http://localhost:3001/notes/`, {
            method: 'GET',
            mode: 'cors',
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setNotes(data);
            })
            .catch((err) => {
            console.log(err.message);
    
          });
      }), []);

      const saveNewNote = useCallback(((noteId: string) => {
        // @TODO
        console.log("save new note with id:", noteId);
      }), [])

      useEffect(fetchAllNotes, [fetchAllNotes]);

      return {
        fetchAllNotes,
        fetchNote,
        saveNewNote,
        notes,
      }

}

export default useNoteRequest;