import { useNavigate } from "react-router-dom";
import { Text } from "../../atoms";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <Text textoH4="Página não encontrada" />
      <Text onClick={() => navigate("/")}>Voltar para a página inicial</Text>
    </main>
  );
}
