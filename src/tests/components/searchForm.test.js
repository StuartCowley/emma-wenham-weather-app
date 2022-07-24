import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("Search Form", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText=""
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("button displays correct text", () => {
    const { getByText } = render(
      <SearchForm
        searchText=""
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
    );

    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });
});
