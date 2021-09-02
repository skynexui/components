import React from 'react';
import UIThemeProvider from './base';
import GlobalStyle from '../../web/GlobalStyle';

interface UIThemeProviderWebProps {
  children: React.ReactNode;
}
export default function UIThemeProviderWeb({ children }: UIThemeProviderWebProps) {
  return (
    <UIThemeProvider platform="web">
      <GlobalStyle />
      {children}
    </UIThemeProvider>
  );
}
