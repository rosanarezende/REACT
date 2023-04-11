import "./Header.css";
import { useThemeContext } from "../../../contexts/theme";

export default function Header() {
  const { theme, setTheme } = useThemeContext();

  const mudarTema = (tema) => {
    setTheme(tema);
  };

  return (
    <header className={`theme-${theme}`}>
      <h1>React</h1>

      {/* Usando o hook useContext (que está no arquivo theme.jsx) */}
      <div>
        <button onClick={() => mudarTema("black")}>Escuro</button>
        <button onClick={() => mudarTema("white")}>Claro</button>
      </div>
    </header>
  );
}
