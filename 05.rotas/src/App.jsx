import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from './pages/Products/Products'
import Register from './pages/Register/Register'

import NotFound from './pages/NotFound/NotFound'
import Product from "./pages/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:idDoProduto" element={ <Product/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
