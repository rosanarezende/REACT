import { useEffect, useState } from "react";
import "./TripList.css";
import { Text } from "../../atoms";
import { TripCard } from "../../molecules";
import { trips } from "./constants";

export default function TripList({ filters }) {
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("trips")) || trips;

    localStorage.setItem("trips", JSON.stringify(list));
    setTripList(list);
  }, []);

  const filter = (trip) => {
    const { available, country, minPrice, maxPrice } = filters;

    const isAvailable = available ? trip.available : true;
    const isNotAvailable = available === false ? !trip.available : true;
    const isCountry = country ? trip.country === country : true;
    const isMinPrice = minPrice ? trip.price >= minPrice : true;
    const isMaxPrice = maxPrice ? trip.price <= maxPrice : true;

    return (
      isAvailable && isNotAvailable && isCountry && isMinPrice && isMaxPrice
    );
  };

  return (
    <section className="trip-list">
      <Text subtitulo="Lista de viagens" />

      {tripList?.length === 0 ? (
        <div>Carregando...</div>
      ) : (
        <ul>
          {tripList
            ?.filter((viagem) => filter(viagem))
            .map((viagem) => (
              <TripCard trip={viagem} key={viagem.id} />
            ))}
        </ul>
      )}
    </section>
  );
}
