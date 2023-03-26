import { useState } from "react";
import { Text } from "../../atoms";
import { Filters, TripList } from "../../organisms";

export default function Home() {
  const [filters, setFilters] = useState({
    available: "",
    country: "",
    minPrice: 0,
    maxPrice: 0,
  });

  return (
    <main>
      <Text titulo="Bora viajar por aí?" />
      <Text>Escolha uma viagem e embarque nessa com a gente</Text>

      <Filters filters={filters} setFilters={setFilters} />

      <TripList filters={filters} />
    </main>
  );
}
