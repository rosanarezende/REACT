import Botao from "./components/Botao/Botao";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Paragrafo from "./components/Paragrafo/Paragrafo";
import CartaoDeVisita from "./components/CartaoDeVisita/CartaoDeVisita";
import CriancaFeliz from "./components/CriancaFeliz/CriancaFeliz";
import CriancaTriste from "./components/CriancaTriste/CriancaTriste";

export default function App() {
  const numeros = [1, 2, 3, 4, 5];

  const listaDeDoces = [
    { id: 1, nome: "Chocolate" },
    { id: 2, nome: "Bala" },
    { id: 3, nome: "Biscoito" },
  ];

  const listaDeCidades = [
    { id: 1, nome: "São Paulo", estado: "SP", habitantes: 12000000 },
    { id: 2, nome: "Rio de Janeiro", estado: "RJ", habitantes: 6000000 },
    { id: 3, nome: "Salvador", estado: "BA", habitantes: 3000000 },
  ];

  const felicidade = true;

  return (
    <>
      <Cabecalho />
      <main>
        <section>
          <h2>Reaproveitamento de componentes</h2>
          <Paragrafo />
          <Botao />

          <Paragrafo />
          <Botao />

          <h3>Exercício</h3>
          <p>
            Crie um componente <code>Cartão de Visita</code> que contenha: uma
            foto, um nome e um e-mail e telefone. Estilize o componente para que
            ele pareça um cartão de visita.
          </p>
          <CartaoDeVisita />
        </section>

        <section>
          <h2>Renderização de listas</h2>
          <ul>
            {numeros.map((numero) => (
              <li key={numero}>{numero}</li>
            ))}
          </ul>

          <ul>
            {listaDeDoces.map((doce) => (
              <li key={doce.id}>{doce.nome}</li>
            ))}
          </ul>

          <h3>Exercício</h3>
          <p>
            Crie uma lista de cidades em que cada cidade tenha um nome, um
            estado e quantos habitantes ela tem. Em seguida renderize a lista de
            cidades em uma tabela. OBS: Não esqueça de adicionar um
            identificador único para cada item da lista e utilize-o como valor
            da propriedade <code>key</code> do elemento da tabela.
          </p>

          <table>
            <thead>
              <tr>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Habitantes</th>
              </tr>
            </thead>
            <tbody>
              {listaDeCidades.map((cidade) => (
                <tr key={cidade.id}>
                  <td>{cidade.nome}</td>
                  <td>{cidade.estado}</td>
                  <td>{cidade.habitantes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Renderização condicional</h2>

          {/* Ainda veremos como alterar estado com React, mas supondo que a lista possa ou não estar vazia */}
          {listaDeDoces.length > 0 ? (
            <ul>
              {listaDeDoces.map((doce) => (
                <li key={doce.id}>{doce.nome}</li>
              ))}
            </ul>
          ) : (
            <p>Não há doces na lista</p>
          )}

          <h3>Exercício</h3>
          <p>
            Crie dois componentes: <code>CriancaFeliz</code> e <code>CriancaTriste</code>. Seja criativo no conteúdo.
            Crie um variável <code>felicidade</code> que pode ser <code>true</code> ou <code>false</code>. Renderize
            o componente <code>CriancaFeliz</code> se a variável <code>felicidade</code> for <code>true</code> e
            o componente <code>CriancaTriste</code> se a variável <code>felicidade</code> for <code>false</code>.
          </p>

          {felicidade ? <CriancaFeliz /> : <CriancaTriste />}

        </section>
      </main>
    </>
  );
}
