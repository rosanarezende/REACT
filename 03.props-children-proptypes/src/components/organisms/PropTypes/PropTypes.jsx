import { Texto } from "../../atoms";
import { Produto, Soma, Soma2 } from "../../molecules";

export default function PropTypes() {
  return (
    <section>
      <Texto subtitulo="PropTypes" />

      <Texto textoH4="Componentes sem PropTypes" />
      <Soma num1={1} />
      <Soma num1={1} num2="2" />

      <Texto textoH4="Componente com PropTypes" />
      <Soma2 numero2="2" />

      <Texto textoH3="Exercício" />
      <Texto>
        Refatore o componente <strong>Produto</strong>, adicionando o tipo de
        cada propriedade com <strong>PropTypes</strong>.
        Insira um valor padrão para uma delas, caso necessário.
      </Texto>
      <Produto nome="Produto 1" />
    </section>
  )
}
