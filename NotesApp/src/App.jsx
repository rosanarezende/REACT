import { useState } from "react";
import NoteList, { NoteListSemContext } from "./components/NoteList";
import NoteForm, { NoteFormSemContext } from "./components/NoteForm";
import NoteDetails, { NoteDetailsSemContext } from "./components/NoteDetails";

/*
Projeto: Plataforma de Anotações

Descrição: Crie uma plataforma de anotações onde os usuários podem criar, visualizar, atualizar e excluir anotações.
*/

/*
Utilize prop drilling para passar as anotações entre os componentes pais e filhos, permitindo que as anotações sejam exibidas em diferentes componentes, como lista de anotações, formulário de criação/atualização de anotação e visualização de detalhes de anotação.
*/
export const AppSemContext = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === id ? updatedNote : note))
    );
  };

  return (
    <div>
      <h1>Plataforma de Anotações</h1>
      <NoteFormSemContext addNote={addNote}
        selectedNote={selectedNote}
        updateNote={updateNote}
        setSelectedNote={setSelectedNote}
      />
      <NoteListSemContext
        notes={notes}
        deleteNote={deleteNote}
        handleNoteSelect={handleNoteSelect}
      />
      <NoteDetailsSemContext note={selectedNote} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Plataforma de Anotações</h1>
      <NoteForm />
      <NoteList />
      <NoteDetails />
    </div>
  );
};

export default App;
