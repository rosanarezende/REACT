import { useState } from "react";
import { Text } from "../../atoms";
import { TextField } from "../../molecules";

export default function UseState() {
  const [focus, setFocus] = useState(false);

  const listaDeCidades = [
    { id: 1, nome: "São Paulo", estado: "SP" },
    { id: 2, nome: "Rio de Janeiro", estado: "RJ" },
    { id: 3, nome: "Belo Horizonte", estado: "MG" },
    { id: 4, nome: "Mariana", estado: "MG" },
    { id: 5, nome: "Salvador", estado: "BA" },
    { id: 6, nome: "Porto Seguro", estado: "BA" },
  ];
  const [cityFilter, setCityFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  const [name, setName] = useState("");

  const handleChange = (event) => {
    console.log({ name });
    setName(event.target.value);
  };

  return (
    <section className="UseState">
      <Text subtitle="useState" />

      <input
        label="Nome"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleChange}
      />

      <Text H3="Exercício" />
      <Text>
        Crie um input que, quando está focado, faz o parágrafo abaixo dele ficar
        visível e quando não está focado, faz o parágrafo ficar invisível
      </Text>

      <input
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}

        // Podemos usar o onMouseEnter e onMouseLeave para fazer o mesmo que o onFocus e onBlur, mas isso não é muito recomendado, pois o foco do teclado não é o mesmo que o mouse
        // onMouseEnter={() => setFocus(true)}
        // onMouseLeave={() => setFocus(false)}
      />
      <p
        style={{
          display: focus ? "block" : "none",
        }}
      >
        Esse parágrafo só aparece quando o input tem foco.
      </p>
      <br />
      <br />

      <Text subtitle="useState + listas" />

      <div>
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          onChange={(event) => setCityFilter(event.target.value)}
        />
        <br />
        <select onChange={(event) => setStateFilter(event.target.value)}>
          <option value="" disabled>
            Selecione um estado
          </option>
          <option value="">Todos</option>
          <option value="BA">BA</option>
          <option value="MG">MG</option>
          <option value="RJ">RJ</option>
          <option value="SP">SP</option>
        </select>

        <br />

        <ul>
          {listaDeCidades
            .filter(
              (cidade) =>
                cidade.nome.toLowerCase().includes(cityFilter.toLowerCase()) &&
                cidade.estado.includes(stateFilter)
            )
            .map((cidade) => (
              <li key={cidade.id}>{cidade.nome}</li>
            ))}
        </ul>
      </div>
    </section>
  );
}
