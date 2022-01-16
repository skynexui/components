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
        padding: { xs: 50 },
      }}
    >
      <Text>SkynexUI: {colorSelected}</Text>
    </Box>
  );
}
