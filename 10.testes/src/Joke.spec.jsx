import { render, screen } from "@testing-library/react";
import Joke from "./Joke";

const mockData = {
  value: "O que é, o que é? Cai em pé e corre deitado? R: A chuva.",
};

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mockData) })
);

describe("Joke", () => {
  it("should display a joke", async () => {
    render(<Joke />);

    const joke = await screen.findByText(mockData.value);
    expect(joke).toBeInTheDocument();
  });
});
