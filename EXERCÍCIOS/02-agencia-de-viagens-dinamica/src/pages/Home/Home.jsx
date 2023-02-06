import { useNavigate } from "react-router-dom";

import "./Home.css";
import { useTrip } from "../../contexts/trip";
import { TripCard } from "../../components";

export default function Home() {
  const { tripList } = useTrip();

  return (
    <div className="App">
      <div className="conteudo">
        <h2>Bora viajar por aí?</h2>
        <p className="subtitulo">
          Escolha uma viagem e embarque nessa com a gente
        </p>
        <ul>
          {
            tripList.length === 0
              ? <div>Carregando...</div>
              : tripList.map(viagem => <TripCard trip={viagem} key={viagem.id} />)
          }
        </ul>
      </div>
    </div>
  )
}
