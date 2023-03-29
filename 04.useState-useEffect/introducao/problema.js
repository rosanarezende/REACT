const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);

container.render(<Contador />);

// O contador não é atualizado na tela, mesmo que o valor seja alterado.
// Isso acontece porque o componente Contador não foi re-renderizado.
function Contador() {
  let contador = 0;

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button
        onClick={() => {
          contador = contador + 1;
        }}
      >
        Incrementar
      </button>

      <button
        onClick={() => {
          contador = contador + 1;
        }}
      >
        Decrementar
      </button>
    </div>
  );
}
