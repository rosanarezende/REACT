import './Candy.css';

export default function Candy({ doce }) {
  return (
    <li className="doce-rosa">
      {doce.nome}
    </li>
  )
}
