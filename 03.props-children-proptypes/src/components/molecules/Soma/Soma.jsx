import "./Soma.css";
import PropTypes from "prop-types";

export default function Soma({ num1, num2 }) {
  const resultado = num1 + num2;

  return (
    <p className="soma">
      A soma de {num1} + {num2} é {" "}
      {/* <span className={resultado >= 0 ? "positivo" : "negativo"}>
        {resultado}
      </span> */}
      <span style={{ color: resultado >= 0 ? "blue" : "red" }}>
        {resultado}
      </span>
    </p>
  );
}

export function Soma2({ numero1, numero2 }) {
  const resultado = numero1 + numero2;

  return (
    <p className="soma">
      A soma de {numero1} + {numero2} é {" "}
      <span style={{ color: resultado >= 0 ? "blue" : "red" }}>
        {resultado}
      </span>
    </p>
  );
}

Soma2.propTypes = {
  numero1: PropTypes.number,
  numero2: PropTypes.number,
};

Soma2.defaultProps = {
  numero1: 0,
  numero2: 0,
};
