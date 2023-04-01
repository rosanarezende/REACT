import './Botao.css';

export default function Botao({ danger, children }) {

  return (
    <button className={`botao ${danger ? "danger" : "default"}`}>
      {children}
    </button>
  );
}
