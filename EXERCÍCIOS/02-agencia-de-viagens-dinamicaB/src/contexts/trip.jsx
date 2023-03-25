import { createContext, useContext, useEffect, useState } from "react";

export const TripContext = createContext();

export function TripProvider({ children }) {
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTripList([
        {
          id: 1,
          nome: "Viagem para o Japão",
          descricao: 
          "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus.",
          preco: 10000,
          data: "10/02/2023",
          duracao: 10,
          imagem: "https://picsum.photos/200/300",
          link: "https://www.google.com/"
        },
        {
          id: 2,
          nome: "Viagem para a Europa",
          descricao:
            "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus.",
          preco: 15000,
          data: "11/03/2023",
          duracao: 15,
          imagem: "https://picsum.photos/200/300",
          link: "https://www.google.com/"
        },
      ]);
    }, 2000);
  }, []);


  return (
    <TripContext.Provider value={{ tripList }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  const context = useContext(TripContext);
  return context;
}
