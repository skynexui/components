import React from 'react';

import Form from '@devsoutinho/universalui/src/libs/Form';
import Text from '@devsoutinho/universalui/src/components/Text/web';
import TextField from '@devsoutinho/universalui/src/components/TextField/web';
import Image from '@devsoutinho/universalui/src/components/Image/web';
import Box from '@devsoutinho/universalui/src/components/Box/web';
import Button from '@devsoutinho/universalui/src/components/Button/web';

export default function HomeScreen() {
  return (
    <Box
      as={{
        web: 'main',
        mobile: 'ScrollView',
      }}
      flex="1"
      alignItems="center"
      justifyContent="center"
      background="primary100"
      paddingX="x4"
      paddingY="x4"
    >
      <Form initialValues={{ qrcode_value: 'Valor Inicial' }}>
        {({ values, handleChange }) => (
          <Box maxWidth="xcontainer_xs">
            <Box maxWidth={{ xs: "x8/12", sm: "x1/2" }} alignSelf="center">
              <Image
                width="100%"
                aspectRatio="1"
                borderRadius="lg"
                border="x2 solid primary900"
                marginBottom="x2"
                src={`https://skntech-api.vercel.app/api/qrcode-generator?text=${values.qrcode_value}&size=400&type=png`}
              />
              <Text variant="heading_2" alignSelf="center" textColor="primary900" marginBottom="x2">
                {values.qrcode_value}
              </Text>
              <Button size="lg" marginTop="x2" iconName="qrcode" iconColor="white" onPress={() => console.warn('Will be implemented soon')}>
                Download PNG
              </Button>
            </Box>
            <Box marginTop="x10">
              <TextField
                label="QRCode"
                name="qrcode_value"
                onChange={({ name, value }) => handleChange(name, value)}
                value={values.qrcode_value}
                placeholder="Type the value of your code"
              />
            </Box>
          </Box>
        )}
      </Form>
    </Box>
  )
}
