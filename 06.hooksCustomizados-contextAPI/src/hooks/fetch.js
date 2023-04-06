import { useState, useEffect } from "react";

// Hook customizado podem ser simples ou complexos, o importante é que sejam adequados para seu projeto


// Esse useFetch é mais simples, ele só tem o response
// Só pode ser usado para requisições GET
export const useFetch1 = (url) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json);
    };

    fetchData();
  }, [url]);

  return response;
};

// Esse useFetch é mais complexo, ele tem um loading e um error
// Pode ser usado para qualquer requisição (GET, POST, PUT, DELETE)
export const useFetch2 = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { response, error, loading };
}
