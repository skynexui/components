import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

interface AllTheProvidersProps {
  children: ReactElement;
}
function AllTheProviders({ children }: AllTheProvidersProps) {
  return <main>{children}</main>;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
