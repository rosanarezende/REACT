import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DetailRoute() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
