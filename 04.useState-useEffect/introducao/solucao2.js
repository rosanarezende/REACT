const rootC = document.getElementById("root");
const containerC = ReactDOM.createRoot(rootC);
// containerC.render(<ContadorC />);

// Não precisamos dessa função, mas vamos criar apenas para mostrar que a aplicação renderiza apenas uma vez.
function renderizarC() {
  console.log("aplicação renderizou");
  return containerC.render(<ContadorC />);
}
renderizarC();

// O React nos oferece o hook useState() para que possamos atualizar o estado da aplicação.
function ContadorC() {
  const [contador, setContador] = React.useState(0);
  console.log("componente renderiou");

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
