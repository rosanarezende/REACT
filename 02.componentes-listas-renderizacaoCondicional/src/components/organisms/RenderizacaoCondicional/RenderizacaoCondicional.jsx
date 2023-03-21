import { CriancaFeliz, CriancaTriste } from "../../atoms";

export default function RenderizacaoCondicional() {
  const listaDeDoces = [
    { id: 1, nome: "Chocolate" },
    { id: 2, nome: "Bala" },
    { id: 3, nome: "Biscoito" },
  ];

  const felicidade = true;

  return (
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
        Crie dois componentes: <code>CriancaFeliz</code> e{" "}
        <code>CriancaTriste</code>. Seja criativo no conteúdo. Crie um variável{" "}
        <code>felicidade</code> que pode ser <code>true</code> ou{" "}
        <code>false</code>. Renderize o componente <code>CriancaFeliz</code> se
        a variável <code>felicidade</code> for <code>true</code> e o componente{" "}
        <code>CriancaTriste</code> se a variável <code>felicidade</code> for{" "}
        <code>false</code>.
      </p>

      {felicidade ? <CriancaFeliz /> : <CriancaTriste />}
    </section>
  );
}
