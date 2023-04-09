import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

export function PrivateRoute() {
  const { token } = useAuth();

  // quando a página de login for implementada, redirecionar para ela
  return token ? <Outlet /> : <Navigate to="/" />;
}
