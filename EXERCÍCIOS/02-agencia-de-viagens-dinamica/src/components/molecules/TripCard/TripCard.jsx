import PropTypes from "prop-types";
import "./TripCard.css";

import { Text } from "../../atoms";

import disponivel from "../../../assets/disponivel.png";
import indisponivel from "../../../assets/nao-disponivel.png";

export default function TripCard({ trip }) {
  const {
    name,
    description,
    price,
    date,
    duration,
    country,
    available,
    image,
    link,
  } = trip;

  const alternativeImage = "https://img.freepik.com/premium-psd/travel-concept-with-phone-mockup_23-2148980261.jpg?h=200";

  return (
    <li className="trip-card">
      <img
        className="trip-available"
        src={available ? disponivel : indisponivel}
        alt={available ? "disponivel" : "indisponivel"}
      />
      <img
        className="trip-image"
        src={image || alternativeImage}
        alt={name}
      />
      <Text textoH3={name} />
      <Text>{description}</Text>
      <Text>
        <strong>País: </strong> {country}
      </Text>
      <Text>
        <strong>Preço: </strong> R$  {price}
      </Text>
      <Text>
        <strong>Data: </strong> {date}
      </Text>
      <Text>
        <strong>Duração:</strong> {duration} dias
      </Text>
      <a href={link}>Ver mais</a>
    </li>
  );
}


TripCard.propTypes = {
  trip: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    date: PropTypes.string,
    duration: PropTypes.number,
    country: PropTypes.string,
    available: PropTypes.bool,
    image: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};
