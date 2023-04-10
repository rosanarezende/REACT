// useNotes.js - Hook customizado para gerenciar o estado das anotações

/*
Crie um hook customizado para gerenciar o estado das anotações, como título, conteúdo e data de criação. O hook customizado deve permitir que as anotações sejam adicionadas, atualizadas e excluídas.
*/

import { useState } from 'react';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

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
