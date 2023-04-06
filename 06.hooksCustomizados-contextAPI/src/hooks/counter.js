import { useState, useEffect } from "react";

export const useCounter1 = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return { count, incrementCount, decrementCount };
}

// Permite passar o incremento e decremento no estado inicial do hook
export const useCounter2 = (initialValue = 0, increment = 1, decrement = 1) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount(count + increment);
  const decrementCount = () => setCount(count - decrement);

  return { count, incrementCount, decrementCount };
}


// Permite passar o incremento e decremento no estado inicial do hook e também no momento de incrementar e decrementar
export const useCounter3 = (initialValue = 0, increment = 1, decrement = 1) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = value => setCount(count + (value || increment));
  const decrementCount = value => setCount(count - (value || decrement));

  return { count, incrementCount, decrementCount };
}
