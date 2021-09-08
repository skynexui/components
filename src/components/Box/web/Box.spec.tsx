import React from "react";
import { render, screen } from "../../../test/testSetup/web";
import Box from ".";

describe("<Box />", () => {
  it("renders as expected", () => {
    render(<Box as={{ web: "main", mobile: "ScrollView" }}>This is a Box</Box>);
    expect(screen.getByText("This is a Box")).toBeInTheDocument();
  });
});
