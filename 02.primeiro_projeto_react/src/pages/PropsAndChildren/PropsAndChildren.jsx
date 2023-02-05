import GiftCard from "./GiftCard/GiftCard";
import CapsLock from "./CapsLock/CapsLock";

export default function PropsAndChildren() {
  return (
    <div>
      <h1>Props and Children</h1>

      <CapsLock titulo="Olá Mundo" danger>
        Olá Mundo!!!!!
      </CapsLock>
      
      {/* <GiftCard titulo="Parabéns" danger>
        <h3>Você é um cliente especial</h3>
        <p>Ganhou um bolo de chocolate</p>
      </GiftCard> */}

    </div>
  )
}
