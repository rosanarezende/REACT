// https://testing-library.com/docs/example-react-router
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Navbar from "./Navbar";
import {BrowserRouter} from 'react-router-dom'

const renderComponent = () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  // Teste se o componente é renderizado corretamente
  it("should render Navbar component", () => {
    renderComponent();

    const logo = screen.getByAltText("Solar Energy logo");
    expect(logo).toBeInTheDocument();
  });

  // Testa se a página renderiza com o botão da rota default selecionado
  it("should render with default route", () => {
    renderComponent();

    const dashboardButton = screen.getByText("Dashboard").closest("button");
    const unitButton = screen.getByText("Unidades").closest("button");
    const registerButton = screen.getByText("Cadastro de energia gerada").closest("button");

    expect(dashboardButton).toHaveClass("selected");
    expect(unitButton).not.toHaveClass("selected");
    expect(registerButton).not.toHaveClass("selected");
  });

  // Testa se a página é alterada quando clica em algum botão
  it("should change page when click on button", async () => {
    renderComponent();
    const user = userEvent.setup()

    const unitButton = screen.getByText("Unidades").closest("button");
    await user.click(unitButton)
    expect(unitButton).toHaveClass("selected");

    const dashboardButton = screen.getByText("Dashboard").closest("button");
    await user.click(dashboardButton)
    expect(dashboardButton).toHaveClass("selected");

    const registerButton = screen.getByText("Cadastro de energia gerada").closest("button");
    await user.click(registerButton)
    expect(registerButton).toHaveClass("selected");
  });

  // Testa se a página é alterada para a default quando clica no logo
  it("should change page to default when click on logo", async () => {
    renderComponent();
    const user = userEvent.setup()

    const logo = screen.getByAltText("Solar Energy logo");
    await user.click(logo)

    const dashboardButton = screen.getByText("Dashboard").closest("button");
    expect(dashboardButton).toHaveClass("selected");
  });
});
