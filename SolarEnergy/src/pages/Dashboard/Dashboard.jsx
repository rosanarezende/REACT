import { Standard } from "../../components/templates";
import { Chart } from "../../components/organisms";
import { Card } from "../../components/molecules";
import { useFetch } from "../../hooks";

export default function Dashboard() {
  const { data: units, loading: unitsLoading } = useFetch(
    `http://localhost:3003/unidades`
  );
  const { data: generation, loading: generationLoading } = useFetch(
    "http://localhost:3003/geracoes"
  );

  const unitsTotal = units?.length;
  const activeUnits = units?.filter((unit) => unit.ativa).length;
  const inactiveUnits = unitsTotal - activeUnits;

  const generationMean =
    generation?.reduce((acc, gen) => acc + gen.total, 0) / unitsTotal;

  return (
    <Standard title="Dashboard">
      {!unitsLoading && (
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <Card title="Total de unidades" value={unitsTotal} />
          <Card title="Unidades ativas" value={activeUnits} />
          <Card title="Unidades inativas" value={inactiveUnits} />
          <Card title="Média de energia" value={generationMean} />
        </section>
      )}

      {!generationLoading && <Chart data={generation} />}
    </Standard>
  );
}
