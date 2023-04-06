import { Text } from "../../atoms";
import logo from "../../../assets/react-logo.png";

export default function Header() {
  return (
    <header
      className="flex-center mb-16 prl-16 primary-600 gap-16">
      <img className="image-100" src={logo} alt="Logo React" />
      <Text title="Hooks Customizados, Composição, Prop Drilling e Context API" />
    </header>
  );
}
