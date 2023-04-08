import { useNavigate } from "react-router-dom";
import "./Header.css";
import { TemaContext, useTemaContext } from "../../../contexts/tema";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { tema, setTema } = useTemaContext();
  const [botaoClicado, setBotaoClicado] = useState(false);

  const mudarTemaParaPreto = () => {
    setTema("preto");
    setBotaoClicado(!botaoClicado);
  };

  return (
    <header>
      <h1>React</h1>

      {/* Usando Consumer */}
      {/* <TemaContext.Consumer>
        {
          ({ tema, setTema }) => (
            <>
              <div className={`tema-${tema}`}>
                <button onClick={() => setTema("preto")} >Preto</button>
                <button onClick={() => setTema("branco")}>Branco</button>
              </div>
              <p>{tema}</p>
            </>
          )
        }
      </TemaContext.Consumer> */}

      {/* Usando o hook useContext (que está no arquivo tema.jsx) */}
      <div>
        <div className={`tema-${tema}`}>
          <button
            className={botaoClicado ? "botao-clicado" : "botao-sem-clicar"}
            onClick={mudarTemaParaPreto}
          >
            Preto
          </button>
          <button onClick={() => setTema("branco")}>Branco</button>
        </div>
        <p>{tema}</p>
      </div>

      <div>
        <button onClick={() => navigate("/")}>Home</button>

        <button onClick={() => navigate("/composition")}>Composition</button>

        <button onClick={() => navigate("/context")}>Context</button>

        <button onClick={() => navigate("/product")}>Detail Route</button>
      </div>
    </header>
  );
}
