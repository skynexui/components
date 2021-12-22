import React from 'react';
import { GlobalStyle } from '@lib/components/provider/web/CSSReset';

interface ProviderProps {
  theme: any;
  children: any;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Provider({ theme, children }: ProviderProps) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
