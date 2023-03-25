import { Text } from "./components/atoms";
import { Footer, Header } from "./components/molecules";
import { TripList, TripRegistration } from "./components/organisms";

function App() {
  return (
    <>
      <Header />

      <main>
        <Text titulo="Bora viajar por aí?" />
        <Text>
          Escolha uma viagem e embarque nessa com a gente
        </Text>

        {/* <TripRegistration /> */}

        <TripList />
      </main>

      <Footer />
    </>
  );
}

export default App;
