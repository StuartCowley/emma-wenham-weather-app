import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 111111,
    description: "Stub description",
    icon: "800",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        onSelect={validProps.onSelect}
        temperature={validProps.temperature}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const formattedDate = new Date(validProps.date).toDateString();
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        onSelect={validProps.onSelect}
        temperature={validProps.temperature}
      />
    );
    expect(getByText(formattedDate)).toHaveTextContent(
      "forecast-summary__date"
    );
    expect(getByText("Stub description")).toHaveTextContent(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveTextContent(
      "forecast-summary__icon"
    );
    expect(getByText("22°C")).toHaveTextContent(
      "forecast-summary__temperature"
    );
  });
});
