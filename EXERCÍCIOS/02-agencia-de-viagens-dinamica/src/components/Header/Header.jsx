import { useNavigate } from "react-router-dom";

import "./Header.css";
import logo1 from "../../assets/logo1.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1>
        <img src={logo1} alt="Logo da agência de viagens 'Por aí'" />
      </h1>

      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Cadastro</button>
        <button onClick={() => navigate("/contact")}>Contato</button>
      </nav>
    </div>
  );
}
