import React from 'react';
import UIThemeProvider from '@skynexui/native/theme/provider/UIThemeProvider';
import HomeScreen from 'common-ui/screens/HomeScreen';

export default function App() {
  return (
    <UIThemeProvider>
      <HomeScreen />
    </UIThemeProvider>
  );
}
