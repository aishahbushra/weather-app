import React from "react";
import { render, getByTestId } from "@testing-library/react";
import ForecastSummary from "../components/forecast-summary";

describe("ForecastSummary", () => {

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="200"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

it("renders the correct props", () => {
    const { getByText } = render(
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="200"
      />
    );

    expect(getByTestId("date-id")).toHaveClass("date");
    expect(getByText("mockTemperature")).toHaveClass("temperature");
    expect(getByText("mockDescription")).toHaveClass("description");
    expect(getByText("200")).toHaveClass("icon");
  });
});