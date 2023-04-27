import "./Standard.css";
import { Menu } from "../../organisms";

export default function Standard({ children, title }) {
  return (
    <div className="standard">
      <Menu />
      <main>
        <h1>{title}</h1>
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  );
};
