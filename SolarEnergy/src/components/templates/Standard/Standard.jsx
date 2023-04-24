import "./Standard.css";
import { Menu } from "../../organisms";

export default function Standard ({ children, title }) {
  return (
    <div className="standard">
      <Menu />
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
};
