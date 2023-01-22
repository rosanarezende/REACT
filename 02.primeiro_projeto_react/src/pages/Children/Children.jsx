import GiftCard from './GiftCard/GiftCard'
import CapsLock from './CapsLock/CapsLock'

export default function Children() {
  return (
    <div>
      <h2>Children</h2>
      <CapsLock>
        Olá Mundo
      </CapsLock>

      <br />

      <GiftCard>
        <h2>Parabéns</h2>
        <p>Você ganhou um bolo de chocolate</p>
      </GiftCard>
    </div>
  )
}
