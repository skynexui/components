import React from 'react';
import UIThemeProvider from '@skynexui/web/theme/provider/UIThemeProvider';
import Text from '@skynexui/web/components/Text';
import Box from '@skynexui/web/components/Box';


function HomePage() {
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
          Welcome to Next.js with @skynexui!
        </Text>
      </Box>
    </UIThemeProvider>
  );
}

export default HomePage
