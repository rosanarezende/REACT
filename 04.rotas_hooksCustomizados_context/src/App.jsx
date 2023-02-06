import { useNavigate } from "react-router-dom";
import "./App.css";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <h2 style={{ color: "red" }} onClick={() => navigate("/custom-hooks")}>
        Custom Hooks
      </h2>

      <h2 style={{ color: "grey" }} onClick={() => navigate("/composition")}>
        Composition
      </h2>

      <h2 style={{ color: "blue" }} onClick={() => navigate("/context")}>
        Context
      </h2>

      <h2 style={{ color: "green" }} onClick={() => navigate("/product")}>
        Detail Route
      </h2>
    </>
  );
}
