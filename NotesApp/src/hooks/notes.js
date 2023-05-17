import { useState, useEffect } from 'react';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(notes);
  }, []);

  const selectNote = (id) => {
    const selectedNote = notes.find(note => note.id === id);
    setSelectedNote(selectedNote);
  };
  
  const updateContent = (newContent) => {
    localStorage.setItem("cookBookList", JSON.stringify(newContent));
    setNotes(newContent)
  };

  const addNote = (note) => {
    const newList = [...notes, note]
    updateContent(newList);
  };

  const updateNote = (id, updatedNote) => {
    const newList = notes.map(note => (note.id === id ? updatedNote : note));
    updateContent(newList);
  };

  const deleteNote = (id) => {
    const newList = notes.filter(note => note.id !== id);
    updateContent(newList);
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
