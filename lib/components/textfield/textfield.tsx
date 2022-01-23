import React, { ChangeEventHandler, KeyboardEventHandler } from 'react';
import _merge from 'lodash/merge';
import { StyleSheet } from '@lib/core/stylesheet/stylesheet';
import { Box } from '@lib/components/box/box';
import { Text } from '@lib/components/text/text';
import { BoxBase } from '@lib/components/box/box-base';
import { theme } from '@lib/core/theme/theme';
import { useTheme } from '@lib/components/provider/provider';

const textFieldColorsDefault = {
  neutral: {
    backgroundColor: theme.colors.neutral.x000,
    mainColor: theme.colors.neutral.x300,
    mainColorHighlight: theme.colors.primary.x400,
    textColor: theme.colors.neutral.x900,
  },
  positive: {
    backgroundColor: theme.colors.neutral.x000,
    mainColor: theme.colors.positive.x300,
    mainColorHighlight: theme.colors.positive.x400,
    textColor: theme.colors.positive.x900,
  },
  negative: {
    backgroundColor: theme.colors.neutral.x000,
    mainColor: theme.colors.negative.x300,
    mainColorHighlight: theme.colors.negative.x400,
    textColor: theme.colors.negative.x900,
  },
};

const textFieldSizes = {
  xs: {
    fontSize: '12px',
    paddingVertical: '8px',
    paddingHorizontal: '12px',
  },
  sm: {
    fontSize: '14px',
    paddingVertical: '8px',
    paddingHorizontal: '12px',
  },
  md: {
    fontSize: '14px',
    paddingVertical: '12px',
    paddingHorizontal: '16px',
  },
  lg: {
    fontSize: '16px',
    paddingVertical: '12px',
    paddingHorizontal: '16px',
  },
  xl: {
    fontSize: '18px',
    paddingVertical: '16px',
    paddingHorizontal: '20px',
  },
};

interface TextFieldColorSet {
  mainColor?: string;
  mainColorHighlight?: string;
  textColor?: string;
  backgroundColor?: string;
}
interface TextFieldColors {
  neutral: TextFieldColorSet;
  positive: TextFieldColorSet;
  negative: TextFieldColorSet;
}

type TextFieldStatus = keyof TextFieldColors;

interface TextFieldStyleProps {
  status: TextFieldStatus;
  textFieldColors: TextFieldColors;
  borderRadius?: string;
  mainColor?: unknown;
  fontSize?: unknown;
  paddingVertical?: unknown;
  paddingHorizontal?: unknown;
  textColor?: unknown;
}
const textFieldStyles = {
  basicBordered: ({
    status,
    borderRadius,
    fontSize,
    paddingHorizontal,
    paddingVertical,
    textFieldColors,
  }: TextFieldStyleProps) => {
    return {
      label: {
        order: '1',
        hasLabel: true,
        hasPlaceholder: true,
        fontWeight: '500',
        fontSize,
        color: textFieldColors.neutral.textColor,
        marginBottom: '4px',
      },
      textField: {
        order: '2',
        borderWidth: '1px',
        backgroundColor: textFieldColors[status].backgroundColor,
        color: textFieldColors[status].textColor,
        borderColor: textFieldColors[status].mainColor,
        fontSize,
        borderRadius,
        paddingVertical,
        paddingHorizontal,
        hover: {
          borderColor: textFieldColors[status].mainColorHighlight,
        },
        focus: {
          borderColor: textFieldColors[status].mainColorHighlight,
        },
      },
      validationMessage: {
        fontSize,
        color: textFieldColors[status].mainColor,
      },
      counter: {
        fontSize,
        color: textFieldColors[status].mainColor,
      },
    };
  },
  bottomBorder: ({
    status,
    fontSize,
    paddingVertical,
    textFieldColors,
  }: TextFieldStyleProps) => {
    return {
      label: {
        hasLabel: false,
        hasPlaceholder: false,
      },
      textField: {
        order: '2',
        borderBottomWidth: '1px',
        backgroundColor: textFieldColors[status].backgroundColor,
        color: textFieldColors[status].textColor,
        borderBottomColor: textFieldColors[status].mainColor,
        fontSize,
        paddingVertical,
        hover: {
          borderColor: textFieldColors[status].mainColorHighlight,
        },
        focus: {
          borderColor: textFieldColors[status].mainColorHighlight,
        },
      },
      validationMessage: {
        fontSize,
        color: textFieldColors[status].mainColor,
      },
      counter: {
        fontSize,
        color: textFieldColors[status].mainColor,
      },
    };
  },
};

// TODO: Move it to theme
const rounded = {
  none: 'none',
  sm: '4px',
  md: '10px',
  full: '10000px',
};

interface TextFieldProps {
  name: string;
  label?: string;
  hasLabel?: boolean;
  placeholder?: string;
  counter?: boolean;
  isValid?: boolean;
  isTouched?: boolean;
  textFieldColors?: TextFieldColors;
  variant?: keyof typeof textFieldStyles;
  rounded?: keyof typeof rounded;
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'textarea' | 'phone' | 'email' | 'password' | 'number' | 'text';
  styleSheet?: StyleSheet;
  maxLength?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
}
export function TextField({
  name,
  label,
  hasLabel,
  placeholder,
  variant,
  maxLength,
  fullWidth,
  size,
  textFieldColors,
  counter,
  isValid,
  isTouched,
  styleSheet: {
    width,
    margin,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    marginHorizontal,
    marginVertical,
    ...styleSheet
  },
  value,
  ...props
}: TextFieldProps): JSX.Element {
  const internalTheme = useTheme();
  // Theme Integration
  const currentVariant = variant || internalTheme.components.textField.variant;
  // ==========================

  const id = `textfield_${name}`;
  const status = (() => {
    if (isValid && isTouched) return 'positive';
    if (!isValid && isTouched) return 'negative';
    return 'neutral';
  })();
  const hasReceivedLabel = hasLabel && Boolean(label);
  const fieldLabel = label || placeholder;
  const textFieldSize = textFieldSizes[size];
  const borderRadius = rounded[props.rounded];
  const hasCounterText = Boolean(maxLength);
  const Tag = props.type === 'textarea' ? 'textarea' : 'input';
  const hasOnChange = Boolean(props.onChange);
  const styles = textFieldStyles[
    currentVariant as keyof typeof textFieldStyles
  ]({
    status,
    fontSize: textFieldSize.fontSize,
    paddingVertical: textFieldSize.paddingVertical,
    paddingHorizontal: textFieldSize.paddingHorizontal,
    borderRadius,
    textFieldColors: _merge(textFieldColorsDefault, textFieldColors),
  });
  const fieldPlaceholder = styles.label.hasPlaceholder ? placeholder : label;

  const valueProps = {
    ...(hasOnChange && {
      value,
    }),
    ...(!hasOnChange && {
      defaultValue: value,
    }),
  };

  return (
    <Box
      styleSheet={{
        margin,
        marginLeft,
        marginRight,
        marginBottom,
        marginTop,
        marginHorizontal,
        marginVertical,
        width: fullWidth ? '100%' : width,
        display: 'block',
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <BoxBase
          as={Tag}
          id={id}
          name={name}
          {...props}
          {...valueProps}
          placeholder={fieldPlaceholder}
          styleSheet={{
            ...styles.textField,
            fontFamily: 'inherit',
            transition: '.2s ease-in-out',
            borderStyle: 'solid',
            resize: 'none',
            width: '100%',
            display: 'block',
            outline: '0',
            ...styleSheet,
          }}
        />
        {hasReceivedLabel && styles.label.hasLabel && (
          <Text
            tag="label"
            variant="body3"
            htmlFor={id}
            styleSheet={{
              display: 'block',
              ...styles.label,
            }}
          >
            {fieldLabel}
          </Text>
        )}
      </Box>
      <Box
        styleSheet={{
          display: 'flex',
          marginTop: theme.space.x2,
        }}
      >
        {isTouched && !isValid && (
          <Text
            styleSheet={{
              ...styles.validationMessage,
              flex: 1,
            }}
          >
            Your password must be less than 4 characters.
          </Text>
        )}
        {counter && hasCounterText && (
          <Text
            styleSheet={{
              ...styles.counter,
              marginLeft: theme.space.x1,
            }}
          >
            {value.length}/{maxLength}
          </Text>
        )}
      </Box>
    </Box>
  );
}

TextField.defaultProps = {
  variant: '',
  value: undefined,
  label: '',
  hasLabel: true,
  placeholder: '',
  textFieldColors: textFieldColorsDefault,
  isValid: true,
  isTouched: false,
  type: 'text',
  rounded: 'sm',
  size: 'sm',
  fullWidth: false,
  styleSheet: {},
  maxLength: undefined,
  counter: true,
  onChange: undefined,
  onKeyPress: undefined,
};
