import './Doce.css'

export default function Doce({ nome, preco, descricao }) {
  return (
    <div className="doce">
      <h4>{nome}</h4>
      <p>{descricao}</p>
      <p>R$ {preco}</p>
    </div>
  );
}

export function Doce2({ doce }) {
  return (
    <div className="doce">
      <h4>{doce.nome}</h4>
      <p>{doce.descricao}</p>
      <p>R$ {doce.preco}</p>
    </div>
  );
}
