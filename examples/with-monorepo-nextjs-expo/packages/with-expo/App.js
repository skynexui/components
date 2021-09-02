import { StatusBar } from 'expo-status-bar';
import React from 'react';
import UIThemeProvider from '@skynexui/native/theme/provider/UIThemeProvider';
import Box from '@skynexui/native/components/Box'
import Text from '@skynexui/native/components/Text'

export default function App() {
  return (
    <UIThemeProvider>
      <Box
        as={{ web: 'main', mobile: 'ScrollView' }}
        flex="1"
        background="neutral100"
        paddingTop="x20"
        paddingX="x4"
      >
        <Text
          variant="heading_1"
          textColor="primary800"
          paddingX={{ xs: "x0", md: "x6" }}
        >
          Welcome to Expo with @skynexui!
        </Text>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Box>
    </UIThemeProvider>
  );
}
