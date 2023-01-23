import Candy from "../Candy/Candy"

export default function CandyList() {
  const listaDeDoces = [
    { id: 1, nome: 'Chocolate' },
    { id: 2, nome: 'Bala' },
    { id: 3, nome: 'Biscoito' },
    { id: 4, nome: 'Bolo' },
    { id: 5, nome: 'Pudim' },
  ]

  return (
    <>
      <h2>Lista de Doces</h2>
      <ul>
        {/* {listaDeDoces.map((doce) => <li key={doce.id}>{doce.nome}</li>)} */}
        {listaDeDoces.map((doce) =>
          <Candy key={doce.id} doce={doce} />)}
      </ul>
    </>
  )
}
