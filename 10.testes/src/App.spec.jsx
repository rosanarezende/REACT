import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display elements", () => {
    render(<App />);

    const title = screen.getByRole("heading", { name: /vite \+ react/i });
    expect(title).toBeInTheDocument();

    const reactLogo = screen.getByRole("img", { name: /react logo/i });
    expect(reactLogo).toBeInTheDocument();
  });

  it("should increment count on click", () => {
    render(<App />);
    const counter = screen.getByRole("button", {
      name: /Contador:/i,
    });
    expect(counter.textContent).toBe("Contador: 0");

    fireEvent.click(counter);
    expect(counter.textContent).toBe("Contador: 1");
  });
});
