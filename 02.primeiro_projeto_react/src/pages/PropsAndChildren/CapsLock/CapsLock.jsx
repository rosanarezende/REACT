import './CapsLock.css'

export default function CapsLock({ children, titulo, danger }) {
  const textoEmCapsLock = children.toUpperCase()

  return (
    <>
      <h1>{titulo}</h1>
      <div className={danger ? 'danger' : ''}>
        {textoEmCapsLock}
      </div>
    </>
  )
}
