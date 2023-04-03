import { useState } from "react";
import { Text } from "../../atoms";
import { TextField } from "../../molecules";

export default function Exercise02() {
  const [cityNameFilter, setCityNameFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  const cityList = [
    { id: 1, nome: "São Paulo", estado: "SP" },
    { id: 2, nome: "Rio de Janeiro", estado: "RJ" },
    { id: 3, nome: "Belo Horizonte", estado: "MG" },
    { id: 4, nome: "Mariana", estado: "MG" },
    { id: 5, nome: "Salvador", estado: "BA" },
    { id: 6, nome: "Porto Seguro", estado: "BA" },
  ];

  const filteredCityList = cityList.filter(
    (cidade) =>
      cidade.nome.toLowerCase().includes(cityNameFilter.toLowerCase()) &&
      cidade.estado.includes(stateFilter)
  );

  const selectOptions = [
    { id: 1, value: "", label: "Selecione um estado" },
    { id: 2, value: "", label: "Todos" },
    { id: 3, value: "BA", label: "BA" },
    { id: 4, value: "MG", label: "MG" },
    { id: 5, value: "RJ", label: "RJ" },
    { id: 6, value: "SP", label: "SP" },
  ];

  return (
    <>
      <Text H3="Exercício 2" />
      <Text>
        Com base na lista de cidades abaixo, crie um input que filtra a lista de
        cidades pelo nome e um select que filtra a lista de cidades pelo estado.
      </Text>

      <pre>{JSON.stringify(cityList, null, 2)}</pre>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {/* <input
          placeholder="Digite o nome da cidade"
          onChange={(event) => setCityNameFilter(event.target.value)}
        /> */}
        <TextField
          label="Cidade"
          placeholder="Digite o nome da cidade"
          onChange={(event) => setCityNameFilter(event.target.value)}
        />

        {/* <select onChange={(event) => setStateFilter(event.target.value)}>
          {selectOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}

        <TextField
          label="Estado"
          select={selectOptions}
          onChange={(event) => setStateFilter(event.target.value)}
        />
      </div>

      <ul style={{ textAlign: "center", listStyle: "none" }}>
        {filteredCityList.map((cidade) => (
          <li key={cidade.id}>{cidade.nome}</li>
        ))}
      </ul>
    </>
  );
}
