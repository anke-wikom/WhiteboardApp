import React from 'react' ;
import { FaTrash } from 'react-icons/fa';
import Note from '../types';
import '../index.css';

const NotizBox = ({noteId , title , description} : Note ) => {
    return (
        <div  className='whiteBoardParent_NotizBox'>
        <div className="content_child" >
        <div className="notizen_titel">
            <h1>{title}  </h1>
        </div>
        <div className="notizen_description">
            <ul>           
                <li>{description}</li>
            </ul>
        </div>
    </div>
   </div>
      )
}

export default NotizBox;
