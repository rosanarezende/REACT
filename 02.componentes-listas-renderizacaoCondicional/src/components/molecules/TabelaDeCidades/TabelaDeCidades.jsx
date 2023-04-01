import "./TabelaDeCidades.css";

export default function TabelaDeCidades() {
  const listaDeCidades = [
    { id: 1, nome: "São Paulo", estado: "SP", habitantes: 12000000 },
    { id: 2, nome: "Rio de Janeiro", estado: "RJ", habitantes: 6000000 },
    { id: 3, nome: "Salvador", estado: "BA", habitantes: 3000000 },
  ];

  return (
    <table className="tabela-de-cidades">
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
  );
}
