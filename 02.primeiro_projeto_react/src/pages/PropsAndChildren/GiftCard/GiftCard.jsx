import './GiftCard.css'

export default function GiftCard({ children, ...props }) {
  return (
    <div className='cartao-de-presente'>
      <h1>{props.titulo}</h1>
      <div className={props.danger ? 'danger' : ''}>
        {children}
      </div>
    </div>
  )
}
