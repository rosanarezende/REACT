import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Minhas Anotações</h1>
      <div>
        {/* lista de anotações */}
        <button onClick={() => navigate('/')}>Lista de Anotações</button>
        <button onClick={() => navigate('/create')}>Nova Anotação</button>
      </div>
    </header>
  );
}
