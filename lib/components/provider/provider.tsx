import React from 'react';

interface ProviderProps {
  theme: any;
  children: any;
}
export const Provider = ({ theme, children }: ProviderProps) => {
  return (
    <>
      {children}
    </>
  );
}