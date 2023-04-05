const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);

// Precisamos criar a função renderizarB() para que toda vez que o contador for atualizado, a aplicação seja re-renderizado.
function renderizar() {
  console.log("Aplicação renderizou")
  return container.render(<Contador />);
}

// A aplicação renderiza a primeira vez
renderizar();


// Declaramos o contadorB fora da função ContadorB() para que ele seja acessível em toda a aplicação.
let contador = 0;

function Contador() {
  // Se declarmos a variável contadorB dentro da função ContadorB(), ele será recriado e ZERADO toda vez que a função for chamada.
  // let contadorB = 0;
  console.log("Contador renderizou", { contador });

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button
        onClick={() => {
          contador = contador + 1;
          // A cada clique no botão, a aplicação inteira é re-renderizada.
          renderizar();
        }}
      >
        Incrementar
      </button>

      <button
        onClick={() => {
          contador = contador - 1;
          // A cada clique no botão, a aplicação inteira é re-renderizada.
          renderizar();
        }}
      >
        Decrementar
      </button>
    </div>
  );
}
