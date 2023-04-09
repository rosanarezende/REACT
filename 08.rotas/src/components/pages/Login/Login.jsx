import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFetch } from "../../../hooks";
import { useUserContext } from "../../../context/user";

export function Login() {
  const { data: users, getData } = useFetch();
  const [formValue, bindForm, resetForm] = useForm({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setUser, login  } = useUserContext();

  useEffect(() => {
    getData("http://localhost:3003/users");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const { username, password } = formValue;
    const filteredUser = users.filter((user) => user.username === username && user.password === password);

    resetForm();
    if (filteredUser.length) {
      setUser(filteredUser[0]);
      login(filteredUser[0])
      navigate("/profile")
    } else {
      alert("Usuário ou senha inválidos");
    }
  }
  return (
    <main>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          name="username"
          {...bindForm("username")}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          {...bindForm("password")}
        />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
