import './TripCard.css'

export default function TripCard({ trip }) {
  
  return (
    <li className="trip-card">
      <img src={trip.imagem} alt={trip.nome} style={
        { width: "200px", height: "300px" }
      } />
      <h3>{trip.nome}</h3>
      <p>{trip.descricao}</p>
      <p>
        <strong>Preço:</strong> R$ {trip.preco}
      </p>
      <p>
        <strong>Data:</strong> {trip.data}
      </p>
      <p>
        <strong>Duração:</strong> {trip.duracao} dias
      </p>
      <a href={trip.link}>Ver mais</a>
    </li>
  )
}
