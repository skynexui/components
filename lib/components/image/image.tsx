/* eslint-disable react/button-has-type */
import React, { ChangeEventHandler } from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';

interface ImageProps {
  src?: string;
  styleSheet?: StyleSheet;
  onClick?: ChangeEventHandler<HTMLInputElement>;
}
export function Image({ styleSheet, ...props }: ImageProps): JSX.Element {
  return (
    <BoxBase
      as="img"
      styleSheet={{
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        ...styleSheet,
      }}
      {...props}
    />
  );
}

Image.defaultProps = {
  src: '',
  styleSheet: {},
  onClick: (): void => {
    return undefined;
  },
};
