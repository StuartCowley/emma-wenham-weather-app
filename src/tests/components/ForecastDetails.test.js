import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
      date: 1111111,
      temperature: {
        max: 22,
        min: 12,
      },
      description: "Clear",
      humidity: 15,
      wind: {
        speed: 15,
        direction: "n",
      },
  };  
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastDetails forecasts={validProps} />
    );

    expect(getAllByTestId("forecast-details")).toHaveLength(1);
  });
});
