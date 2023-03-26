import "./Register.css";
import { TripForm } from "../../organisms";
import { Text } from "../../atoms";

export default function Register() {
  return (
    <main className="register">
      <Text titulo="Cadastro de Viagens" />
      <Text subtitulo="Formulário de cadastro" />

      <TripForm />
    </main>
  );
}
