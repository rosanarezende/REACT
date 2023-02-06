import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components";
import { Contact, Home, Login, NotFound, Register, Trip } from "../pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate replace to="/" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/trip/:identifier" element={<Trip />} />

          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </Layout>
    </BrowserRouter>
  );
}
