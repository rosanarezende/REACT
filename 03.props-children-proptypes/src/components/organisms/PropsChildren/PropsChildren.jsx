import { Botao } from "../../atoms";

export default function PropsChildren() {
  return (
    <section>
      <h2>Props + Children</h2>

      <Botao>Clique aqui</Botao>
      <Botao danger>Clique aqui</Botao>
    </section>
  );
}
