import { useNavigate } from "react-router-dom";
import { useNoteContext } from "../../contexts/NoteContext";

const NoteItem = ({ note }) => {
  const navigate = useNavigate();
  const { deleteNote, selectNote } = useNoteContext();

  const handleDelete = () => {
    deleteNote(note.id);
    selectNote(null);
  };

  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Excluir</button>
      <button onClick={() => navigate(`/details/${note.id}`)}>
        Selecionar
      </button>
    </div>
  );
};

export default NoteItem;
