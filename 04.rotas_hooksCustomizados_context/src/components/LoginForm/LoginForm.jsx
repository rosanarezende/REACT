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

// sem hooks customizados
export function LoginForm2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuário: ${username} Senha: ${password}`);
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuário</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Enviar</button>
    </form>
  );
}
