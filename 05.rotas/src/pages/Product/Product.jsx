import { useParams } from "react-router-dom";
import { products } from "../../db/products";

export default function Product() {
  const { idDoProduto } = useParams()
  const produtoEncontrado = products.find(product => product.id === Number(idDoProduto))

  return (
    <div className="page">
      <h2>{produtoEncontrado.name}</h2>
      <p>Preço: {produtoEncontrado.price}</p>
    </div>
  );
}
