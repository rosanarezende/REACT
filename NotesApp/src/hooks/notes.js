import { useState, useEffect } from 'react';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(notes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const selectNote = (id) => {
    const selectedNote = notes.find(note => note.id === id);
    setSelectedNote(selectedNote);
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const updateNote = (id, updatedNote) => {
    const updatedNotes = notes.map(note => (note.id === id ? updatedNote : note));
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  return {
    notes,
    selectedNote,
    selectNote,
    addNote,
    updateNote,
    deleteNote,
  };
};

export default useNotes;
