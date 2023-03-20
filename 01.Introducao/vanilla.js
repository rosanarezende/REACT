///////////////////////////////////////////
// JS Vanilla /////////////////////////////
///////////////////////////////////////////

const conteudoVanilla = document.getElementById('vanilla');

const minhaDiv = document.createElement('div');
minhaDiv.innerText = 'Vanilla';
minhaDiv.setAttribute('id', 'minha-div');
conteudoVanilla.appendChild(minhaDiv);

const meuParagrafo = document.createElement('p');
meuParagrafo.innerText = 'Olá Turma, eu sou o Tutu!';
minhaDiv.appendChild(meuParagrafo);

const minhaImagem = document.createElement('img');
minhaImagem.setAttribute('src', 'https://user-images.githubusercontent.com/45580434/226222743-7f5f3d54-4702-4e09-9a6f-df8031b477f7.jpg');
minhaImagem.setAttribute('class', 'ring-neck');
minhaDiv.appendChild(minhaImagem);
