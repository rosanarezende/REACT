import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '../context/user';

export function PrivateRoute() {
  const { isLogged } = useUserContext();

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
}
