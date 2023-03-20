///////////////////////////////////////////
// JS Vanilla /////////////////////////////
///////////////////////////////////////////

const conteudoVanilla = document.getElementById('vanilla');

const minhaDiv = document.createElement('div');
minhaDiv.innerText = 'Olá Mundo! Vanilla';
minhaDiv.setAttribute('id', 'minha-div');
conteudoVanilla.appendChild(minhaDiv);

const meuParagrafo = document.createElement('p');
meuParagrafo.innerText = 'Olá Turma!';
minhaDiv.appendChild(meuParagrafo);

const minhaImagem = document.createElement('img');
minhaImagem.setAttribute('src', 'https://www.criadouroiguacuano.com.br/portal/wp-content/uploads/2020/02/ring-neck-cinza.jpg');
minhaImagem.setAttribute('class', 'ring-neck');
minhaDiv.appendChild(minhaImagem);
