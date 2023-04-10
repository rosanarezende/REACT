import { useNoteContext } from '../contexts/NoteContext';

export const NoteItemSemContext = ({ note, deleteNote, handleNoteSelect }) => {
  // Função de callback para exclusão de nota
  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <div className='note-item'>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={handleDelete}>Excluir</button>
      <button onClick={() => handleNoteSelect(note)}>Selecionar</button>
    </div>
  );
};

const NoteItem = ({ note }) => {
  const { deleteNote, selectNote } = useNoteContext();

  return (
    <div className='note-item'>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Excluir</button>
      <button onClick={() => selectNote(note.id)}>Selecionar</button>
    </div>
  );
};

export default NoteItem;
