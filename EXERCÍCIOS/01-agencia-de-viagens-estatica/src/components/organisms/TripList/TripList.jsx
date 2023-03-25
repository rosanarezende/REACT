import { Text } from "../../atoms";
import { TripCard } from "../../molecules";
import { tripList } from "./constants"

export default function TripList() {

  return (
    <section>

      <Text subtitulo="Lista de viagens" />
      {tripList.length === 0 ? (
          <div>Carregando...</div>
        ) : (
          <ul>
            {tripList
              .filter((viagem) => viagem.disponivel)
              .map((viagem) => (
              <TripCard trip={viagem} key={viagem.id} />
            ))}
          </ul>
        )}
    </section>
  );
}
