import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components";
import { Contact, Home, Login, NotFound, Register, Trip } from "../pages";

// apenas para exemplificar hooks customizados
import { Contact1, Contact2, Contact3, Contact4 } from "../pages"

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
          <Route path="/contact1" element={<Contact1 />} />
          <Route path="/contact2" element={<Contact2 />} />
          <Route path="/contact3" element={<Contact3 />} />
          <Route path="/contact4" element={<Contact4 />} />

          <Route path="/trip/:identifier" element={<Trip />} />

          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </Layout>
    </BrowserRouter>
  );
}
