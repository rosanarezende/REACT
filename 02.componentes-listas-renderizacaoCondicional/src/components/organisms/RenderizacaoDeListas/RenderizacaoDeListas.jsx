export default function RenderizacaoDeListas() {

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

  return (
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
        Crie uma lista de cidades em que cada cidade tenha um nome, um estado e
        quantos habitantes ela tem. Em seguida renderize a lista de cidades em
        uma tabela. OBS: Não esqueça de adicionar um identificador único para
        cada item da lista e utilize-o como valor da propriedade{" "}
        <code>key</code> do elemento da tabela.
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
  );
}
