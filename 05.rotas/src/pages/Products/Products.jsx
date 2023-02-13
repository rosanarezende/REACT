import { useNavigate } from "react-router-dom";
import { products } from "../../db/products";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Produtos</h2>

      <div>
        {products.map((product) => (
          <button key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >{product.name}</button>
        ))}
      </div>
    </div>
  );
}
