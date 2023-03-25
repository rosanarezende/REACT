import { Paragrafo } from "../../atoms";
import { CartaoDePresente } from "../../molecules";

export default function Children() {
  return (
    <section>
      <h2>Children</h2>
      <Paragrafo>Texto do parágrafo 1 😄</Paragrafo>

      <Paragrafo>
        Texto do <strong>parágrafo 2</strong>
      </Paragrafo>

      <h3>Exercício</h3>
      <Paragrafo>
        Crie um componente <strong>CartaoDePresente</strong> que recebe children
        e possua uma estilização de cartão de presente (por exemplo tamanho, cor
        de fundo, borda, fonte, etc.).
      </Paragrafo>

      <CartaoDePresente>
        <h4>Parabéns</h4>
        <p>Você ganhou um bolo de chocolate</p>
      </CartaoDePresente>
    </section>
  );
}
