import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks';

export function ProductDetail() {
  const { data: product, getData } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    getData(`http://localhost:3001/products/${id}`);
  }, [id]);

  return (
    <main>
      <h2>Detalhes de {product.name}</h2>
      <p>{product.description}</p>
      <p>{`Preço: R$ ${product?.price?.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`}</p>
      <img src={product.image} alt={product.description} />
    </main>
  )
}
