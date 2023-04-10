import { useNoteContext } from "../contexts/NoteContext";

export const NoteDetailsSemContext = ({ note }) => {
  return (
    <div>
      <h2>Detalhes da Nota</h2>
      {note ? (
        <>
          <p>Título: {note.title}</p>
          <p>Conteúdo: {note.content}</p>
        </>
      ) : (
        <p>Selecione uma nota para visualizar os detalhes.</p>
      )}
    </div>
  );
};

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
