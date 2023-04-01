import { BotaoComClasse, BotaoComFuncao, Paragrafo } from "../../atoms";
import { CartaoDeVisita } from "../../molecules";

export default function RenderizacaoDeComponentes() {
  return (
    <section>
      <h2>Renderização de componentes </h2>

      <h4>Criação de componentes</h4>
      <p>Componentes são funções que retornam um pedaço da interface.</p>
      <p>
        Há dois tipos de componentes: <code>funcionais</code> e de{" "}
        <code>classe</code>.
      </p>

      <h5>1. Componentes de classe</h5>
      <p>
        São componentes que herdam de <code>React.Component</code> e possuem um
        método <code>render()</code> que retorna o JSX.
      </p>
      <p>
        Até 2018, com o lançamento da versão 16.8 do React, os componentes de
        classe eram a única forma de criar componentes.
      </p>
      <BotaoComClasse />

      <h5>2. Componentes funcionais</h5>
      <p>São componentes que são funções que retornam JSX.</p>
      <p>
        Hoje é a forma mais comum de criar componentes e é como faremos daqui
        para frente.
      </p>
      <BotaoComFuncao />

      <h4>Renderização de componentes </h4>
      <p>
        Um componente pode ser renderizado em qualquer lugar do código, e mais de uma vez.
      </p>
      <Paragrafo />
      <Paragrafo />

      <h3>Exercício</h3>
      <p>
        Crie um componente <code>Cartão de Visita</code> que contenha: uma foto,
        um nome e um e-mail e telefone. Estilize o componente para que ele
        pareça um cartão de visita.
      </p>
      <CartaoDeVisita />
    </section>
  );
}
