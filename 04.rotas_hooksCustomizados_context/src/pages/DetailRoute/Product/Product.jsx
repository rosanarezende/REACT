import { useParams } from 'react-router-dom';
import { useFetch } from '../../../customHooks';

export default function Product() {
  const { identificador } = useParams();

  const { data: product } = useFetch(
    `https://ranekapi.origamid.dev/json/api/produto/${identificador}`
  );

  return (
    <div>
      <h1>Product</h1>
      <p>Id: {identificador}</p>
      <p>Nome: {product?.nome}</p>
    </div>
  );
}
