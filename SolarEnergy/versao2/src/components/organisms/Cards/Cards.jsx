import { useFetch } from "../../../hooks";
import { Card } from "../../molecules";

export default function Cards({ setFilter }) {
  const { data: units, loading: unitsLoading } = useFetch(
    `http://localhost:3003/unidades`
  );
  const { data: generation } = useFetch(
    "http://localhost:3003/geracoes"
  );

  const unitsTotal = units?.length;
  const activeUnits = units?.filter((unit) => unit.ativa).length;
  const inactiveUnits = unitsTotal - activeUnits;

  const generationMean =
    generation?.reduce((acc, gen) => acc + gen.total, 0) / units?.length;

  const cards = [
    {
      id: "all",
      title: "Total de unidades",
      value: unitsTotal,
      clickable: true,
    },
    {
      id: "active",
      title: "Unidades ativas",
      value: activeUnits,
      clickable: true,
    },
    {
      id: "inactive",
      title: "Unidades inativas",
      value: inactiveUnits,
      clickable: true,
    },

    {
      id: "mean",
      title: "Média de energia",
      value: generationMean,
      clickable: false,
    },
  ];

  return !unitsLoading && (
    <section style={{ display: "flex", justifyContent: "space-between" }}>
      {cards.map((card) => (
        <Card
          key={card.id}
          onClick={() => {
            if (card.id === "mean") return;
            setFilter(card.id);
          }}
          {...card}
        />
      ))}
    </section>
  );
}
