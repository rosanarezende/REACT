import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UnitRegister from "./UnitRegister";

const setOpenForm = jest.fn();
const setSelectedUnit = jest.fn();

const renderComponent = (selectedUnit) =>
  render(
    <UnitRegister
      setOpenForm={setOpenForm}
      selectedUnit={selectedUnit}
      setSelectedUnit={setSelectedUnit}
    />
  );

describe("UnitRegister", () => {
  // independentemente de ter ou não uma selectedUnit
  describe("When render UnitRegister", () => {
    beforeEach(() => {
      renderComponent();
    });

    // Como temos testes que envolvem preencher campos, clicar em botões e etc, é necessário limpar o mock do jest para que não haja interferência entre os testes.
    afterEach(() => {
      jest.clearAllMocks();
    });

    // Testar se o componente UnitRegister é renderizado.
    test("should render UnitRegister component with title", async () => {
      const title = screen.getByText("Cadastro de Unidade Gerada");

      expect(title).toBeInTheDocument();
    });

    // Testar se ao preencher um campo obrigatório e clicar no botão "Salvar", o formulário não é submetido.
    test("should not call setOpenForm when click on button to save unit and required field is empty", async () => {
      const button = screen.getByText("Salvar");
      button.click();

      expect(setOpenForm).not.toHaveBeenCalled();
    });

    // Testar se ao preencher todos os campos e clicar no botão "Salvar", o método setOpenForm é chamado com o valor false.
    test("should call setOpenForm with false when click on button to save unit", async () => {
      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => (input.value = "teste"));

      const button = screen.getByText("Salvar");
      button.click();

      expect(setOpenForm).toHaveBeenCalledWith(false);
    });

    // Testar se ao preencher todos os campos e clicar no botão "Salvar", o método setSelectedUnit é chamado com o estado inicial = só deve funcionar se todos os campos estiverem preenchidos
    test("should call setSelectedUnit with emptyState when click on button to save unit", async () => {
      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => (input.value = "teste"));

      const button = screen.getByText("Salvar");
      button.click();

      const emptyState = {
        apelido: "",
        local: "",
        marca: "",
        modelo: "",
        ativa: false,
      };
      expect(setSelectedUnit).toHaveBeenCalledWith(emptyState);
    });

    // Testar se ao clicar na caixa de seleção "Ativo", o estado é alterado corretamente.
    test("should change ativa state when click on checkbox", async () => {
      const user = userEvent.setup();
      const checkbox = screen.getByRole("checkbox");

      await user.click(checkbox);
      expect(checkbox).toBeChecked();

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe("When selectedUnit is undefined", () => {
    beforeEach(() => {
      renderComponent();
    });

    // Testar se ao renderizar o formulário, todos os campos estão vazios.
    test("should render empty form", async () => {
      const inputs = screen.getAllByRole("textbox");

      inputs.forEach((input) => {
        expect(input).toHaveValue("");
      });
    });

    // Testar se ao preencher todos os campos e clicar no botão "Salvar", o método createUnit é chamado quando não há selectedUnit.
    test("should create new unit when click on button to save unit and selectedUnit is undefined", () => {
      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => (input.value = "teste"));

      const button = screen.getByText("Salvar");
      button.click();

      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:3333/unidades",
        expect.objectContaining({
          method: "POST",
        })
      );
    });
  });

  describe("When selectedUnit is defined", () => {
    const selectedUnit = {
      id: 1,
      apelido: "Unidade 1",
      local: "Rua 1",
      marca: "Marca 1",
      modelo: "Modelo 1",
      ativa: true,
    };

    beforeEach(() => {
      renderComponent(selectedUnit);
    });

    // Testar se ao renderizar o formulário, os campos são preenchidos com os dados da unidade selecionada.
    test("should render form with selectedUnit data", () => {
      const inputs = screen.getAllByRole("textbox");

      inputs.forEach((input) => {
        expect(input).toHaveValue(selectedUnit[input.name]);
      });
    });

    // Testar se ao preencher todos os campos e clicar no botão "Salvar", edita a unidade quando há selectedUnit.
    test("should edit unit when click on button to save unit and selectedUnit is defined", () => {
      const button = screen.getByText("Salvar");
      button.click();

      expect(fetch).toHaveBeenCalledWith(
        `http://localhost:3333/unidades/${selectedUnit.id}`,
        expect.objectContaining({
          method: "PUT",
        })
      );
    });
  });
});
