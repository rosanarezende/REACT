export default function CapsLock
({ texto }) {
  const textoEmCapsLock = texto.toUpperCase()

  return <p>{textoEmCapsLock}</p>
}
