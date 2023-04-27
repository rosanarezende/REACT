import { useState, useEffect } from "react";
import { Standard } from "../../components/templates";
import { Chart } from "../../components/organisms";
import { Card } from "../../components/molecules";

export default function Dashboard() {
  const [units, setUnits] = useState([]);
  const [generation, setGeneration] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/unidades")
      .then((response) => response.json())
      .then((data) => setUnits(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3003/geracoes")
      .then((response) => response.json())
      .then((data) => setGeneration(data));
  }, []);

  const unitsTotal = units?.length;
  const activeUnits = units?.filter((unit) => unit.ativa).length;
  const inactiveUnits = unitsTotal - activeUnits;

  const generationMean =
    generation?.reduce((acc, gen) => acc + gen.total, 0) / unitsTotal;

  return (
    <Standard title="Dashboard">
      <section
        className="cards"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto 40px",
          // width: "70%",
        }}
      >
        <Card title="Total de unidades" value={unitsTotal} />
        <Card title="Unidades ativas" value={activeUnits} />
        <Card title="Unidades inativas" value={inactiveUnits} />
        <Card title="Média de energia" value={generationMean} />
      </section>

      <Chart data={generation} />
    </Standard>
  );
}
