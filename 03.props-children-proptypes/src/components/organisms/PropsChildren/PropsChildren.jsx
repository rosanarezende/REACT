import { Botao, Texto } from "../../atoms";

export default function PropsChildren() {
  return (
    <section>
      <Texto subtitulo="Props + Children" />

      <Botao>Clique aqui</Botao>
      <Botao danger>Clique aqui</Botao>

      <Texto textoH3="Exerício" />
      <p>
        Crie um componente <strong>Texto</strong> que receba children, mas que
        também receba propriedades titulo, subtitulo e cores (por exemplo cor,
        corTitulo, corSubtitulo).
      </p>
      <ul>
        <li>
          Se o titulo for passado, deve ser renderizado dentro de uma tag h2.
        </li>
        <li>
          Se o subtitulo for passado, deve ser renderizado dentro de uma tag h3.
        </li>
        <li>
          Se um texto for enviado como filho, deve ser renderizado dentro de uma
          tag p.
        </li>
      </ul>

      <Texto corParagrafo="green">Sou um novo parágrafo</Texto>

      <Texto
        cor="red"
        corTitulo="blue"
        titulo="Sou Título 1"
        subtitulo="Sou Subtítulo 1"
      />

      <Texto subtitulo="Sou Subtítulo 2" corSubtitulo="pink">
        Sou um parágrafo
      </Texto>
    </section>
  );
}
