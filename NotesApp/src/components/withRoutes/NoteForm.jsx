import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useNoteContext } from "../../contexts/NoteContext";

const NoteForm = () => {
  const { notes, addNote, updateNote } = useNoteContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (id) {
      const note = notes.find(note => note.id === parseInt(id));
      if (note) {
        setFormValues({
          title: note.title,
          content: note.content,
        });
      } else {
        // Redireciona para a página de criação caso a nota não seja encontrada
        navigate('/create');
      }
    }
  }, [id, notes, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updateNote(parseInt(id),
        {
        id: parseInt(id),
        title: formValues.title,
        content: formValues.content,
      });
    } else {
      addNote({
        id: Date.now(),
        title: formValues.title,
        content: formValues.content,
      });
    }

    setFormValues({
      title: "",
      content: "",
    });

    navigate('/');
  };

  return (
    <div className="add-note">
      <h2>{id ? "Editar Nota" : "Adicionar Nota"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
        />
        <textarea
          placeholder="Conteúdo"
          value={formValues.content}
          onChange={(e) =>
            setFormValues({ ...formValues, content: e.target.value })
          }
        />
        <button type="submit">
          {id ? "Atualizar Nota" : "Adicionar Nota"}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
