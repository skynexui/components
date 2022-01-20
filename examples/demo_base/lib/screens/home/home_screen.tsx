import React from 'react';
import { Box, Text, useTheme } from '@skynexui/components';

// TODO: Create a `Scaffold` component that handles these styles
const GlobalStyle = () => {
  return (
    <style jsx global>{`
      html {
        height: 100%;
      }

      body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
      }
      #__next {
        display: flex;
        flex: 1;
        flex-direction: row;
      }
    `}</style>
  );
}

export function HomeScreen() {
  const theme = useTheme();
  const colorsPrimary = theme.colors.primary;
  const colorSelected = colorsPrimary.x500;
  const bg = colorSelected;
  return (
    <Box
      styleSheet={{
        // TODO: Standardize the default CSS between React Web and Flutter
        display: 'flex',
        alignSelf: 'start', // ganha com o flexDirection: 'row'
        flex: 1, // ganha flex 1 com o flexDirection: 'row'
        // ===============================================================
        flexDirection: 'row',
        alignItems: {
          xs: 'center',
        },
        justifyContent: {
          xs: 'flex-end',
        },
        backgroundColor: {
          xs: bg,
        },
        margin: { xs: 50 },
        // TODO: Fix padding bottom implementation to match Flutter
        paddingVertical: { xs: 50 },
        paddingHorizontal: { xs: 50 },
        paddingBottom: { xs: 100 },
      }}
    >
      <Text styleSheet={{
        display: 'flex',
        backgroundColor: {
          xs: theme.colors.positive.x200,
        },
        color: {
          // TODO: Fix theme colors
          xs: theme.colors.neutral.x999,
          sm: theme.colors.neutral.x000,
        },
      }}>React - SkynexUI: {colorSelected}</Text>
      <Text styleSheet={{
        display: 'flex',
        color: {
          xs: theme.colors.neutral.x999,
          sm: theme.colors.neutral.x000,
        },
      }}>Second text</Text>
      <GlobalStyle />
    </Box >
  );
}
