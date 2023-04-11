import { useState, useEffect } from "react";
import { useFetch1, useFetch2, useFetch3 } from "hooks";
import { ProductList } from "components/molecules";

// sem custom hook
export const Fetch = () => {
  const [products, setProducts] = useState(null);

  const getData = () => {
    fetch("http://localhost:3005/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => getData(), []);

  const handleDelete = (product) => {
    fetch(`http://localhost:3005/products/${product.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => getData());
  };

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Sem custom hook</h3>
      <ProductList products={products} deleteProduct={handleDelete} />
    </section>
  );
};

// com custom hook
export const Fetch1 = () => {
  const [products, refetch] = useFetch1("http://localhost:3005/products");

  const handleDelete = (product) => {
    fetch(`http://localhost:3005/products/${product.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => refetch());
  };

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook bem simples</h3>
      <ProductList products={products} deleteProduct={handleDelete} />
    </section>
  );
};

export const Fetch2 = () => {
  const [data, error, loading, refetch] = useFetch2(
    "http://localhost:3005/products"
  );

  const handleDelete = (product) => {
    fetch(`http://localhost:3005/products/${product.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    refetch();
  };

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook mais reaproveitável</h3>
      <ProductList
        products={data}
        loading={loading}
        error={error}
        deleteProduct={handleDelete}
      />
    </section>
  );
};

export const Fetch3 = () => {
  const { data, error, loading, getData, deleteData } = useFetch3(
    "http://localhost:3005/products"
  );

  const handleDelete = (product) => {
    deleteData(`http://localhost:3005/products/${product.id}`);
    getData();
  };

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook mais reaproveitável</h3>
      <ProductList
        products={data}
        loading={loading}
        error={error}
        deleteProduct={handleDelete}
      />
    </section>
  );
};
