import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import UIThemeProvider from "../../../theme/provider/UIThemeProvider/base";

const AllTheProviders: React.FC = ({ children }) => (
  <UIThemeProvider platform="web">{children}</UIThemeProvider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
