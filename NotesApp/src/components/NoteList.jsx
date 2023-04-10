import { useNoteContext } from "../contexts/NoteContext";
import NoteItem, { NoteItemSemContext } from "./NoteItem";

// Prop drilling: recebendo a propriedade deleteNote, mas não a está usando
export const NoteListSemContext = ({ notes, deleteNote, handleNoteSelect }) => {
  return (
    <div>
      <h2>Lista de Anotações</h2>
      <div className="note-list">
        {notes.map((note) => (
          <NoteItemSemContext
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            handleNoteSelect={handleNoteSelect}
          />
        ))}
      </div>
    </div>
  );
};

const NoteList = () => {
  const { notes, selectNote } = useNoteContext();

  return (
    <div>
      <h2>Lista de Anotações</h2>
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onClick={() => selectNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
