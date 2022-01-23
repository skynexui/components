/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, useTheme } from '@skynexui/components';

export const Canvas = ({ children }: any) => children;
export function Story({ children, args }: any) {
  const theme = useTheme();
  if (typeof children === 'function') {
    return (
      <Box
        styleSheet={{
          borderRadius: '5px',
          width: theme.space['x1/1'],
          backgroundColor: theme.colors.neutral['050'],
          marginVertical: theme.space.x4,
          padding: theme.space.x4,
        }}
      >
        {children(args)}
      </Box>
    );
  }
  return children;
}
export const ArgsTable = () => '';
