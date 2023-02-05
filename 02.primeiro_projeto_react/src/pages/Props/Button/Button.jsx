import './Button.css'

export default function Button({ danger, texto }) {
  return (
    <button className={ danger ? "vermelho" : "" }>
      Botão { texto && "com texto"}
    </button>
  )
}
