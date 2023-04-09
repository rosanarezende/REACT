import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/molecules";
import { Home, NotFound, ProductDetail, Profile } from "./components/pages";
import { PrivateRoute } from "./utils";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Navigate replace to="/" />} />

        {/* rota privada */}
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* detalhes */}
        <Route path="product/:id" element={<ProductDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}
