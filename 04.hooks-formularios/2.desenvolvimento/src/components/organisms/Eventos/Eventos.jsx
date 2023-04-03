import { Text } from "../../atoms";

export default function Eventos() {

  return (
    <section className="Eventos">
      <Text subtitle="Eventos" />
      <Text>
        Eventos são usados para{" "}
        <strong>interagir com os elementos da interface do usuário</strong>,
        como por exemplo, o clique de um botão, o envio de um formulário, o
        scroll de uma página, o resize de uma janela, entre outros.
      </Text>
      <Text>
        Podem ser combinados com métodos e estados do React para criar uma
        interação dinâmica e responsiva com a interface do usuário.
      </Text>
      <Text>Os principais eventos disponíveis no React são:</Text>

      <ul>
        <li>
          <Text H5="onClick" />
          <Text>
            O evento <Text code="onClick" /> é usado para manipular eventos de
            clique em elementos, como botões e links.
          </Text>
          <button onClick={() => console.log("Clicou!")}>Clique aqui</button>
        </li>

        <li>
          <Text H5="onChange" />
          <Text>
            O evento <Text code="onChange" /> é usado para manipular eventos de
            mudança de valor em elementos, como por exemplo, o preenchimento de
            um campo de texto.
          </Text>
          <input
            type="text"
            onChange={(event) => console.log(event.target.value)}
          />
        </li>

        <li>
          <Text H5="onFocus" />
          <Text>
            O evento <Text code="onFocus" /> é usado para manipular eventos de
            foco em elementos, como por exemplo, o foco em um campo de texto.
          </Text>
          <input type="text" onFocus={() => console.log("Focou!")} />
        </li>

        <li>
          <Text H5="onBlur" />
          <Text>
            O evento <Text code="onBlur" /> é usado para manipular eventos de
            perda de foco em elementos, como por exemplo, o foco em um campo de
            texto.
          </Text>
          <input type="text" onBlur={() => console.log("Perdeu o foco!")} />
        </li>

        <li>
          <Text H5="onSubmit" />
          <Text>
            O evento <Text code="onSubmit" /> é usado para manipular eventos de
            envio de formulários, normalmente associado a um botão do tipo
            submit.
          </Text>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("Enviou!");
            }}
          >
            <input type="text" />
            <button type="submit">Enviar</button>
          </form>
        </li>
      </ul>
    </section>
  );
}
