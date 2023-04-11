import { useState, useEffect } from "react";

// Hook customizado podem ser simples ou complexos, o importante é que sejam adequados para seu projeto

// Esse useFetch é mais simples, ele só tem o data
// Só pode ser usado para requisições GET
export const useFetch1 = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  return data;
};

// Esse useFetch é um pouco mais completo, ele tem um loading e um error
// Também tem um refetch, que é uma função que pode ser chamada para refazer a requisição
export const useFetch2 = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return [data, error, loading, refetch];
};


// Esse fetch nos permite fazer requisições de forma mais simples
export const useFetch3 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, method, body) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();

      if (method !== "DELETE") setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getData = async (url) => await fetchData(url, "GET");

  const postData = async (url, body) => await fetchData(url, "POST", body);

  const putData = async (url, body) => await fetchData(url, "PUT", body);

  // É sempre possível adaptar o código para atender as necessidades do projeto, como por exemplo:
  // toda vez que o método DELETE for chamado, o método getData também será chamado
  const deleteData = async (url) => await fetchData(url, "DELETE");

  return { data, error, loading, getData, postData, putData, deleteData };
};
