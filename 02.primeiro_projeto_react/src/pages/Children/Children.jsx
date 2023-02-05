import GiftCard from './GiftCard/GiftCard'
import CapsLock from './CapsLock/CapsLock'
import Soma from './Soma/Soma'

export default function Children() {
  return (
    <div>
      <h2>Children</h2>
      <CapsLock>
        Olá Mundo
      </CapsLock>

      <CapsLock>
        Oi Turma
      </CapsLock>

      <br />

      <GiftCard>
        <h2>Parabéns</h2>
        <p>Você ganhou um bolo de chocolate</p>
      </GiftCard>

      <GiftCard>
        <a href="https://google.com/">Pegue seu presente aqui</a>
      </GiftCard>

      <Soma>
        {2 + 3}
      </Soma>
    </div>
  )
}
