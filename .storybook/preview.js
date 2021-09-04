import React from "react";
import UIThemeProvider from "../src/theme/provider/UIThemeProvider/base";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Foundation", "Components", "*"],
    },
  },
};

export const decorators = [
  (Story) => (
    <UIThemeProvider>
      <Story />
    </UIThemeProvider>
  ),
];
