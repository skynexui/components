import { Breakpoints } from '@lib/core/breakpoints/breakpoints';

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  srOnly?: boolean;
  fontSize?: ResponsiveProperty<string | number> | string;
  width?: ResponsiveProperty<string | number> | string;
  height?: ResponsiveProperty<string | number> | string;
  outline?: ResponsiveProperty<string> | string;
  borderRadius?: ResponsiveProperty<string> | string;
  cursor?: ResponsiveProperty<string> | string;
  display?: ResponsiveProperty<string> | string;
  maxWidth?: ResponsiveProperty<string> | string;
  color?: ResponsiveProperty<string> | string;
  border?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  padding?: ResponsiveProperty<number | string>;
  margin?: ResponsiveProperty<number | string> | string;
  opacity?: ResponsiveProperty<number | string> | string;
  flex?: ResponsiveProperty<number> | number;
  textAlign?: ResponsiveProperty<string> | string;
  // mainAxisAlignment or crossAxisAlignment
  flexDirection?: ResponsiveProperty<string> | string;
  alignItems?: ResponsiveProperty<string> | string;
  justifyContent?: ResponsiveProperty<string> | string;
  // mainAxisAlignment or crossAxisAlignment
  focus?: StyleSheet;
  hover?: StyleSheet;
  disabled?: StyleSheet;
}
