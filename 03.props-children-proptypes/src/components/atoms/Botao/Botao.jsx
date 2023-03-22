export default function Botao({ texto, danger }) {

  function clicaNoBotao() {
    alert("Clicou no botão!");
  }

  return (
    <button onClick={clicaNoBotao} className={danger ? "danger" : "default"}>
      {texto}
    </button>
  );
}
