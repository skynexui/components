import React from 'react';
import UIThemeProvider from '@skynexui/native/theme/provider/UIThemeProvider';
import HomeScreen from 'common-ui/screens/HomeScreen';

function HomePage() {
  return (
    <UIThemeProvider>
      <HomeScreen />
    </UIThemeProvider>
  )
}

export default HomePage
