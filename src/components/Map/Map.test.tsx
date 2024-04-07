import React from "react";
import { render } from "@testing-library/react";
import WorldMap from "./index";

describe("WorldMap component", () => {
  test("contains a map", async () => {
    const { getByTestId } = render(<WorldMap />);
    expect(getByTestId("map")).toBeInTheDocument();
  });

  test("Data cards are rendered", async () => {
    const { getAllByTestId, getByText } = render(<WorldMap />);
    const dataCards = getAllByTestId("data-card");
    expect(dataCards).toHaveLength(2);
  });
});
