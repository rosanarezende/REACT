import { useParams } from 'react-router-dom';

export default function Product() {
  const { identificador } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${identificador}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, [identificador]);

  return (
    <div>
      <h1>Product</h1>
      <p>Id: {identificador}</p>
      <p>Nome: {product?.nome}</p>
    </div>
  );
}
