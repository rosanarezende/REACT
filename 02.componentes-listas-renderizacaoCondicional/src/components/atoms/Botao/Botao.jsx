import React from "react";
import "./Botao.css";

export class BotaoComClasse extends React.Component {

  render() {
    // nessa parte do código, escrevermos JS (variáveis, funções, etc)
    console.log("Renderizando o componente de botão usando classe")

    // e retornamos o JSX
    return <button className="botao">Clique Aqui</button>;
  }
}

export default function BotaoComFuncao() {
  // nessa parte do código, escrevermos JS (variáveis, funções, etc)
  console.log("Renderizando o componente de botão usando função")

  // e retornamos o JSX
  return <button className="botao">Clique Aqui</button>;
}
