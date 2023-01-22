import { useEffect, useState } from "react";
import Candy from "./Candy/Candy";
import Loading from "./Loading/Loading";

export default function ConditionalRendering() {
  const [estaCarregrando, atualizarEstaCarregando] = useState(true)
  const [listaDeDoces, atualizarListaDeDoces] = useState([])

  useEffect(() => {
    setTimeout(() => {
      atualizarEstaCarregando(false)
      atualizarListaDeDoces([
        { id: 1, nome: 'Bolo de Chocolate' },
        { id: 2, nome: 'Bolo de Cenoura' },
        { id: 3, nome: 'Bolo de Laranja' },
        { id: 4, nome: 'Bolo de Morango' },
      ])
    }, 3000)
  }, [])

  return (
    <div>
      <h1>Renderização Condicional</h1>
      <Loading estaCarregrando={estaCarregrando} />
      <Candy listaDeDoces={listaDeDoces} />
    </div>
  )
}
