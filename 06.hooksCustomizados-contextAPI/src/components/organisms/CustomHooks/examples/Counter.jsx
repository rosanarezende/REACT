import { useState } from "react";
import { useCounter1, useCounter2, useCounter3 } from 'hooks'

// sem custom hook
export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex-column flex-center gap-4">
      <h3>Contador SEM custom hook - de 1 em 1</h3>
      <div className="flex-center gap-16">
        <button className="p-8" onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button className="p-8" onClick={incrementCount}>+</button>
      </div>
    </div>
  );
};


// com custom hook
export const Counter1 = () => {
  const [count, incrementCount, decrementCount] = useCounter1(0);

  return (
    <div className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de 1 em 1</h3>
      <div className="flex-center gap-16">
        <button className="p-8" onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button className="p-8" onClick={incrementCount}>+</button>
      </div>
    </div>
  );
};

// sem custom hook, mas com incremento variável
export const Counter2 = () => {
const [count, setCount] = useState(0);

const incrementCount = (value) => {
  setCount(count + value);
};

const decrementCount = (value) => {
  setCount(count - value);
};

return (
    <div className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de x em x</h3>
      <div className="flex-center gap-16">
        <button className="p-8" onClick={() => decrementCount(2)}>-</button>
        <span>{count}</span>
        <button className="p-8" onClick={() => incrementCount(2)}>+</button>
      </div>
    </div>
  );
};


// com custom hook, mas com incremento variável
export const Counter3 = () => {
  const [count, incrementCount, decrementCount] = useCounter2(0, 2, 2);

  return (
    <div className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de x em x</h3>
      <div className="flex-center gap-16">
        <button className="p-8" onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button className="p-8" onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

// com custom hook, mas com incremento e decremento variável (passados no estado inicial ou no momento de incrementar e decrementar)
export const Counter4 = () => {
  const [count, incrementCount, decrementCount] = useCounter3(0);

  return (
    <div className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de x em x </h3>
      <div className="flex-center gap-16">
        <button className="p-8" onClick={() => decrementCount(10)}>-</button>
        <span>{count}</span>
        <button className="p-8" onClick={() => incrementCount(10)}>+</button>
      </div>
    </div>
  );
}
