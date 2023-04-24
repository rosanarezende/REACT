import { useState, useEffect } from "react";

export const useFetch = (urlParam) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [urlParam]);

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

  const getData = async () => await fetchData(urlParam, "GET");

  const postData = async (url, body) => {
    await fetchData(url, "POST", body);
    getData();
  }

  const putData = async (url, body) => {
    await fetchData(url, "PUT", body);
    getData();
  }

  const deleteData = async (url) => {
    await fetchData(url, "DELETE");
    getData();
  }

  return { data, error, loading, getData, postData, putData, deleteData };
};
