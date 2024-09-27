import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct cit and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="UK" />
    );

    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
  it("shows error message if passed in", () => {
    const { getByText } = render(
      <LocationDetails
        city="Manchester"
        country="UK"
        errorMessage="invalid city"
      />
    );

    const element = getByText("invalid city");
    expect(element).toBeInTheDocument();
    expect(element).toBeInstanceOf(HTMLHeadingElement);
  });
});
