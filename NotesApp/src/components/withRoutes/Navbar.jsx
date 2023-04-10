import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Minhas Anotações</h1>
      <div>
        <button onClick={() => navigate('/')}>Lista de Anotações</button>
        <button onClick={() => navigate('/create')}>Nova Anotação</button>
      </div>
    </header>
  );
}
