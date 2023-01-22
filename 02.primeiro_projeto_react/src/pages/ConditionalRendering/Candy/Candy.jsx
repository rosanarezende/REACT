export default function Candy({ listaDeDoces = [] }) {
  if (listaDeDoces.length === 0) {
    return (
      <>
        <h2>Urgente!!</h2>
        <p>Não há doces em casa. Precisamos comprar mais!</p>
      </>
    )
  }

  return (
    <>
      <h2>Lista de Doces</h2>
      <ul>
        {listaDeDoces.map((doce) => <li key={doce.id}>{doce.nome}</li>)}
      </ul>
    </>
  )
}
