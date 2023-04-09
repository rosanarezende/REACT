import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/react-logo.png";

export function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <img onClick={() => navigate("/")} src={logo} alt="Logo React" />
        <h1> Rotas </h1>
      </div>

      <nav>
        <button onClick={() => navigate("/")}> Home </button>

        {/* só aparece se o usuário estiver logado */}
        <button onClick={() => navigate("/profile")}> Profile </button>

        <button onClick={() => navigate(-1) || navigate("/")}> Voltar </button>
      </nav>
    </header>
  );
}
