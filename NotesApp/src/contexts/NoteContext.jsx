// NoteContext.js - Contexto para gerenciar o estado global das anotações

import { createContext, useContext } from 'react';
import useNotes from '../hooks/notes';

const NoteContext = createContext();

export const useNoteContext = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const noteStore = useNotes();

  return (
    <NoteContext.Provider value={{
      ...noteStore,
    }}>
      {children}
    </NoteContext.Provider>
  );
};
