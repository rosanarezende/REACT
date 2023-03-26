import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer, Header } from "./components/molecules";
import { Home, NotFound, Register } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />} />

        <Route path="/cadastro" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
