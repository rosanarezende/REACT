import { useState } from "react";
import { useInput1, useInput2 } from "hooks";

// sem custom hook
export const InputExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
    setName("");
    setEmail("");
  };

  return (
    <>
      <h3>Input sem custom hook</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

// com custom hook
export const InputExample1 = () => {
  const [name, onChangeName] = useInput1("");
  const [email, onChangeEmail] = useInput1("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
    onChangeName("");
    onChangeEmail("");
  };

  return (
    <>
      <h3>Input com custom hook simples</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="email" value={email} onChange={onChangeEmail} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export const InputExample2 = () => {
  const [name, bindName, resetName] = useInput2("");
  const [email, bindEmail, resetEmail] = useInput2("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
    resetName();
    resetEmail();
  };

  return (
    <>
      <h3>Input com custom hook avançado</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" {...bindName} />
        <input type="email" {...bindEmail} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
