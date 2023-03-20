///////////////////////////////////////////
// React  /////////////////////////////////
///////////////////////////////////////////

const conteudoReact = document.getElementById('react');
const container = ReactDOM.createRoot(conteudoReact);

container.render(
  React.createElement(
    'div', { id: 'minha-div' }, 'React',
    React.createElement('p', null, ' Olá Turma, eu sou o Tutu!'),
    React.createElement(
      'img',
      {
        src: 'https://user-images.githubusercontent.com/45580434/226222743-7f5f3d54-4702-4e09-9a6f-df8031b477f7.jpg',
        className: 'ring-neck'
      },
      null),
  )
)
