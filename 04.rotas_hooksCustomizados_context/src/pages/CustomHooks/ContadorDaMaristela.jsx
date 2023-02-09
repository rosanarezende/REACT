import { Counter } from "../../components";
import { useContMari } from "../../customHooks";

export default function ContadorDaMaristela() {
  const [numero, incrementar, decrementar] = useContMari(100, 10, 5);
  const [numero2, incrementar2, decrementar2] = useContMari(500, 100, 200);
  const [numero3, incrementar3, decrementar3] = useContMari();

  return (
    <div>
      <h3>Contadores da maristela</h3>
      <Counter count={numero} increment={incrementar} decrement={decrementar} />

      <Counter count={numero2} increment={incrementar2} decrement={decrementar2} />

      <Counter count={numero3} increment={incrementar3} decrement={decrementar3} />

      <h5>PROBLEMA: misturar estados diferentes</h5>
      <Counter count={numero} increment={incrementar3} decrement={decrementar2} />
    </div>
  );
}
