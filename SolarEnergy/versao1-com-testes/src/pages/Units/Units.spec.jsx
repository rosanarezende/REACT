import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Units from "./Units";

const renderComponent = () =>
  render(
    <BrowserRouter>
      <Units />
    </BrowserRouter>
  );

describe("Units", () => {
  it("should render UnitList component as default", async () => {
    renderComponent();

    const title = await screen.findByRole("heading", { name: "Lista de unidades" });
    expect(title).toBeInTheDocument();
  });

  it("should render UnitRegister component when click on button", async () => {
    renderComponent();
    const user = userEvent.setup();

    const button = screen.getByText("Nova Unidade");
    await user.click(button);

    const unitRegister = await screen.findByRole("heading", {
      name: "Cadastro de Unidade Gerada",
    });
    expect(unitRegister).toBeInTheDocument();
  });
});
