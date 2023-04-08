import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
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
