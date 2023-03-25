import "./Footer.css";
import { Text } from "../../atoms";

export default function Footer() {
  return (
    <footer>
      <Text>
        <strong>Endereço: </strong>
        Rua das Flores, 123
      </Text>
      <Text>
        <strong>Telefone: </strong>
        (11) 99999-9999
      </Text>
      <Text>
        <strong>Redes sociais: </strong>
        @agenciadeviagens
      </Text>
    </footer>
  );
}
