import React, { ChangeEventHandler } from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { Box } from '@lib/components/box/box';
import { Text } from '@lib/components/text/text';
import { BoxBase } from '@lib/components/box/box-base';

interface TextFieldProps {
  type?: 'textarea' | 'phone' | 'email' | 'password' | 'number' | 'text';
  styleSheet?: StyleSheet;
  maxLength?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export function TextField({
  maxLength,
  styleSheet: { width, ...styleSheet },
  value,
  ...props
}: TextFieldProps): JSX.Element {
  const hasCounterText = Boolean(maxLength);
  const as = props.type === 'textarea' ? 'textarea' : 'input';
  const hasOnChange = Boolean(props.onChange);

  const valueProps = {
    ...(hasOnChange && {
      value,
    }),
    ...(!hasOnChange && {
      defaultValue: value,
    }),
  };

  return (
    <Box
      styleSheet={{
        fontSize: '0',
        width,
      }}
    >
      <BoxBase
        as={as}
        {...props}
        {...valueProps}
        styleSheet={{
          outline: '0',
          width,
          ...styleSheet,
        }}
      />
      {hasCounterText && (
        <Text>
          {value.length}/{maxLength}
        </Text>
      )}
    </Box>
  );
}

TextField.defaultProps = {
  type: 'text',
  styleSheet: {},
  value: undefined,
  maxLength: undefined,
  onChange: undefined,
};
