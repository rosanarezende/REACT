import './CartaoDeVisita.css'

export default function CartaoDeVisita({ imageUrl, nome, email, telefone }) {
  return (
    <div className="cartao-de-visita">
      <img src={imageUrl || "https://via.placeholder.com/150"} alt="Foto" />
      <div>
        <h3>{nome}</h3>
        <p>
          <span>E-mail: </span>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <span>Telefone: </span>
          <a href={`tel:${telefone}`}>{telefone}</a>
        </p>
      </div>
    </div>
  );
}
