import Button from "./Button/Button"
import CapsLockWithoutProps from "./CapsLock/without-props/CapsLock"
import CapsLockWithProps from "./CapsLock/with-props/CapsLock"
import CapsLockWithPropsAndDestructuring from "./CapsLock/with-props-and-destructuring/CapsLock"

export default function Props() {

  return (
    <div>
      <h1>Props</h1>
    
      <h2>Botão</h2>
      <Button />
      <Button danger />

      <h2>CapsLock</h2>

      <h3>Sem props</h3>
      <CapsLockWithoutProps />
      <CapsLockWithProps />

      <h3>Com props</h3>
      <CapsLockWithProps texto="Olá Mundo" />
      <CapsLockWithProps texto="Oi Turma" />

      <h2>Com props e destructuring</h2>
      <CapsLockWithPropsAndDestructuring texto="Olá Mundo" />
      <CapsLockWithPropsAndDestructuring texto="Oi Turma" />

    </div>
  )
}
