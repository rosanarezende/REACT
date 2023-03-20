export default function Botao() {

  function clicaNoBotao() {
    alert("Clicou no botão!");
  }

  return <button onClick={clicaNoBotao}>Clique Aqui</button>;
}
