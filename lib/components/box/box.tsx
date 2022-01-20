import React, { Ref } from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';

interface BoxProps {
  tag?:
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

export const Box = React.forwardRef(
  ({ tag, className, ...props }: BoxProps, ref) => {
    return (
      <BoxBase
        as={tag}
        className={`${className} sknui-box`}
        {...props}
        ref={ref}
      />
    );
  }
);

Box.defaultProps = {
  tag: 'div',
  styleSheet: {},
  className: '',
};
