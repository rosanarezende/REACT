import SumDefaultProps from './Sum/DefaultProps'
import SumDestructuring from './Sum/Destructuring'

export default function DefaultProps() {
  return (
    <div>
      <h1>Default Props</h1>

      <h2>Sum</h2>
      <SumDefaultProps numero1={10} numero2={20} />
      <SumDestructuring numero1={10} />
    </div>
  )
}
