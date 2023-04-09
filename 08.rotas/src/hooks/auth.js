import { useState, useEffect } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    setToken(token);
    window.localStorage.setItem('token', token);
  };

  const logout = () => {
    setToken(null);
    window.localStorage.removeItem('token');
  };

  return { token, login, logout, loading };
};
