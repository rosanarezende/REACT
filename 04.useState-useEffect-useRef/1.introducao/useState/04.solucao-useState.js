const rootC = document.getElementById("root");
const containerC = ReactDOM.createRoot(rootC);

// Não precisamos mais de uma função para renderizar a aplicação, pois o React nos oferece o hook useState() para que possamos atualizar o estado da aplicação.
containerC.render(<App />);

// E agora, se o estado de um componente for alterado, apenas ele será renderizado novamente.
function App() {
  console.log("App renderizou");

  return (
    <div>
      <ContadorC />
      <Texto />
    </div>
  );
}

function Texto() {
  const [texto, setTexto] = React.useState("");
  console.log("Texto renderizou", { texto });

  return (
    <div>
      <br />
      <h1>Texto</h1>
      <input
        type="text"
        onChange={(e) => {
          setTexto(e.target.value);
        }}
      />
      {texto}
    </div>
  );
}


// O React nos oferece o hook useState() para que possamos atualizar o estado da aplicação.
function ContadorC() {
  const [contador, setContador] = React.useState(0);
  console.log("ContadorC renderiou", { contador });

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <button onClick={() => setContador(contador - 1)}>
        Decrementar
      </button>
    </div>
  );
}
