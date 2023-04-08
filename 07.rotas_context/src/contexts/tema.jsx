import { createContext, useState, useContext } from "react";

const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState("branco")

  return (
    <TemaContext.Provider value={
      { tema, setTema }
    }>
      {children}
    </TemaContext.Provider>
  )
}

const useTemaContext = () => {
  return useContext(TemaContext)
}

export { TemaContext, TemaProvider, useTemaContext }
