export default function NumberList() {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <>
      <h2>Lista de Números</h2>
      <ul>
        {numbers.map((number) => {
          return (
            <li key={number}>
              {number}
            </li>
          )
        })}
      </ul>
    </>
  )
}
