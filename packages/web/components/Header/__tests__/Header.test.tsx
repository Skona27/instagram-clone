import React from "react";
import { matchers } from "jest-emotion";
import { render } from "@testing-library/react";

expect.extend(matchers);

describe("Header", () => {
  it("should render without error", () => {
    const { container, getByText } = render(
      <div style={{ padding: "20px" }}>Siema</div>
    );

    expect(container).toBeDefined();
    // expect(getByText("Siema")).toHaveStyleRule("padding", "20px");
  });
});
