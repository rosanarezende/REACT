export default function Subtracao({ num1 = 0, num2 = 0 }) {
  console.log(num1, num2);
  const resultado = num1 - num2;

  return (
    <p>
      A subtração de {num1} - {num2} é {resultado}
    </p>
  );
}

export function Subtracao2({ num1, num2 }) {
  console.log("dois", num1, num2);
  const resultado = num1 - num2;

  return (
    <p>
      A subtração de {num1} - {num2} é {resultado}
    </p>
  );
}

Subtracao2.defaultProps = {
  num1: 0,
  num2: 0,
};
