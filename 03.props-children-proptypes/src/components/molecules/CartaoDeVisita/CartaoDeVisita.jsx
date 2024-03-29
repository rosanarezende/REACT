import "./CartaoDeVisita.css";

export default function CartaoDeVisita({ imageUrl, nome, email, telefone }) {
  return (
    <div className="cartao-de-visita">
      <img
        src={imageUrl}
        alt={`Foto de ${nome}`}
      />
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

CartaoDeVisita.defaultProps = {
  imageUrl: "https://via.placeholder.com/150",
};
