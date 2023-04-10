import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteList, NoteForm, NoteDetails, Navbar } from './components/withRoutes'


const AppWithRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/create" element={<NoteForm />} />
        <Route path="/edit/:id" element={<NoteForm />} />
        <Route path="/details/:id" element={<NoteDetails />} />
        <Route path="*" element={<div>Não encontrado</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppWithRoutes;
