import './Botao.css';

export default function Botao({ danger, children }) {

  function clicaNoBotao() {
    alert("Clicou no botão!");
  }

  return (
    <button onClick={clicaNoBotao} className={danger ? "danger" : "default"}>
      {children}
    </button>
  );
}
