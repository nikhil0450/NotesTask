import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import Linkify from "react-linkify";
import logo from '../description.png';

const PreviewNotes = () => {
  const { notes, deleteNote, updateNote } = useNotes();
  const [editingNote, setEditingNote] = useState(null);
  const [editedNote, setEditedNote] = useState({ title: "", description: "" });

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
  };

  const handleEditNote = (note) => {
    setEditingNote(note.id);
    setEditedNote({ title: note.title, description: note.description });
  };

  const handleSaveEdit = () => {
    updateNote(editingNote, editedNote);
    setEditingNote(null);
    setEditedNote({ title: "", description: "" });
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setEditedNote({ title: "", description: "" });
  };

  const formatTextWithLineBreaks = (text) => {
    return text.split('\n').map((item, key) => (
      <span key={key}>
        {item}
        <br />
      </span>
    ));
  };

  return (
    <div className="preview-notes mt-4">
      <div className="d-flex align-items-center mb-3">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="mb-0">My Notes</h2>
      </div>
      {notes.length === 0 ? (
        <p>No notes available. Add a new note to get started.</p>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <div className="card m-2 note" key={note.id}>
              <div className="card-body">
                {editingNote === note.id ? (
                  <>
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Title"
                      value={editedNote.title}
                      onChange={(e) =>
                        setEditedNote({ ...editedNote, title: e.target.value })
                      }
                    />
                    <textarea
                      className="form-control mb-2"
                      placeholder="Description"
                      value={editedNote.description}
                      onChange={(e) =>
                        setEditedNote({
                          ...editedNote,
                          description: e.target.value,
                        })
                      }
                    />
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">
                    <Linkify>{formatTextWithLineBreaks(note.description)}</Linkify>
                    </p>
                  </>
                )}
              </div>
              <div className="card-footer">
                {editingNote === note.id ? (
                  <>
                    <button className="btn btn-success btn-sm me-2" onClick={handleSaveEdit}>
                      <i className="fas fa-check"></i> Save
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={handleCancelEdit}>
                      <i className="fas fa-times"></i> Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-sm me-2" onClick={() => handleEditNote(note)}>
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className="btn btn-sm" onClick={() => handleDeleteNote(note.id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PreviewNotes;

