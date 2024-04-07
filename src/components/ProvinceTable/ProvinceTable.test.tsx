import React from "react";
import { render } from "@testing-library/react";
import ProvinceTable from "./index";

describe("ProvinceTable component", () => {
  const sampleData = [
    {
      date: "2024-04-01",
      last_update: "2024-04-02",
      confirmed: 1000,
      confirmed_diff: 50,
      deaths: 50,
      deaths_diff: 10,
      recovered: 800,
      recovered_diff: 30,
      active: 150,
      active_diff: 10,
      fatality_rate: 0.05,
      region: {
        province: "Ontario",
        lat: "51.253",
        long: "-85.32",
        name: "Canada",
        cities: [],
      },
    },
    {
      date: "2024-04-01",
      last_update: "2024-04-02",
      confirmed: 1500,
      confirmed_diff: 100,
      deaths: 100,
      deaths_diff: 20,
      recovered: 1200,
      recovered_diff: 50,
      active: 200,
      active_diff: 30,
      fatality_rate: 0.07,
      region: {
        province: "Quebec",
        lat: "46.813878",
        long: "-71.207981",
        name: "Canada",
        cities: [],
      },
    },
  ];

  test("renders table with correct data", () => {
    const { getByText, getByRole } = render(
      <ProvinceTable countryData={sampleData} />,
    );

    // Check if province names are rendered
    expect(getByText("Ontario")).toBeInTheDocument();
    expect(getByText("Quebec")).toBeInTheDocument();

    // Check if other data is rendered
    expect(
      getByRole("link", { name: "📍 51.253, -85.32" }),
    ).toBeInTheDocument();
    expect(getByText("1.000")).toBeInTheDocument();
    expect(getByText("50")).toBeInTheDocument();
    expect(getByText("1.500")).toBeInTheDocument();
    expect(getByText("100")).toBeInTheDocument();
    expect(getByText("5.00%")).toBeInTheDocument();
    expect(getByText("7.00%")).toBeInTheDocument();
  });
});
