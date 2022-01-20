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
  const colorSelected = colorsneutral.x050;
  const bg = colorSelected;
  return (
    <Box
      styleSheet={{
        // TODO: Standardize the default CSS between React Web and Flutter
        display: 'flex',
        // alignSelf: 'start', // ganha com o flexDirection: 'row'
        // flex: 1, // ganha flex 1 com o flexDirection: 'row'
        // ===============================================================
        flexDirection: 'column',
        alignItems: { xs: 'center' },
        justifyContent: { xs: 'flex-start' },
        backgroundColor: {
          xs: bg,
        },
        margin: { xs: 50 },
        // TODO: Fix padding bottom implementation to match Flutter
        paddingVertical: { xs: 50 },
        paddingHorizontal: { xs: 50 },
        // paddingBottom: { xs: 100 },
      }}
    >
      <Text styleSheet={{
        display: 'flex',
        width: {xs: 50},
        height: {xs: 50},
        backgroundColor: {xs: theme.colors.primary.x400 },
      }}>
        Box 01
      </Text>
      <Text styleSheet={{
        display: 'flex',
        width: {xs: 50},
        height: {xs: 50},
        backgroundColor: {xs: theme.colors.accent.x400 },
      }}>
        Box 02
      </Text>
      <Text styleSheet={{
        display: 'flex',
        width: {xs: 50},
        height: {xs: 50},
        backgroundColor: {xs: theme.colors.positive.x400 },
      }}>
        Box 03
      </Text>
      <GlobalStyle />
    </Box >
  );
}
