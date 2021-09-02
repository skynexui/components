import React from 'react';
import Link from '@devsoutinho/universalui/src/components/Link/native';
import TextField from '@devsoutinho/universalui/src/components/TextField/native';
import Text from '@devsoutinho/universalui/src/components/Text/native';
import Box from '@devsoutinho/universalui/src/components/Box/native';
import Icon from '@devsoutinho/universalui/src/components/Icon/native';
import Button from '@devsoutinho/universalui/src/components/Button/native';

export default function HomeScreen() {
  return (
    <Box background="primary200" flex="1" paddingY="x20" paddingX="x2">
    <Box>
      <TextField name="nome" label="Nome" placeholder="Please insert your name" />
    </Box>
    <Text variant="heading_1" textColor="white">
      Olá pessoas <Link href="https://google.com/" variant="heading_1">Hi</Link>
      {' '}<Link href="https://google.com/" variant="heading_1" hasIcon={false}>Roi</Link>
    </Text>
      <Box background="white">
        <Icon textColor="warning900" name="github" size="xl" />
        <Icon textColor="positive500" name="youtube" />
        <Icon textColor="negative500" name="check" />
      </Box>
      <Box overflow="hidden" borderRadius="sm">
        {['display_1', 'heading_1', 'heading_2', 'heading_3', 'heading_4', 'heading_5', 'heading_6', 'body_1', 'body_2', 'body_3', 'body_4']
          .map((variant) => <Text key={variant} background="primary050" variant={variant as any} textColor="primary900" bold>{variant}</Text>)}
      </Box>
      <Box flexDirection="row" alignItems="flex-start" marginTop="x4">
        {/* 6 - Create Form Manager (Inside react commons) */}
        {/* 7 - Create the API for generate the QR Code */}
        {/* ? - Dark Mode support (backgroundColorDark="" textColorDark="") */}
        <Button action="primary" baseColor="accent" marginRight="x4">Click here!</Button>
        <Button
          action="primary"
          baseColor="accent"
          marginRight="x4"
          iconName="github"
          iconColor="white"
          size="xl"
        >
          Icon Button
        </Button>
        <Button
          action="primary"
          baseColor="accent"
          marginRight="x4"
          iconName="github"
          iconColor="white"
          iconPosition="left"
          size="xl"
        >
          Icon Button
        </Button>
        <Button action="primary" disabled>Click here!</Button>
      </Box>
      <Box flexDirection="column" marginTop="x4">
        <Button action="primary" baseColor="accent">Click here!</Button>
        <Button action="primary" disabled>Click here!</Button>
      </Box>
    </Box>
  )
}
