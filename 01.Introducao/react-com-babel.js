///////////////////////////////////////////
// React com Babel ////////////////////////
///////////////////////////////////////////
// O Babel é um transpilador que te permite escrever javascript de uma maneira mais moderna, utilizando funções e recursos que ainda não estão disponíveis de forma nativa nos browsers

const conteudoBabel = document.getElementById('react-com-babel');
const containerBabel = ReactDOM.createRoot(conteudoBabel);

containerBabel.render(
  <div id="minha-div">
    Olá Mundo! React com Babel
    <p>Olá Turma!</p>
    <img src="https://www.criadouroiguacuano.com.br/portal/wp-content/uploads/2020/02/ring-neck-cinza.jpg" className="ring-neck" />
  </div>
)
