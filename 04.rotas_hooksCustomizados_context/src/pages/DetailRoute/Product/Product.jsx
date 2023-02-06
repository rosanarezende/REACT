import { useParams } from 'react-router-dom';
import { useFetch } from '../../../customHooks';

export default function Product() {
  const { identifier } = useParams();

  const { data: product } = useFetch(
    `https://ranekapi.origamid.dev/json/api/produto/${identifier}`
  );

  return (
    <div>
      <h1>Product</h1>
      <p>Id: {identifier}</p>
      <p>Nome: {product?.nome}</p>
    </div>
  );
}
