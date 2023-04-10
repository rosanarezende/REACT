import { useNavigate } from "react-router-dom";
import { useNoteContext } from "../../contexts/NoteContext";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes } = useNoteContext();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Lista de Anotações</h2>
      {notes.length > 0 ? (
        <div className="note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
          />
        ))}
        </div>
      ) : (
          <>
            <p>Nenhuma anotação encontrada</p>
            <button
              onClick={() => navigate("/create")}
            >
              Crie sua primeira anotação
            </button>
          </>
      )}
    </div>
  );
};

export default NoteList;
