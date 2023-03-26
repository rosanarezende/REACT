import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo1 from "../../../assets/logo1.png";
import { Button } from "../../atoms";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <img
        src={logo1}
        alt="Logo da agência de viagens 'Por aí'"
        onClick={() => navigate("/")}
      />

      <nav>
        <Button primary handleClick={() => navigate("/cadastro")}>
          Cadastro
        </Button>
      </nav>
    </header>
  );
}
