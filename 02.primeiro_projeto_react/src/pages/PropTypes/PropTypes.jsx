import Sum from "./Sum/Sum";

export default function PropTypes() {
  return (
    <div>
      <h1>PropTypes</h1>
      
      <h2>Enviar tipos corretos</h2>
      <Sum num1={5} num2={10} />
 
      <h2>Enviar tipos incorretos</h2>
      {/* <Sum num1={5} num2="10" /> */}

      <h2>Não enviar propriedade obrigatória</h2>
      <Sum />
    </div>
  )
}
