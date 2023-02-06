import { Link } from 'react-router-dom';
import { useFetch } from '../../customHooks';

export default function DetailRoute() {

  const { data: products } = useFetch(
    'https://ranekapi.origamid.dev/json/api/produto',
  );

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
