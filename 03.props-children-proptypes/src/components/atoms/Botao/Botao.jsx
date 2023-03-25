import './Botao.css';

export default function Botao({ danger, children }) {

  return (
    <button className={danger ? "danger" : "default"}>
      {children}
    </button>
  );
}
