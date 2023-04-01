import "./Cabecalho.css";
import logo from '../../../assets/react-logo.png';
import { Texto } from "../../atoms";

export default function Cabecalho() {
  return (
    <header>
      <img src={logo} alt="Logo React" />
      <Texto titulo="Props, Children, Valores padrão e PropTypes" />
    </header>
  );
}
