import { Text } from "../../atoms";
import "./Header.css";
import logo from "../../../assets/react-logo.png";

export default function Header() {

  return (
    <header className="Header">
      <img src={logo} alt="Logo React" />
      <Text title="Eventos, Hooks (useSate, useEffect e useRef) e Formulários" />
    </header>
  );
}
