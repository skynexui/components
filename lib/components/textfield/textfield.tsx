import React, { ChangeEventHandler } from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { Box } from '@lib/components/box/box';
import { Text } from '@lib/components/text/text';
import { BoxBase } from '@lib/components/box/box-base';

interface TextFieldProps {
  styleSheet?: StyleSheet;
  maxLength?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export function TextField({
  maxLength,
  styleSheet: { width, ...styleSheet },
  ...props
}: TextFieldProps): JSX.Element {
  const hasCounterText = Boolean(maxLength);
  return (
    <Box
      styleSheet={{
        width,
      }}
    >
      <BoxBase
        as="input"
        {...props}
        styleSheet={{
          outline: '0',
          width,
          ...styleSheet,
        }}
      />
      {hasCounterText && (
        <Text>
          {props.value.length}/{maxLength}
        </Text>
      )}
    </Box>
  );
}

TextField.defaultProps = {
  styleSheet: {},
  value: '',
  maxLength: undefined,
  onChange: (): void => {
    return undefined;
  },
};
