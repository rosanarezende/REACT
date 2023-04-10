import { useNoteContext } from "../../contexts/NoteContext";

const NoteDetails = () => {
  const { selectedNote } = useNoteContext();

  return (
    <div>
      <h2>Detalhes da Nota</h2>
      {selectedNote ? (
        <>
          <p>Título: {selectedNote.title}</p>
          <p>Conteúdo: {selectedNote.content}</p>
        </>
      ) : (
        <p>Selecione uma nota para visualizar os detalhes.</p>
      )}
    </div>
  );
};

export default NoteDetails;
