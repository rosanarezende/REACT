import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Product, Header } from './components/molecules'
import { Composition, Context, DetailRoute, Home } from "./components/pages";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate replace to="/" />} />

          <Route path="/composition" element={<Composition />} />
          <Route path="/context" element={<Context />} />

          <Route path="/products" element={<DetailRoute />} />
          <Route path="/products/:identificador" element={<Product />} />

          <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
