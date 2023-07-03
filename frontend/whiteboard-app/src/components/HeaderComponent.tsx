import React from 'react';
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa';

interface HeaderComponentProps {
  handleAddNoteClick: () => void;
  handleEditNote: () => void;
  handleDeleteNote: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  handleAddNoteClick,
  handleEditNote,
  handleDeleteNote
}) => {
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <img src={require("../images/logo2.png")} alt="Logo" />
          </li>
          <li>
            <button className="neueNotiz" onClick={handleAddNoteClick}>
              <FaPlus className="FaPlus"/> Neue Notiz
            </button>
          </li>
          <li>
            <button className="notizbearbeiten" onClick={handleEditNote}>
              <FaPen className="FaPlus" /> Notiz bearbeiten
            </button>
          </li>
          <li>
            <button className="notizloeschen" onClick={handleDeleteNote}>
              <FaTrash className="FaPlus"/> Notiz löschen
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
