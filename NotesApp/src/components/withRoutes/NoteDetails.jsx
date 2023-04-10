import { useNoteContext } from "../../contexts/NoteContext";
import { useNavigate, useParams } from "react-router-dom";

const NoteDetails = () => {
  const { notes } = useNoteContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedNote = notes.find((note) => note.id === parseInt(id));

  return (
    <div>
      <h2>Detalhes da Nota</h2>
      {selectedNote ? (
        <>
          <p>Título: {selectedNote?.title}</p>
          <p>Conteúdo: {selectedNote?.content}</p>
          <button onClick={() => navigate(`/edit/${selectedNote.id}`)}>
            Editar
          </button>
          <br /><br />
        </>
      ) : (
        <p>Nenhuma nota selecionada</p>
      )}
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  );
};

export default NoteDetails;
