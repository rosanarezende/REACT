import './CapsLock.css'

export default function CapsLock({ children, titulo, danger }) {
  const textoEmCapsLock = children?.toUpperCase()
  console.log({ titulo })
  return (
    <>
      {titulo}
      <div className={danger ? 'danger' : ''}>
        {children}
      </div>
    </>
  )
}
