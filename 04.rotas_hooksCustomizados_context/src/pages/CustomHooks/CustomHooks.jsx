import { useState } from "react";
import "./CustomHooks.css";
import { Counter, LoginForm, LoginForm2 } from "../../components";
import ContadorDaMaristela from "./ContadorDaMaristela";

const useContador = (valorInicial = 0, valorParaIncrementar = 1, valorParaDecrementar = 1) => {
  const [numero, setNumero] = useState(valorInicial);

  const incrementar = () => {
    setNumero(numero + valorParaIncrementar);
  };

  const decrementar = () => {
    setNumero(numero - valorParaDecrementar);
  };

  return [numero, incrementar, decrementar];
};

const useContador2 = (
  valorInicial = 0,
  valorParaIncrementar = 1,
  valorParaDecrementar = 1
) => {
  const [numero, setNumero] = useState(valorInicial);

  const incrementar = () => {
    setNumero(numero + valorParaIncrementar);
  };

  const decrementar = () => {
    setNumero(numero - valorParaDecrementar);
  };

  return { numero, incrementar, decrementar };
};

export default function CustomHooks() {
  // === com hook costumizado ===
  const [numero3, incrementar3, decrementar3] = useContador(100, 50, 25);
  const [numero4, incrementar4, decrementar4] = useContador(0, 1, 1);

  const {
    numero: numero5,
    incrementar: incrementar5,
    decrementar: decrementar5,
  } = useContador2(0, 1, 1);

  const [numero6, , decrementar6] = useContador(0, 1, 1);
  const { numero: numero7, decrementar: decrementar7 } = useContador2(200);
  const {numero : numero8 } = useContador2(80, 5, 5);

  // === sem hook customizado ===
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(2);

  const decrementar = () => {
    setNumero(numero - 1);
  };

  const decrementar2 = () => {
    setNumero2(numero2 - 2);
  };

  const incrementar = () => {
    setNumero(numero + 1);
  };

  const incrementar2 = () => {
    setNumero2(numero2 + 2);
  };

  return (
    <div className="custom-hooks">
      <div className="contadores">
        <h3>Contadores</h3>
        <ContadorDaMaristela />

        {/* 
        <h4>Contador 0</h4>
        <div>
          <button onClick={decrementar}>-</button>
          <span>{numero}</span>
          <button onClick={incrementar}>+</button>
        </div>

        <h4>Contador 2</h4>
        <div>
          <button onClick={decrementar2}>-</button>
          <span>{numero2}</span>
          <button onClick={incrementar2}>+</button>
        </div>

        <h4>Contador 3</h4>
        <Counter
          count={numero3}
          increment={incrementar3}
          decrement={decrementar3}
        />

        <h4>Contador 4</h4>
        <Counter
          count={numero4}
          increment={incrementar4}
          decrement={decrementar4}
        />
        <p>se usar o mesmo estado, um afeta o outro</p>
        <Counter
          count={numero4}
          increment={incrementar4}
          decrement={decrementar4}
        /> */}

        {/* <h4>Contador 5</h4>
        <Counter
          count={numero5}
          increment={incrementar5}
          decrement={decrementar5}
        /> */}

        {/* <h4>Contador 6</h4>
        <div>
          <button onClick={decrementar6}>-</button>
          <span>{numero6}</span>
        </div>

        <h4>Contador 7</h4>
        <div>
          <button onClick={decrementar7}>-</button>
          <span>{numero7}</span>
        </div>

        <h4>Contador 8</h4>
        <div>
          <button>-</button>
          <span>{numero8}</span>
          <button>+</button>
        </div> */}

      </div>

      <div className="formularios">
        <h3>Formulário de login</h3>
        {/* <LoginForm /> */}
        <LoginForm2 />
      </div>
    </div>
  );
}
