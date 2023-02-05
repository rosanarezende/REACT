export default function NumberList() {
  const listaDeNumeros = [{
    id: "aaaa",
    numero: 1
  },
  {
    id: "bbbb",
    numero: 2
  }
  ]

  return (
    <>
      <h2>Lista de Números</h2>
      <ul>
        {listaDeNumeros.map(item => <li key={item.id} >{item.numero * 2}</li>)}
      </ul>
    </>
  )
}
