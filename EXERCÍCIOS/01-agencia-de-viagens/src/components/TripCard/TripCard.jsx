import './TripCard.css'

export default function TripCard() {
  const trip = {
    id: 1,
    nome: "Viagem para o Japão",
    descricao: 
    "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nisl vel tincidunt lacinia, nunc est aliquam nisl, eu aliquam nunc nisl eu lectus.",
    preco: 10000,
    data: "10/02/2023",
    duracao: 10,
    imagem: "https://picsum.photos/200/300",
    link: "https://www.google.com/"
  }

  return (
    <li className="trip-card">
      <img src={trip.imagem} alt={trip.nome} />
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
