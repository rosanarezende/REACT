const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);

function renderizar() {
  return container.render(<App />);
}
renderizar();

// Quando a aplicação tem + de 1 componente, se 1 renderiza o outro também é renderizado, mesmo que não tenha sido alterado. Toda a aplicação é re-renderizada.
function App() {
  console.log("App renderizou");

  return (
    <div>
      <Contador />
      <Texto />
    </div>
  );
}

let texto = "";
function Texto() {
  console.log("Texto renderizou", { texto });

  return (
    <div>
      <br />
      <h1>Texto</h1>
      <input
        type="text"
        onChange={(e) => {
          texto = e.target.value;
          renderizar();
        }}
      />
      {texto}
    </div>
  );
}

let contador = 0;

function Contador() {
  console.log("Contador renderizou", { contador });

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button
        onClick={() => {
          contador = contador + 1;
          renderizar();
        }}
      >
        Incrementar
      </button>

      <button
        onClick={() => {
          contador = contador - 1;
          renderizar();
        }}
      >
        Decrementar
      </button>
    </div>
  );
}
