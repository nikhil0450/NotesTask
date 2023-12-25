// NotesContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  const updateNote = (noteId, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === noteId ? { ...note, ...updatedNote } : note))
    );
  };

  const value = useMemo(() => ({ notes, addNote, deleteNote, updateNote }), [notes]);

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};

const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};

export { NotesProvider, useNotes };
