import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/atoms";

import backgroundImage from "../../assets/background.svg";
import emailImage from "../../assets/email.svg";
import passwordImage from "../../assets/password.svg";
import logo from "../../assets/logo2.svg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Aqui podemos fazer validações de campos, por exemplo:
    if (password.length < 6) {
      setError("Por favor, digite uma senha com no mínimo 6 caracteres");
    } else {
      // Aqui você pode fazer a chamada para a API para validar o login
      console.log({ email, password });
      localStorage.setItem("token", "logado")

      // Se o login for válido, redirecione para a tela de dashboard
      navigate("/");
    }
  }

  return (
    <div className="login">
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="content">
        <img src={logo} alt="Solar Energy logo" />
        <h2>Seja bem-vindo!</h2>
        <form onSubmit={handleSubmit}>
          <Input
            required
            type="email"
            placeholder="E-mail"
            icon={emailImage}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            required
            type="password"
            placeholder="Senha"
            icon={passwordImage}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && <div className="error" >{error}</div>}
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </div>
  );
}
