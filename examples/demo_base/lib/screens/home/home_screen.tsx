import React from 'react';
import { Box, Text, useTheme } from '@skynexui/components';

export function HomeScreen() {
  const theme = useTheme();
  const colorsPrimary = theme.colors.primary;
  const colorSelected = colorsPrimary.x500;
  const bg = colorSelected;
  return (
    <Box
      styleSheet={{
        // TODO: Standardize the default CSS between React Web and Flutter
        display: 'inline-flex',
        backgroundColor: {
          xs: bg,
        },
        margin: { xs: 50 },
        paddingBottom: { xs: 100 },
        paddingVertical: { xs: 50 },
        paddingHorizontal: { xs: 50 },
      }}
    >
      <Text styleSheet={{
        color: {
          xs: theme.colors.neutral.x999,
          sm: theme.colors.neutral.x000,
        },
      }}>SkynexUI: {colorSelected}</Text>
    </Box >
  );
}
