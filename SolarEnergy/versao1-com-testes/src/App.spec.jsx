import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders Dashboard component when path is /", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const dashboardTitle = await screen.findByRole("heading", { name: "Dashboard" });

    expect(dashboardTitle).toBeInTheDocument();
  });

  it("renders Units component when path is /unidades", async() => {
    render(
      <MemoryRouter initialEntries={["/unidades"]}>
        <App />
      </MemoryRouter>
    );

    const unitsTitle = await screen.findByRole("heading", { name: "Unidades" });

    expect(unitsTitle).toBeInTheDocument();
  });

  it("renders GeneratedEnergyRegistration component when path is /cadastro", async () => {
    render(
      <MemoryRouter initialEntries={["/cadastro"]}>
        <App />
      </MemoryRouter>
    );

    const registrationTitle = await screen.findByRole("heading", {
      name: "Lançamento de geração mensal",
    });

    expect(registrationTitle).toBeInTheDocument();
  });

  it("renders 'Rota não encontrada' component when path is invalid", async () => {
    render(
      <MemoryRouter initialEntries={["/pagina-invalida"]}>
        <App />
      </MemoryRouter>
    );

    const notFoundTitle = await screen.findByRole("heading", {
      name: "Rota não encontrada",
    });

    expect(notFoundTitle).toBeInTheDocument();
  });
});
