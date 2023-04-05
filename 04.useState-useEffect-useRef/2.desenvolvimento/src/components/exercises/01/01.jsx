import { useState } from "react";
import { Text } from "../../atoms";
import { TextField } from "../../molecules";

export default function Exercise01() {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <Text H3="Exercício 1" />
      <Text>
        Crie um input que, quando está focado, faz o parágrafo abaixo dele ficar
        visível e quando não está focado, faz o parágrafo ficar invisível
      </Text>

      {/* <input
        type="text"
        placeholder="Clique para focar"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}

        // Podemos usar o onMouseEnter e onMouseLeave para fazer o mesmo que o onFocus e onBlur, mas isso não é muito recomendado, pois o foco do teclado não é o mesmo que o mouse
        // onMouseEnter={() => setFocus(true)}
        // onMouseLeave={() => setFocus(false)}
      />
      <p
        style={{
          display: focus ? "block" : "none",
        }}
      >
        Esse parágrafo só aparece quando o input tem foco.
      </p>
      <br/> */}

      <TextField
        placeholder="Clique para focar"
        helperText="Esse parágrafo só aparece quando o input tem foco."
      />
    </>
  );
}
