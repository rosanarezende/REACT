import { render, screen, act } from "@testing-library/react";
import UnitList from "./UnitList";

describe("UnitList", () => {
  test("should render UnitList component", async () => {
    await act(async () => {
      render(<UnitList setOpenForm={jest.fn()} setSelectedUnit={jest.fn()} />);
    });

    expect(screen.getByText("Lista de unidades")).toBeInTheDocument();
  });
});
