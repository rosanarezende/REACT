import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TripCard from "./components/TripCard/TripCard";

import { useTrips } from "./hooks/trips";

function App() {
  // a lista de doces começa vazia e depois de 10 segundos é preenchida
  const listaDeViagens = useTrips();
  // console.log({ listaDeViagens });

  const viagem = {
    id: 1,
    nome: "Viagem para o Japão",
    descricao:
      "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus.",
    preco: 10000,
    data: "10/02/2023",
    duracao: 10,
    imagem: "https://picsum.photos/200/300",
    link: "https://www.google.com/"
  }

  const viagem2 = {
    id: 2,
    nome: "Viagem para a Russia",
    descricao:
      "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus.",
    preco: 50000,
    data: "27/01/2023",
    duracao: 20,
    imagem: "https://picsum.photos/200/300",
    link: "https://www.google.com/"
  }

  // const listaDeViagens = [
  //   {
  //     id: 1,
  //     nome: "Viagem para o Japão",
  //     descricao:
  //       "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus.",
  //     preco: 10000,
  //     data: "10/02/2023",
  //     duracao: 10,
  //     imagem: "https://picsum.photos/200/200",
  //     link: "https://www.google.com/"
  //   },
  //   {
  //     id: 2,
  //     nome: "Viagem para a Russia",
  //     descricao:
  //       "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus.",
  //     preco: 50000,
  //     data: "27/01/2023",
  //     duracao: 20,
  //     imagem: "https://picsum.photos/200/200",
  //     link: "https://www.google.com/"
  //   },
  //   {
  //     id: 3,
  //     nome: "Viagem para a praia",
  //     descricao:
  //       "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus.",
  //     preco: 50000,
  //     data: "27/01/2023",
  //     duracao: 20,
  //     imagem: "https://picsum.photos/200/200",
  //     link: "https://www.google.com/"
  //   }
  // ]
  // if (listaDeViagens.length === 0) {
  //   return <div>Carregando...</div>
  // }


  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <h2>Bora viajar por aí?</h2>
        <p className="subtitulo">
          Escolha uma viagem e embarque nessa com a gente
        </p>
        <ul>
          {
            listaDeViagens.length === 0
              ? <div>Carregando...</div>
              : listaDeViagens.map(viagem => <TripCard trip={viagem} key={viagem.id} />)
          }
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
