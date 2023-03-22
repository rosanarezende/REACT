import { Botao, Paragrafo } from '../../atoms'
import { CartaoDeVisita } from '../../molecules'

export default function RenderizacaoDeComponentes() {
  return (
    <section>
      <h2>Criação e Reutilização de componentes</h2>
      <Paragrafo />
      <Botao />

      <Paragrafo />
      <Botao />

      <h3>Exercício</h3>
      <p>
        Crie um componente <code>Cartão de Visita</code> que contenha: uma foto,
        um nome e um e-mail e telefone. Estilize o componente para que ele
        pareça um cartão de visita.
      </p>
      <CartaoDeVisita />
    </section>
  );
}
