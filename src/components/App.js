// App.js
import React from 'react';
import { NotesProvider } from '../context/NotesContext';
import '../App.css';
import AddNoteForm from './AddNoteForm';
import PreviewNotes from './PreviewNotes';

import logo from '../description.png';

function App() {
  return (
    <NotesProvider>
      <div className="container-fluid app-container">
        <div className="row">
          <div className="col-md-3 col-sm-12 bg-light text-dark w-100% h-100vh">
            <div className="navbar">
              <h2 className="text-dark text-center mb-4">
                Notes App
              </h2>
              <button className="btn btn-nav btn-block">
                <img src={logo} alt="Logo" className="logo" />&nbsp; New Note
              </button>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 p-4 main-content">
            <div className="preview-notes mt-4">
              <div className="notes-list">
                <AddNoteForm />
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
