import { TemaContext } from "../../contexts/tema";

export default function Context() {
  return (
    <div>
      <h1>Context</h1>

      <TemaContext.Consumer>
        {({ tema, setTema }) => (
          <div className={`tema-${tema}`}>
            <p>{tema}</p>
            <div>
              <button onClick={() => setTema("preto")}>Preto</button>
              <button onClick={() => setTema("branco")}>Branco</button>
            </div>
          </div>
        )}
      </TemaContext.Consumer>
    </div>
  );
}
