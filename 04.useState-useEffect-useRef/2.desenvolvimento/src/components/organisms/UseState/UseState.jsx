import { useState } from "react";
import { Text } from "../../atoms";
import { Exercise01, Exercise02 } from "../../exercises";
import { TextField } from "../../molecules";

const listaDeProdutos = [
  { id: 1, nome: "Arroz", preco: 10 },
  { id: 2, nome: "Feijão", preco: 5 },
  { id: 3, nome: "Macarrão", preco: 3 },
];

export default function UseState() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    console.log({ name });
    setName(event.target.value);
  };

  const [filtroDePreco, setFiltroDePreco] = useState(null);
  const listaDeProdutosFiltrada = listaDeProdutos.filter((produto) => {
    if (filtroDePreco === null) return true;
    return produto.preco <= filtroDePreco;
  });

  return (
    <section className="UseState">
      <Text subtitle="useState" />
      {/* <input
        label="Nome"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleChange}
      /> */}
      <TextField
        label="Nome"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleChange}
      />

      <Exercise01 />

      <Text subtitle="useState + listas" />
      {/* <input
        type="number"
        placeholder="Digite o preço"
        onChange={(event) => setFiltroDePreco(event.target.value)}
      /> */}
      <TextField
        type="number"
        placeholder="Digite o preço"
        onChange={(event) => setFiltroDePreco(event.target.value)}
      />

      <ul>
        {listaDeProdutosFiltrada.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>

      <Exercise02 />
    </section>
  );
}
