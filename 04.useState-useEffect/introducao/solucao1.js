const rootB = document.getElementById("root");
const containerB = ReactDOM.createRoot(rootB);

// Precisamos criar a função renderizarB() para que toda vez que o contador for atualizado, a aplicação seja re-renderizado.
function renderizarB() {
  console.log("aplicação renderizou")
  return containerB.render(<ContadorB />);
}

// A aplicação renderiza a primeira vez
renderizarB();


// Declaramos o contadorB fora da função ContadorB() para que ele seja acessível em toda a aplicação.
let contadorB = 0;

function ContadorB() {
  console.log("componente renderizou");

  // Se declarmos a variável contadorB dentro da função ContadorB(), ele será recriado e zerado toda vez que a função for chamada.
  // let contadorB = 0;

  return (
    <div>
      <h1>Contador: {contadorB}</h1>

      <button
        onClick={() => {
          contadorB = contadorB + 1;
          // A cada clique no botão, a aplicação inteira é re-renderizada.
          renderizarB();
        }}
      >
        Incrementar
      </button>

      <button
        onClick={() => {
          contadorB = contadorB - 1;
          // A cada clique no botão, a aplicação inteira é re-renderizada.
          renderizarB();
        }}
      >
        Decrementar
      </button>
    </div>
  );
}
