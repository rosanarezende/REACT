import "./Standard.css";
import { Menu } from "../../molecules";

export default function Standard ({ children }) {
  return (
    <div className="standard">
      <Menu />
      <div className="main">{children}</div>
    </div>
  );
};
