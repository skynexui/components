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
        flex-direction: row;
      }
    `}</style>
  );
}

export function HomeScreen() {
  const theme = useTheme();
  const colorsneutral = theme.colors.neutral;
  const colorSelected = colorsneutral.x100;
  const bg = colorSelected;
  return (
    <Box
      styleSheet={{
        width: { xs: '500px' },
        flexDirection: 'row',
        crossAxisAlignment: { xs: 'center' }, // alignItems
        mainAxisAlignment: { xs: 'flex-start' }, // justifyContent
        backgroundColor: {
          xs: bg,
        },
        margin: { xs: 50 },
        paddingVertical: { xs: 50 },
        paddingHorizontal: { xs: 50 },
        // TODO: Fix padding bottom implementation to match Flutter
        paddingBottom: { xs: 100 },
      }}
    >
      {/* <GridDisplay
        styleSheet={{
          backgroundColor: 'red',
        }}
      /> */}
      <GlobalStyle />
    </Box >
  );
}
