///////////////////////////////////////////
// React  /////////////////////////////////
///////////////////////////////////////////

const conteudoReact = document.getElementById('react');
const container = ReactDOM.createRoot(conteudoReact);

container.render(
  React.createElement(
    'div', { id: 'minha-div' }, 'Olá Mundo! React',
    React.createElement('p', null, ' Olá Turma!'),
    React.createElement(
      'img',
      {
        src: 'https://www.criadouroiguacuano.com.br/portal/wp-content/uploads/2020/02/ring-neck-cinza.jpg',
        className: 'ring-neck'
      },
      null),
  )
)
