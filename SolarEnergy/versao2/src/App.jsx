import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Login, Dashboard, MonthlyGenerationRegister, Units } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Navigate to="/" />} />

          <Route path="/unidades" element={<Units />} />

          <Route path="/cadastro" element={<MonthlyGenerationRegister />} />
        </Route>

        <Route path="*" element={<div>Não encontrado</div>} />
      </Routes>
    </BrowserRouter>
  );
}

function PrivateRoute() {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
}
