import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <h1 onClick={() => navigate("/")}>
        Projeto Exemplo
      </h1>
      {/* <Link to="/">
        <h1>Projeto Exemplo</h1>
      </Link> */}

      <nav>
        {/* Não podemos usar links comuns para navegar entre as rotas no React */}
        {/* <a href="/login">Login</a> */}

        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Cadastro</button>
        <button onClick={() => navigate("/products")}>Produtos</button>

        <Link to={-1}>
          <button>Voltar</button>
        </Link>
      </nav>
    </header>
  );
}
