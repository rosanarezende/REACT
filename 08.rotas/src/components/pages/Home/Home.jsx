import { useState, useEffect } from 'react'
import "./Home.css"
import { Product } from '../../molecules'

export function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3003/products')
      .then((response) => response.json())
      .then((json) => setProducts(json))
  }, [])

  return (
    <main className='Home'>
      <h2>Home</h2>
      <div className='products'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
