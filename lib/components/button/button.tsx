/* eslint-disable react/button-has-type */
import React, { ChangeEventHandler } from 'react';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';
import { TypographyVariants } from '@lib/core/typography/typography';
import { Text } from '@lib/components/text/text';
import { theme } from '@lib/core/theme/theme';

// TODO: Move it to the theme
const buttonVariantToStyle = {
  primary: 'filled',
  secondary: 'outlined',
  tertiary: 'ghost',
} as const;

interface ButtonColorValues {
  mainColor: string;
  mainColorStrong: string;
  mainColorLight: string;
  contrastColor: string;
}
const buttonStyles = {
  filled: ({
    mainColor,
    contrastColor,
    mainColorStrong,
  }: ButtonColorValues) => ({
    backgroundColor: mainColor,
    borderColor: mainColor,
    color: contrastColor,
    hover: {
      backgroundColor: mainColorStrong,
    },
    focus: {
      backgroundColor: mainColorStrong,
    },
  }),
  outlined: ({ mainColor, contrastColor }: ButtonColorValues) => ({
    color: mainColor,
    border: '1px solid',
    borderColor: mainColor,
    backgroundColor: 'transparent',
    hover: {
      color: contrastColor,
      backgroundColor: mainColor,
    },
    focus: {
      color: contrastColor,
      backgroundColor: mainColor,
    },
  }),
  ghost: ({
    mainColor,
    mainColorStrong,
    contrastColor,
  }: ButtonColorValues) => ({
    color: mainColor,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    hover: {
      color: contrastColor,
      backgroundColor: mainColorStrong,
    },
    focus: {
      color: contrastColor,
      backgroundColor: mainColorStrong,
    },
  }),
} as const;

// TODO: Move it to theme
const rounded = {
  none: 'none',
  sm: '4px',
  md: '10px',
  full: '10000px',
};

const buttonSizes = {
  xs: {
    textVariant: 'body4',
    paddingHorizontal: theme.space['x2.5'],
    paddingVertical: theme.space['x1.5'],
  },
  sm: {
    textVariant: 'body3',
    paddingHorizontal: theme.space.x3,
    paddingVertical: theme.space.x2,
  },
  md: {
    textVariant: 'body3',
    paddingHorizontal: theme.space.x4,
    paddingVertical: theme.space.x2,
  },
  lg: {
    textVariant: 'body2',
    paddingHorizontal: theme.space.x4,
    paddingVertical: theme.space.x2,
  },
  xl: {
    textVariant: 'body2',
    paddingHorizontal: theme.space.x6,
    paddingVertical: theme.space.x3,
  },
};

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  buttonColors?: ButtonColorValues;
  colorVariant?:
    | 'primary'
    | 'accent'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'dark'
    | 'light';
  rounded?: keyof typeof rounded;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  styleSheet?: StyleSheet;
  label: string;
  onClick?: ChangeEventHandler<HTMLInputElement>;
}
export function Button({
  label,
  styleSheet,
  colorVariant,
  buttonColors,
  ...props
}: ButtonProps): JSX.Element {
  const borderRadius = rounded[props.rounded];
  const { textVariant, ...buttonSize } = buttonSizes[props.size];
  const colorSet = (() => {
    if (buttonColors) {
      return buttonColors;
    }

    if (colorVariant === 'dark') {
      return {
        mainColor: theme.colors.neutral[800],
        mainColorLight: theme.colors.neutral[700],
        mainColorStrong: theme.colors.neutral[900],
        contrastColor: theme.colors.neutral['000'],
      };
    }

    if (colorVariant === 'light') {
      return {
        mainColor: theme.colors.neutral['100'],
        mainColorLight: theme.colors.neutral['050'],
        mainColorStrong: theme.colors.neutral['200'],
        contrastColor: theme.colors.neutral['999'],
      };
    }

    const currentColorVariant = theme.colors[colorVariant];
    return {
      mainColor: currentColorVariant[500],
      mainColorLight: currentColorVariant[400],
      mainColorStrong: currentColorVariant[600],
      contrastColor: theme.colors.neutral['000'],
    };
  })();

  const buttonStyle =
    buttonStyles[buttonVariantToStyle[props.variant]](colorSet);

  return (
    <BoxBase
      as="button"
      styleSheet={{
        ...buttonSize,
        ...buttonStyle,
        transition: '.2s ease-in-out',
        borderRadius,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: '0',
        border: '1px solid transparent',
        cursor: 'pointer',
        ...styleSheet,
        disabled: {
          ...styleSheet.disabled,
          cursor: 'not-allowed',
          opacity: '.65',
        },
        hover: {
          ...buttonStyle.hover,
          ...styleSheet.hover,
        },
        focus: {
          ...buttonStyle.focus,
          ...styleSheet.focus,
        },
      }}
      {...props}
    >
      <Text
        variant={textVariant as TypographyVariants}
        styleSheet={{
          color: 'inherit',
        }}
      >
        {label}
      </Text>
    </BoxBase>
  );
}

Button.defaultProps = {
  variant: 'primary',
  colorVariant: 'primary',
  rounded: 'sm',
  size: 'sm',
  type: 'button',
  buttonColors: undefined,
  disabled: false,
  styleSheet: { hover: {}, focus: {}, disabled: {} },
  onClick: (): void => {
    return undefined;
  },
};
