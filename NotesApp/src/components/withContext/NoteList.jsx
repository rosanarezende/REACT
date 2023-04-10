import { useNoteContext } from "../../contexts/NoteContext";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes } = useNoteContext();

  return (
    <div>
      <h2>Lista de Anotações</h2>
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
