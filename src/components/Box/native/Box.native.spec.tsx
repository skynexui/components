import React from "react";
import renderer from "react-test-renderer";
import UIThemeProvider from "../../../theme/provider/UIThemeProvider/base";
import Box from ".";

describe("Box", () => {
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <UIThemeProvider platform="mobile">
          <Box as={{ web: "main", mobile: "ScrollView" }}>Native box</Box>
        </UIThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
