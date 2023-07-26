import React from 'react';
import Note from '../types';
import { FaTrash } from 'react-icons/fa';
import '../index.css';

type NotizComponentProps = {
  noteId: number;
  title: string;
  description: string;
  handleDeleteNote: (id: number) => void;
};

const NotizComponent = ({ noteId, title, description, handleDeleteNote }: NotizComponentProps) => {
  return (
    <div className='whiteBoardParent_NotizBox  content_child'>
      <div className="notizen_titel">
        {/* Bouton pour supprimer la note */}
        <button className="delete_btn" onClick={() => handleDeleteNote(noteId)}>
          <FaTrash />
        </button>
        <h1>{title}</h1>
      </div>
      <div className="notizen_description">
        <ul>
          <li>{description}</li>
        </ul>
      </div>
    </div>
  );
};

export default NotizComponent;
