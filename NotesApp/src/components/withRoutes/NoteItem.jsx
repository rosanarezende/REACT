import { useNavigate } from "react-router-dom";
import { useNoteContext } from "../../contexts/NoteContext";

const NoteItem = ({ note }) => {
  const navigate = useNavigate();
  const { deleteNote } = useNoteContext();

  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Excluir</button>
      <button onClick={() => navigate(`/details/${note.id}`)}>
        Selecionar
      </button>
    </div>
  );
};

export default NoteItem;
