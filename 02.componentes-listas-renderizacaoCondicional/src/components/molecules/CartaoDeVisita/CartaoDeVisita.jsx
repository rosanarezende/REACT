import './CartaoDeVisita.css'

export default function CartaoDeVisita() {
  return (
    <div className="cartao-de-visita">
      <img src="https://via.placeholder.com/150" alt="Foto" />
      <div>
        <h3>Fulano de tal</h3>
        <p>
          <span>E-mail: </span>
          <a href="mailto:fulano@gmail.com">fulano@gmail.com</a>
        </p>
        <p>
          <span>Telefone: </span>
          <a href="tel:11999999999">(11) 99999-9999</a>
        </p>
      </div>
    </div>
  );
}
