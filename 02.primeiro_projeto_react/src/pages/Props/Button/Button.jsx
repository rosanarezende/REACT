import './Button.css'

export default function Button({ danger }) {
  return (
    <button className={danger ? 'danger' : ''}>
      Botão
    </button>
  )
}
