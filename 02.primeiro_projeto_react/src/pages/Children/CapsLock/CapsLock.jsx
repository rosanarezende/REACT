export default function CapsLock({ children }) {
  const textoEmCapsLock = children.toUpperCase()

  return <p>{textoEmCapsLock}</p>
}
