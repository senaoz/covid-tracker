import { render } from "@testing-library/react";
import MapPage from "./MapPage";

describe("MapPage", () => {
  test("Inculudes title", () => {
    const { getByText } = render(<MapPage />);
    expect(getByText("COVID-19 Tracker")).toBeInTheDocument();
  });

  test("Inculudes welcome message", () => {
    const { getByText } = render(<MapPage />);
    expect(getByText("Welcome to the COVID-19 Tracker!")).toBeInTheDocument();
  });

  test("Inculudes information about the virus", () => {
    const { getByText } = render(<MapPage />);
    expect(
      getByText(
        "COVID-19 is a respiratory illness caused by a virus called SARS-CoV-2. Symptoms often include cough, fever, and difficulty breathing. Symptoms range from mild to severe and can be fatal. The virus is spread through respiratory droplets when an infected person talks, coughs, or sneezes. To protect yourself and others, wear a mask, practice social distancing, and wash your hands often.",
      ),
    ).toBeInTheDocument();
  });

  test("Inculudes information about the project", () => {
    const { getByText } = render(<MapPage />);
    expect(
      getByText(
        "In this project, Coronavirus COVID-19 Statistics API Based on public data by Johns Hopkins CSSE was used. It includes search by country, province, and date. Returns diff for confirmed, deaths, and recovered, compared with the previous day.",
      ),
    ).toBeInTheDocument();
  });

  test("Inculudes information about selecting date", () => {
    const { getByText } = render(<MapPage />);
    expect(getByText("Selecting Date")).toBeInTheDocument();
  });

  test("Inculudes information about using the map", () => {
    const { getByText } = render(<MapPage />);
    expect(getByText("How to use the map?")).toBeInTheDocument();
  });

  test("Inculudes the map", () => {
    const { getByTestId } = render(<MapPage />);
    expect(getByTestId("map")).toBeInTheDocument();
  });

  test("Inculudes the date picker", () => {
    const { getByTestId } = render(<MapPage />);
    expect(getByTestId("date-picker")).toBeInTheDocument();
  });
});
