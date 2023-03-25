import { useEffect, useState } from "react";
import "./TripList.css";
import { Text } from "../../atoms";
import { TripCard } from "../../molecules";
import { trips } from "./constants"

export default function TripList() {
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("trips")) || trips;

    localStorage.setItem("trips", JSON.stringify(list));
    setTripList(list);
  }, []);

  return (
    <section className="trip-list">
      <Text subtitulo="Lista de viagens" />

      {tripList.length === 0 ? (
          <div>Carregando...</div>
        ) : (
          <ul>
            {tripList
              // .filter((viagem) => viagem.available)
              .map((viagem) => (
              <TripCard trip={viagem} key={viagem.id} />
            ))}
          </ul>
        )}
    </section>
  );
}
