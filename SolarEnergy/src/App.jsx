import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, Dashboard} from './pages'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Navigate to="/" />} />

        <Route path="*" element={<div>Não encontrado</div>} />
      </Routes>
    </BrowserRouter>
  )
}
