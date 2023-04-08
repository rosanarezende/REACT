import { useState, useEffect } from "react";
import { useFetch1, useFetch2, useFetch3 } from 'hooks'
import { ProductList } from "components/molecules";

// sem custom hook
export const Fetch = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3005/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex-column flex-center gap-16">
      <h3>Sem custom hook</h3>
      <ProductList products={products} loading={loading} />
    </div>
  );
};

// com custom hook
export const Fetch1 = () => {
  const products = useFetch1("http://localhost:3005/products");

  return (
    <div className="flex-column flex-center gap-16">
      <h3>Com custom hook bem simples</h3>
      <ProductList products={products} />
    </div>
  )
}

export const Fetch2 = () => {
  const [data, error, loading, refetch] = useFetch2("http://localhost:3005/products");

  const handleDelete = (product) => {
    fetch(`http://localhost:3005/products/${product.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <div className="flex-column flex-center gap-16">
      <h3>Com custom hook mais reaproveitável</h3>
      <ProductList
        products={data}
        loading={loading}
        error={error}
        refetch={refetch}
        deleteProduct={handleDelete}
      />
    </div>
  )
}



export const Fetch3 = () => {
  const { data, error, loading, getData, deleteData } = useFetch3();

  const fetchProducts = () => {
    getData('http://localhost:3005/products');
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const handleDelete = (product) => {
    deleteData(`http://localhost:3005/products/${product.id}`);
    fetchProducts();
  }

  return (
    <div className="flex-column flex-center gap-16">
      <h3>Com custom hook mais reaproveitável</h3>
      <ProductList
        products={data}
        loading={loading}
        error={error}
        deleteProduct={handleDelete}
      />
    </div>
  )
}
