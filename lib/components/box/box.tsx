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
  /**
   * @deprecated use "tag" attribute instead
   */
  as?: string;
  children: React.ReactNode;
  className?: string;
  styleSheet?: StyleSheet;
  ref: Ref<unknown>;
}

export const Box = React.forwardRef(
  ({ tag, className, ...props }: BoxProps, ref) => {
    const finalTag = props.as || tag;
    return (
      <BoxBase
        as={finalTag}
        className={`${className} sknui-box`}
        {...props}
        ref={ref}
      />
    );
  }
);

Box.defaultProps = {
  tag: 'div',
  as: '',
  styleSheet: {},
  className: '',
};
