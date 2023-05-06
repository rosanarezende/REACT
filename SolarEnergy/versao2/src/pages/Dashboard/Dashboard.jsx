import { useState } from "react";
import { Standard } from "../../components/templates";
import { Cards, Chart } from "../../components/organisms";

export default function Dashboard() {
  const [filter, setFilter] = useState("all");

  return (
    <Standard title="Dashboard">
      <Cards setFilter={setFilter} />

      <Chart filter={filter} />
    </Standard>
  );
}
