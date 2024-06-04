// AddNoteForm.js
import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';
import './ANF.css';

const AddNoteForm = ({ titleInputRef }) => {
  const { addNote } = useNotes();
  const [newNote, setNewNote] = useState({ title: '', description: '' });

  const handleAddNote = () => {
    if (newNote.title.trim() !== '' && newNote.description.trim() !== '') {
      addNote({
        id: Date.now(),
        title: newNote.title,
        description: newNote.description,
      });
      setNewNote({ title: '', description: '' });
      if (titleInputRef && titleInputRef.current) {
        titleInputRef.current.value = '';  // Reset input field
      }
    }
  };

  return (

    <div className="add-note-form">
      <h2 className="mb-3">Add New Note</h2>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Title"
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        ref={titleInputRef}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={newNote.description}
        onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
      />
      <button className="btn btn-primary btn-block" onClick={handleAddNote}>
        Add Note
      </button>
    </div>
  );
};

export default AddNoteForm;
