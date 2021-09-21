import React from "react";
import { render, screen } from "../../../test/testSetup/web";
import Box from ".";

describe("<Box />", () => {
  it("renders as expected", () => {
    render(
      <Box
        as={{ web: "main", mobile: "ScrollView" }}
        flex="1"
        background="neutral100"
        paddingTop="x20"
        paddingX="x4"
      >
        Welcome to @skynexui
      </Box>
    );
    expect(screen.getByText("Welcome to @skynexui")).toBeInTheDocument();
  });
});
