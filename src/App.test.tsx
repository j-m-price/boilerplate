import { render, screen } from "@testing-library/react";
import App from "./App";
import { CountProvider } from "./contexts/CountContext";

test("renders Primer welcome", () => {
  render(
    <CountProvider>
      <App />
    </CountProvider>
  );
  const primerElement = screen.getByText(/Primer React Challenge Boilerplate/i);
  expect(primerElement).toBeInTheDocument();
});
