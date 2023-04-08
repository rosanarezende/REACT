import { ThemeContext, useThemeContext } from "../../../contexts/theme";
import { useState } from "react";

export default function Header() {
  const { theme, setTheme } = useThemeContext();
  const [botaoClicado, setBotaoClicado] = useState(null);

  const mudarTema = (tema) => {
    setTheme(tema);
    setBotaoClicado(tema);
  };

  return (
    <header className={`theme-${theme}`}>
      <h1>React</h1>

      {/* Usando o hook useContext (que está no arquivo theme.jsx) */}
      <div>
        <button
          onClick={() => mudarTema("black")}
          style={{ fontSize: botaoClicado === "black" ? "1.5rem" : "1rem" }}
        >
          Escuro
        </button>
        <button
          onClick={() => mudarTema("white")}
          style={{ fontSize: botaoClicado === "white" ? "1.5rem" : "1rem" }}
        >
          Claro
        </button>
      </div>
    </header>
  );
}
