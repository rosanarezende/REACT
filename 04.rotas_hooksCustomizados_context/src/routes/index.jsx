import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "../App";
import { Layout } from "../components";
import { Composition, Context, CustomHooks, DetailRoute } from "../pages";
import Product from "../pages/DetailRoute/Product/Product";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Navigate replace to="/" />} />

          <Route path="/custom-hooks" element={<CustomHooks />} />
          <Route path="/composition" element={<Composition />} />
          <Route path="/context" element={<Context />} />

          <Route path="/product" element={<DetailRoute />} />
          <Route path="/product/:identifier" element={<Product />} />

          <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
