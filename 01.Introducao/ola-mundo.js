///////////////////////////////////////////
// JS Vanilla /////////////////////////////
///////////////////////////////////////////

const rootVanilla = document.getElementById('root-vanilla');

const minhaDiv = document.createElement('div');
minhaDiv.innerText = 'Olá Mundo! Vanilla';
minhaDiv.setAttribute('id', 'minha-div');
rootVanilla.appendChild(minhaDiv);

const meuParagrafo = document.createElement('p');
meuParagrafo.innerText = 'Olá Turma!';
minhaDiv.appendChild(meuParagrafo);



///////////////////////////////////////////
// React  /////////////////////////////////
///////////////////////////////////////////

const rootReact = document.getElementById('root-react');
const container = ReactDOM.createRoot(rootReact);

container.render(
  React.createElement(
    'div', { id: 'minha-div' }, 'Olá Mundo! React',
    React.createElement('p', null, ' Olá Turma!'),
  )
)

// container.render(
//   React.createElement(
//     'div', null, null,
//     React.createElement('h1', { className: 'titulo' }, ' Olá Mundo!'),
//     React.createElement('p', null, 'Olá Turma!'),
//     React.createElement(
//       'img',
//       {
//         src: 'https://www.criadouroiguacuano.com.br/portal/wp-content/uploads/2020/02/ring-neck-cinza.jpg',
//         id: 'ring-neck'
//       },
//       null),
//   )
// )
