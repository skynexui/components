import React, { Ref } from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';

interface BoxProps {
  as?:
    | 'form' // Prefer to use the <Form /> component instead.
    | 'div'
    | 'ul'
    | 'main'
    | 'section'
    | 'article'
    | 'header'
    | 'footer'
    | 'nav';
  children: React.ReactNode;
  className?: string;
  styleSheet?: StyleSheet;
  ref: Ref<unknown>;
}

export const Box = React.forwardRef((props: BoxProps, ref) => {
  return <BoxBase {...props} ref={ref} />;
});

Box.defaultProps = {
  as: 'div',
  styleSheet: {},
  className: '',
};
