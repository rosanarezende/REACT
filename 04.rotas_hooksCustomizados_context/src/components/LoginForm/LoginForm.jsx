import { useState } from "react";
import { useInput } from "../../customHooks";
import "./LoginForm.css";

// com hooks customizados
export function LoginForm() {
  const [username, bindUsername, resetUsername] = useInput("");
  const [password, bindPassword, resetPassword] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuário: ${username} Senha: ${password}`);
    resetUsername();
    resetPassword();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuário</label>
        <input id="username" type="text" {...bindUsername} />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" {...bindPassword} />
      </div>
      <button>Enviar</button>
    </form>
  );
}

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

    return [values, onChange];
};
  
const useInputForm = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};


// sem hooks customizados
export function LoginForm2() {
  // const [formulario, setFormulario] = useState({
  //   usuario: "",
  //   senha: ""
  // })
  const [formulario, setFormulario] = useForm({
    usuario: "",
    senha: ""
  })

  // const [usuario, setUsuario] = useState("")
  // const [senha, setSenha] = useState("")
  
  const [usuario, setUsuario] = useInputForm("")
  const [senha, setSenha] = useInputForm("")
  
  const enviarFormulario = (e) => {
    e.preventDefault()

    alert(`Olá ${formulario.usuario}, sua senha é ${formulario.senha}`)

    setUsuario("")
    setSenha("")
  }
  
  return (
    <form
      onSubmit={enviarFormulario}
    >
      <div>
        <label htmlFor="username">Usuário</label>
        <input
          id="username"
          name="usuario"
          type="text"
          value={formulario.usuario || ""}
          onChange={setFormulario}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          name="senha"
          type="password"
          value={formulario.senha || ""}
          onChange={setFormulario}
        />
      </div>
      <button>Enviar</button>
    </form>
  );
}

