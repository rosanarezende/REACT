export default function MinhaSoma({ numero1, numero2, titulo }) {
  const resultado = numero1 + numero2
  
  return (
    <div>
      {titulo}: {resultado}
    </div>
  )
}

MinhaSoma.defaultProps = {
  numero1: 0,
  numero2: 0,
  titulo: ''
}
