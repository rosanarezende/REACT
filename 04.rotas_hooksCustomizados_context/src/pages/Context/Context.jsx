import { useThemeContext } from "../../contexts/theme";

export default function Context() {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className={`context-${theme}`}>
      <h1>Context</h1>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </div>
  );
}
