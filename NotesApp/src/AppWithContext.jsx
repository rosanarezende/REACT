import { NoteForm, NoteList, NoteDetails } from './components/withContext'

const AppWithContext = () => {
  return (
    <div>
      <h1>Plataforma de Anotações</h1>
      <NoteForm />
      <NoteList />
      <NoteDetails />
    </div>
  );
};

export default AppWithContext;
