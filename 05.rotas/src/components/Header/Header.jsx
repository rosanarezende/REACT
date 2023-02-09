// import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  // const navigate = useNavigate();
  return (
    <header>
      <h1>
        Projeto Exemplo
      </h1>

      {/* <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Cadastro</button>
        <button onClick={() => navigate("/products")}>Produtos</button>
      </nav> */}
    </header>
  );
}
