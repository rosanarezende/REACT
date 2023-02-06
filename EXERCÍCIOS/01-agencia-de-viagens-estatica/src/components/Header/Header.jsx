import "./Header.css";
import logo1 from "../../assets/logo1.png";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <img src={logo1} alt="Logo da agência de viagens 'Por aí'" />
      </h1>
    </div>
  );
}
