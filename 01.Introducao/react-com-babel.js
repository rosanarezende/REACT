///////////////////////////////////////////
// React com Babel ////////////////////////
///////////////////////////////////////////
// O Babel é um transpilador que te permite escrever javascript de uma maneira mais moderna, utilizando funções e recursos que ainda não estão disponíveis de forma nativa nos browsers

const conteudoBabel = document.getElementById('react-com-babel');
const containerBabel = ReactDOM.createRoot(conteudoBabel);

containerBabel.render(
  <MinhaAplicacao />
)

function MinhaAplicacao() {
  return (
    <div id="minha-div">
      React com Babel
      <p>Olá Turma, eu sou o Tutu!</p>
      <img src="https://user-images.githubusercontent.com/45580434/226222743-7f5f3d54-4702-4e09-9a6f-df8031b477f7.jpg" className="ring-neck" />
    </div>
  )
}
