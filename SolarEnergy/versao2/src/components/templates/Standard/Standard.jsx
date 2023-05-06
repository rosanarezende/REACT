import "./Standard.css";
import { Navbar } from "../../molecules";

export default function Standard({ children, title }) {
  return (
    <div className="container">
      <Navbar />
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
