import React from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';
import { TypographyVariants } from '@lib/core/typography/typography';
import { theme } from '@lib/core/theme/theme';

interface TextProps {
  variant?: TypographyVariants;
  tag?:
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
    | 'a'
    | 'strong'
    | 'label';
  /**
   * @deprecated use "tag" attribute instead
   */
  as?: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}
export const Text = React.forwardRef(function Text(
  { tag, children, styleSheet, variant, className, ...props }: TextProps,
  ref
): JSX.Element {
  const finalTag = props.as || tag;
  const { variants } = theme.typography;
  const currentVariant = variants[variant];

  return (
    <BoxBase
      ref={ref}
      as={finalTag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...currentVariant,
        ...styleSheet,
      }}
      className={`${className} sknui-text`}
      {...props}
    >
      {children}
    </BoxBase>
  );
});

Text.defaultProps = {
  htmlFor: '',
  className: '',
  variant: 'body2',
  tag: 'span',
  as: '',
  styleSheet: {},
};
