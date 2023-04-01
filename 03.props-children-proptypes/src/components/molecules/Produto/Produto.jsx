import "./Produto.css"
import { Paragrafo, Imagem } from '../../atoms'
import PropTypes from 'prop-types'

export default function Produto({ nome, preco, imagem }) {

  return (
    <div className="produto">
      <Imagem imagemUrl={imagem} textoAlternativo={nome} />
      <Paragrafo>{nome}</Paragrafo>
      <Paragrafo>R$ {preco}</Paragrafo>
    </div>
  )
}

Produto.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  imagem: PropTypes.string,
}

Produto.defaultProps = {
  imagem: 'https://picsum.photos/200/200',
}
