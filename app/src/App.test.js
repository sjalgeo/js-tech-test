import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn project title", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Connecting.../i);
  expect(headerElement).toBeInTheDocument();
});
