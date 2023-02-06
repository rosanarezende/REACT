import "./CustomHooks.css";
import { Counter, LoginForm, LoginForm2 } from "../../components";
import { useCounter } from "../../customHooks";

export default function CustomHooks() {
  const { count, increment, decrement } = useCounter(); // 0, 1

  const {
    count: count2,
    increment: increment2,
    decrement: decrement2,
  } = useCounter(10, 2);

  const {
    count: count3,
    increment: increment3,
    decrement: decrement3,
  } = useCounter(6, 3);

  return (
    <div className="custom-hooks">
      <div className="contadores">
        <h3>Contadores</h3>
        <h4>Contador 1</h4>
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>

        <h4>Contador 2</h4>
        <div>
          <button onClick={decrement2}>-</button>
          <span>{count2}</span>
          <button onClick={increment2}>+</button>
        </div>

        <h4>Contador 3</h4>
        <Counter count={count3} increment={increment3} decrement={decrement3} />
      </div>

      <div className="formularios">
        <h3>Formulário de login</h3>
        <LoginForm />
        {/* <LoginForm2 /> */}
      </div>
    </div>
  );
}
