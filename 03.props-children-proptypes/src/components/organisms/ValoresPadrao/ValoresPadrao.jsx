import { Texto } from "../../atoms";
import { CartaoDeVisita, Subtracao, Subtracao2 } from "../../molecules";

export default function ValoresPadrao() {
  return (
    <section>
      <Texto subtitulo="Valores Padrão" />
      <Texto>
        É possível definir valores padrão para as props de um componente.
        Existem duas estratégias para isso:
      </Texto>
      <Texto textoH6="1. Definindo o valor padrão no corpo da função do componente" />
      <Subtracao num1={1} num2={2} />
      <Subtracao num1={1} />
      <Subtracao num2={2} />

      <Texto textoH6="2. Usando a propriedade .defaultProps" />
      <Subtracao2 num1={1} num2={2} />
      <Subtracao2 num1={1} />
      <Subtracao2 num2={2} />

      <Texto textoH3="Exercício" />
      <Texto>
        Refatore mais uma vez o componente CartaoDeVisita para que ele receba
        valores padrão que você julgar necessário.
      </Texto>
      <CartaoDeVisita
        nome="Fulana"
        email="fulana@email.com"
        telefone="(11) 99999-9999"
      />
    </section>
  );
}
