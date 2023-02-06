import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useThemeContext } from '../../contexts/theme';

export default function Header() {
  const navigate = useNavigate();
  const { setTheme } = useThemeContext();

  return (
    <header>
      <h1>React</h1>
      
      {/* <div>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("light")}>Light</button>
      </div> */}

      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>
    </header>
  );
}
