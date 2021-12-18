/* eslint-disable react/button-has-type */
import React, { ChangeEventHandler } from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled: boolean;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
  onClick?: ChangeEventHandler<HTMLInputElement>;
}
export function Button({
  children,
  styleSheet,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <BoxBase
      as="button"
      styleSheet={{
        outline: '0',
        border: '0',
        cursor: 'pointer',
        disabled: {
          cursor: 'not-allowed',
          opacity: '.65',
        },
        ...styleSheet,
      }}
      {...props}
    >
      {children}
    </BoxBase>
  );
}

Button.defaultProps = {
  type: 'button',
  styleSheet: {},
  onClick: (): void => {
    return undefined;
  },
};
