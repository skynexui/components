/* eslint-disable react/button-has-type */
import React from 'react';
import { useRouter } from 'next/router';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { BoxBase } from '@lib/components/box/box-base';
import { TypographyVariants } from '@lib/core/typography/typography';
import { Text } from '@lib/components/text/text';
import { theme } from '@lib/core/theme/theme';
import { Icon } from '@lib/components/icon/icon';
import { useRipples } from './ripples/ripples';

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
  ghost: ({ mainColor, mainColorLight, contrastColor }: ButtonColorValues) => ({
    color: mainColor,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    hover: {
      color: contrastColor,
      backgroundColor: mainColorLight,
    },
    focus: {
      color: contrastColor,
      backgroundColor: mainColorLight,
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
  iconName?: string;
  href?: string;
  fullWidth?: boolean;
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export function Button({
  label,
  styleSheet,
  colorVariant,
  buttonColors,
  fullWidth,
  onClick,
  iconName,
  type,
  ...props
}: ButtonProps): JSX.Element {
  const isLink = Boolean(props.href);
  const Tag = isLink ? 'a' : 'button';
  const openInNewTab = props.href && props.href.startsWith('http');
  const router = useRouter();
  const { onClickRipple, rippleStyle } = useRipples();
  const borderRadius = rounded[props.rounded];
  const { textVariant, ...buttonSize } = buttonSizes[props.size];
  const colorSet = (() => {
    if (buttonColors) {
      return buttonColors;
    }

    if (colorVariant === 'dark') {
      return {
        mainColor: theme.colors.neutral.x800,
        mainColorLight: theme.colors.neutral.x700,
        mainColorStrong: theme.colors.neutral.x900,
        contrastColor: theme.colors.neutral.x000,
      };
    }

    if (colorVariant === 'light') {
      return {
        mainColor: theme.colors.neutral.x100,
        mainColorLight: theme.colors.neutral.x050,
        mainColorStrong: theme.colors.neutral.x200,
        contrastColor: theme.colors.neutral.x999,
      };
    }

    const currentColorVariant = theme.colors[colorVariant];
    return {
      mainColor: currentColorVariant.x500,
      mainColorLight: currentColorVariant.x400,
      mainColorStrong: currentColorVariant.x600,
      contrastColor: theme.colors.neutral.x000,
    };
  })();

  const buttonStyle =
    buttonStyles[buttonVariantToStyle[props.variant]](colorSet);

  const isCircularButton = iconName && !label;

  return (
    <BoxBase
      as={Tag}
      target={openInNewTab ? '_blank' : undefined}
      styleSheet={{
        ...buttonSize,
        ...buttonStyle,
        textDecoration: 'none',
        overflow: 'hidden',
        width: fullWidth ? '100%' : styleSheet.width,
        borderRadius,
        cursor: 'pointer',
        outline: '0',
        transition: '.2s ease-in-out',
        border: '1px solid transparent',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
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
        ...(isCircularButton && {
          borderRadius: '50%',
          padding: '0',
          width: '48px',
          height: '48px',
        }),
      }}
      onMouseDown={onClickRipple}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick(event);
        if (isLink && props.href.startsWith('/')) {
          event.preventDefault();
          router?.push(props.href);
          if (process.env.STORYBOOK) {
            // eslint-disable-next-line no-alert
            alert('Internal routing! Only supports Next.JS');
          }
        }
      }}
      type={isLink ? undefined : type}
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
      {iconName && (
        <Icon
          name={iconName as unknown as never}
          styleSheet={{
            marginLeft: isCircularButton ? '0' : '16px',
          }}
        />
      )}
      <s style={rippleStyle as unknown} />
    </BoxBase>
  );
}

Button.defaultProps = {
  iconName: undefined,
  fullWidth: false,
  href: '',
  variant: 'primary',
  colorVariant: 'primary',
  rounded: 'sm',
  size: 'sm',
  type: 'button',
  buttonColors: undefined,
  disabled: false,
  styleSheet: { hover: {}, focus: {}, disabled: {} },
  onClick: (): void => undefined,
};
