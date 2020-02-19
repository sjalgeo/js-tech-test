import React from "react";
import { Router } from "react-router-dom";
import Live from "./Live";
import { renderWithContext } from "../setupTests";
import { createMemoryHistory } from "history";

describe("<Live />", () => {
  test("renders as expected", async () => {
    const { asFragment } = renderWithContext(
      <Router history={createMemoryHistory({ initialEntries: ["/"] })}>
        <Live />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
