import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TripCard from "./components/TripCard/TripCard";

import { useTrips } from "./hooks/trips";

function App() {
  // a lista de doces começa vazia e depois de 10 segundos é preenchida
  const listaDeViagens = useTrips();
  console.log({ listaDeViagens });

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <h2>Bora viajar por aí?</h2>
        <p className="subtitulo">
          Escolha uma viagem e embarque nessa com a gente
        </p>
        <ul>
          <TripCard />
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
