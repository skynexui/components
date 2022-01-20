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
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}
export function Text({
  tag,
  children,
  styleSheet,
  variant,
  className,
  ...props
}: TextProps): JSX.Element {
  const { variants } = theme.typography;
  const currentVariant = variants[variant];

  return (
    <BoxBase
      as={tag}
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
}

Text.defaultProps = {
  htmlFor: '',
  className: '',
  variant: 'body2',
  tag: 'span',
  styleSheet: {},
};
