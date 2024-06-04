// App.js
import React, { useRef } from 'react';
import { NotesProvider } from '../context/NotesContext';
import '../App.css';
import AddNoteForm from './AddNoteForm';
import PreviewNotes from './PreviewNotes';

import logo from '../description.png';

function App() {
  const titleInputRef = useRef(null);

  const handleNewNoteClick = () => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  };

  return (
    <NotesProvider>
      <div className="container-fluid app-container">
        <div className="row">
          <div className="col-md-3 bg-light text-dark">
          <div className="navbar">
              <img src={logo} alt="Logo" className="logo mb-3" />
              <h1 className="text-dark text-center mb-4">Notes App</h1>
              <button className="btn btn-nav btn-block" onClick={handleNewNoteClick}>
                New Note
              </button>
            </div>
          </div>
          <div className="col-md-9 p-4 main-content">
            <div className="preview-notes mt-4">
              <div className="notes-list">
                <AddNoteForm titleInputRef={titleInputRef} />
                <PreviewNotes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
