import { Botao, Paragrafo, Texto } from "../../atoms";

export default function PropsChildren() {
  return (
    <section>
      <h2>Props + Children</h2>

      <Botao>Clique aqui</Botao>
      <Botao danger>Clique aqui</Botao>

      <h3>Exerício</h3>
      <p>
        Crie um componente <strong>Texto</strong> que receba children, mas que também
        receba propriedades titulo, subtitulo e cores (por exemplo cor, corTitulo, corSubtitulo).
      </p>
      <ul>
        <li>
          Se o titulo for passado, deve ser renderizado dentro de uma tag h2.
        </li>
        <li>
          Se o subtitulo for passado, deve ser renderizado dentro de uma tag h3.
        </li>
        <li>
          Se um texto for enviado como filho, deve ser renderizado dentro de uma tag p.
        </li>
      </ul>

      <Texto cor="red" titulo="Sou Título 1" subtitulo="Sou Subtítulo 1">
        Sou um parágrafo
      </Texto>

      <Texto subtitulo="Sou Título 2" corSubtitulo="pink">
        Sou um parágrafo
      </Texto>

      <Texto corParagrafo="green">
        Sou um novo parágrafo
      </Texto>
    </section>
  );
}
