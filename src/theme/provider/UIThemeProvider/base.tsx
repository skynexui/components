import React from 'react';
import { ThemeProvider } from 'styled-components';
import createTheme from '@src/theme/createTheme';
import { Platforms } from '@src/theme/types/Platforms';

interface UIThemeProviderProps {
  platform: Platforms
  children: React.ReactNode;
}
export default function UIThemeProvider({
  children,
  platform,
}: UIThemeProviderProps): JSX.Element {
  const theme = createTheme('light', platform);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
