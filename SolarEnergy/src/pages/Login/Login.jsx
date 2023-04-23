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

      // Se o login for válido, redirecione para a tela de dashboard
      navigate("/");
    }
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "518px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 36px",
          }}
        >
          <img src={logo} alt="Solar Energy logo" />
          <h2
            style={{
              color: "#374557",
              marginBottom: 38,
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: 0,
            }}
          >
            Seja bem-vindo!
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
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
            {error && (
              <div style={{ marginBottom: 16, color: "#f00" }}>{error}</div>
            )}
            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
