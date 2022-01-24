/* eslint-disable react/button-has-type */
import React from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';

interface ImageProps {
  src?: string;
  alt?: string;
  styleSheet?: StyleSheet;
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
  alt: '',
  styleSheet: {},
};
