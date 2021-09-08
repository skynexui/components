import React from "react";
import { ThemeProvider as ThemeProviderNative } from "styled-components/native";
import { ThemeProvider as ThemeProviderWeb } from "styled-components";
import createTheme from "../../../theme/createTheme";
import { Platforms } from "../../../theme/types/Platforms";

interface UIThemeProviderProps {
  platform: Platforms;
  children: React.ReactNode;
}
export default function UIThemeProvider({
  children,
  platform,
}: UIThemeProviderProps): JSX.Element {
  const theme = createTheme("light", platform);

  if (platform === "mobile") {
    return <ThemeProviderNative theme={theme}>{children}</ThemeProviderNative>;
  }

  return <ThemeProviderWeb theme={theme}>{children}</ThemeProviderWeb>;
}
