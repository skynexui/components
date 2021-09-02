// For common code, prefer always use native imports and convert it inside web projects through webpack aliases
import React from 'react';
import Text from '@skynexui/native/components/Text';
import Box from '@skynexui/native/components/Box';

export default function HomeScreen() {
  return (
    <Box
      as={{ web: 'main', mobile: 'ScrollView' }}
      flex="1"
      background="neutral050"
      paddingTop="x20"
      paddingX="x4"
    >
      <Text
        variant="heading_2"
        textColor="primary800"
        paddingX={{xs: "x0", md: "x6" }}
      >
        This is my dream comming true! I can use the same API with React everywhere! "Learn once and write everywhere"
      </Text>
    </Box>
  )
}
