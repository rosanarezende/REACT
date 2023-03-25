import PropTypes from "prop-types";
import "./TripCard.css";

export default function TripCard({ trip }) {
  const { imagem, nome, descricao, preco, data, duracao, link } = trip;

  return (
    <li className="trip-card">
      <img
        src={imagem}
        alt={nome}
      />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p>
        <strong>Preço:</strong> R$ {preco}
      </p>
      <p>
        <strong>Data:</strong> {data}
      </p>
      <p>
        <strong>Duração:</strong> {duracao} dias
      </p>
      <a href={link}>Ver mais</a>
    </li>
  );
}

TripCard.propTypes = {
  trip: PropTypes.shape({
    imagem: PropTypes.string,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

TripCard.defaultProps = {
  trip: {
    imagem: "https://img.freepik.com/premium-psd/travel-concept-with-phone-mockup_23-2148980261.jpg?h=200",
  },
};
