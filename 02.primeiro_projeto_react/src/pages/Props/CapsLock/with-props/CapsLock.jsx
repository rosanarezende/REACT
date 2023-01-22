export default function CapsLock(props) {
  const texto = props.texto
  const textoEmCapsLock = texto?.toUpperCase()

  return <p>{textoEmCapsLock}</p>
}
