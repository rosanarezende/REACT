import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function ProductDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3003/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
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
