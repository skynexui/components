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
        margin: { xs: '50px' },
        paddingVertical: { xs: '50px' },
        paddingHorizontal: { xs: '50px' },
        // TODO: Fix padding bottom implementation to match Flutter
        paddingBottom: { xs: '100px' },
      }}
    >
      <Text styleSheet={{
        // width: {xs: 50},
        height: {xs: 50},
        backgroundColor: {xs: theme.colors.primary.x400 },
      }}>
        Box 01
      </Text>
      <Text styleSheet={{
        // width: {xs: 50},
        flex: {xs: 2},
        height: {xs: '50px'},
        backgroundColor: {xs: theme.colors.accent.x400 },
      }}>
        Box 02
      </Text>
      <Text styleSheet={{
        // width: {xs: 50},
        flex: {xs: 3},
        height: {xs: '50px'},
        backgroundColor: {xs: theme.colors.positive.x400 },
      }}>
        Box 03
      </Text>
      <GlobalStyle />
    </Box >
  );
}