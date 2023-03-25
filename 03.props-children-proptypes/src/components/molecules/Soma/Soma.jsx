import "./Soma.css";

export default function Soma({ num1, num2 }) {
  const resultado = num1 + num2;

  return (
    <p className="soma">
      A soma de {num1} + {num2} é{" "}
      {/* <span className={resultado >= 0 ? "positivo" : "negativo"}>
        {resultado}
      </span> */}
      <span
        style={{
          color: resultado >= 0 ? "blue" : "red",
        }}
      >
        {resultado}
      </span>
    </p>
  );
}
