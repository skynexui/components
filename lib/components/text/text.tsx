import React from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';

interface TextProps {
  as?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'li'
    | 'label'
    | 'a';
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}
export function Text({
  as,
  children,
  styleSheet,
  ...props
}: TextProps): JSX.Element {
  return (
    <BoxBase as={as} styleSheet={styleSheet} {...props}>
      {children}
    </BoxBase>
  );
}

Text.defaultProps = {
  as: 'span',
  styleSheet: {},
};
