import React from 'react' ;
import Note from '../types';
import '../index.css';

const NotizBox = ({noteId , title , description} : Note ) => {
    return (
        <div  className='whiteBoardParent_NotizBox  content_child'>
        <div className="notizen_titel">
            <h1>{title}  </h1>
        </div>
        <div className="notizen_description">
            <ul>           
                <li>{description}</li>
            </ul>
        </div>
    </div>
      )
}

export default NotizBox;