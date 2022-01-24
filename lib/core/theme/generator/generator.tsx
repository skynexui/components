/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { theme, Theme } from '@lib/core/theme/theme';
import { Provider } from '@lib/components/provider/provider';
import { Box } from '@lib/components/box/box';
import { TextField } from '@lib/components/textfield/textfield';
import { Text } from '@lib/components/text/text';
import _merge from 'lodash/merge';

const textFieldVariants = [theme.components.textField.variant, 'bottomBorder'];

export function ThemeGenerator() {
  const [newTheme, setNewTheme] = useState({});

  function updateTheme(updatedTheme: Partial<Theme>) {
    setNewTheme((currentState) => ({ ..._merge(currentState, updatedTheme) }));
  }

  return (
    <Provider theme={newTheme}>
      <Box
        styleSheet={{
          display: 'block',
          padding: theme.space.x4,
          backgroundColor: theme.colors.neutral.x000,
          borderWidth: theme.space.xpx,
          borderStyle: 'solid',
          borderColor: theme.colors.neutral.x100,
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              width: theme.space['x8/12'],
              padding: theme.space.x4,
              marginBottom: theme.space.x4,
              backgroundColor: theme.colors.neutral.x050,
              borderWidth: theme.space.xpx,
              borderStyle: 'solid',
              borderColor: theme.colors.neutral.x100,
            }}
          >
            <Text variant="heading1" tag="p">
              Heading1
            </Text>
            <Text variant="heading2" tag="p">
              Heading2
            </Text>
            <TextField name="textfield" label="TextField" />
          </Box>
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              width: theme.space['x4/12'],
              marginLeft: theme.space.x4,
              padding: theme.space.x4,
              marginBottom: theme.space.x4,
              backgroundColor: theme.colors.neutral.x050,
              borderWidth: theme.space.xpx,
              borderStyle: 'solid',
              borderColor: theme.colors.neutral.x100,
            }}
          >
            <Text variant="heading4">TextField</Text>
            <Text variant="heading5" tag="p">
              variant
            </Text>
            {textFieldVariants.map((variant, index) => (
              <Box key={`theme_textfield_variant${index}`}>
                <label htmlFor={`theme_textfield_variant${index}`}>
                  <input
                    id={`theme_textfield_variant${index}`}
                    type="radio"
                    name="theme_textfield_variant"
                    defaultChecked={
                      variant === theme.components.textField.variant
                    }
                    onChange={() => {
                      const updatedTheme: Partial<Theme> = {
                        components: {
                          textField: {
                            variant,
                          },
                        },
                      };
                      updateTheme(updatedTheme);
                    }}
                  />
                  {variant}
                </label>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          styleSheet={{
            flexDirection: 'column',
          }}
        >
          <Text>Theme:</Text>
          <Box>
            <pre>{JSON.stringify(newTheme, null, 2)}</pre>
          </Box>
        </Box>
      </Box>
    </Provider>
  );
}
