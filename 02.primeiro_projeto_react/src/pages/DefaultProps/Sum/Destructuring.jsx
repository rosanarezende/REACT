export default function Sum({ numero1 = 0, numero2 = 0 }) {
  const resultado = numero1 + numero2
  
  return (
    <div>
      Soma: {resultado}
    </div>
  )
}
