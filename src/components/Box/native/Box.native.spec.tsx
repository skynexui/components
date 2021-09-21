import React from "react";
import renderer from "react-test-renderer";
import UIThemeProvider from "../../../theme/provider/UIThemeProvider/base";
import Box from ".";

const rendererWithTheme = (ui: JSX.Element) =>
  renderer.create(<UIThemeProvider platform="mobile">{ui}</UIThemeProvider>);

describe("Box", () => {
  test("renders correctly", () => {
    const tree = rendererWithTheme(
      <Box
        as={{ web: "main", mobile: "ScrollView" }}
        flex="1"
        background="neutral100"
        paddingTop="x20"
        paddingX="x4"
      >
        Welcome to @skynexui!
      </Box>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
