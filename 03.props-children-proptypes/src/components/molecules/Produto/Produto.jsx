import { Paragrafo, Imagem } from '../../atoms'

export default function Produto({ nome, preco, imagem }) {

  return (
    <div>
      <Imagem imagemUrl={imagem} textoAlternativo={nome} />
      <Paragrafo>{nome}</Paragrafo>
      <Paragrafo>R$ {preco}</Paragrafo>
    </div>
  )
}
