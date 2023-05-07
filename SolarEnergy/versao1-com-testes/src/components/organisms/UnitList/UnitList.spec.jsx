import { render, screen, act, waitFor } from "@testing-library/react";
import UnitList from "./UnitList";

const setOpenForm = jest.fn();
const setSelectedUnit = jest.fn();

const renderComponent = async () => {
  await act(async () => {
    render(
      <UnitList setOpenForm={setOpenForm} setSelectedUnit={setSelectedUnit} />
    );
  });
};

const testColumnPresence = (column) => {
  column.forEach((column) => {
    expect(screen.getByText(column)).toBeInTheDocument();
  });
};

describe("UnitList", () => {
  beforeEach(async () => {
    await renderComponent();
    setOpenForm.mockClear();
    setSelectedUnit.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render UnitList component", async () => {
    expect(screen.getByText("Lista de unidades")).toBeInTheDocument();
  });

  test("should render table with units", async () => {
    const tableHeadColumns = ["ID", "Apelido", "Local", "Marca", "Modelo"];
    const tableBodyFirstRow = [
      "1",
      "Unidade 1",
      "Rua 1",
      "Marca 1",
      "Modelo 1",
    ];

    testColumnPresence(tableHeadColumns);
    testColumnPresence(tableBodyFirstRow);
  });

  describe("New Unit Button", () => {
    test("should render button to create new unit", async () => {
      const button = screen.getByText("Nova Unidade");

      expect(button).toBeInTheDocument();
    });

    test("should call setOpenForm when click on button to create new unit", async () => {
      const button = screen.getByText("Nova Unidade");
      button.click();

      expect(setOpenForm).toHaveBeenCalled();
    });
  });

  describe("Edit Unit Button", () => {
    test("should render button to edit unit", async () => {
      const editButton = screen.getAllByText("Editar")[0];

      expect(editButton).toBeInTheDocument();
    });

    test("should call setSelectedUnit with unit data when click on button to edit unit", async () => {
      const editButton = screen.getAllByText("Editar")[0];
      editButton.click();

      expect(setSelectedUnit).toHaveBeenCalledWith({
        id: 1,
        apelido: "Unidade 1",
        local: "Rua 1",
        marca: "Marca 1",
        modelo: "Modelo 1",
        ativa: true,
      });
    });

    test("should call setOpenForm when click on button to edit unit", async () => {
      const editButton = screen.getAllByText("Editar")[0];
      editButton.click();

      expect(setOpenForm).toHaveBeenCalledWith(true);
    });
  });

  describe("Delete Unit Button", () => {
    test("should render button to delete unit", async () => {
      const deleteButton = screen.getAllByText("Remover")[0];

      expect(deleteButton).toBeInTheDocument();
    });

    test("should remove unit from table when click on button to delete unit", async () => {
      const deleteButton = screen.getAllByText("Remover")[0];
      deleteButton.click();

      expect(fetch).toHaveBeenCalledWith("http://localhost:3333/unidades/1", {
        method: "DELETE",
      });

      expect(fetch).toHaveBeenCalledWith("http://localhost:3333/unidades");
    });
  });
});
