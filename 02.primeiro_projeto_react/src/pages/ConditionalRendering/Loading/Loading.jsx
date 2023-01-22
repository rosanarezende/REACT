export default function Loading({ estaCarregrando }) {
  if (estaCarregrando) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <h2>Sou um componente de exemplo de Renderização Condicional</h2>
      <p>Não estou mais carregando</p>
    </>
  )
}
