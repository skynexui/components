import { Breakpoints } from '@lib/core/breakpoints/breakpoints';

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  // %%[CODER_START]:StyleSheet_attributes%%
  marginHorizontal?: ResponsiveProperty<number | string> | string;
  marginVertical?: ResponsiveProperty<number | string> | string;
  marginBottom?: ResponsiveProperty<number | string> | string;
  marginRight?: ResponsiveProperty<number | string> | string;
  marginLeft?: ResponsiveProperty<number | string> | string;
  marginTop?: ResponsiveProperty<number | string> | string;
  margin?: ResponsiveProperty<number | string> | string;
  paddingHorizontal?: ResponsiveProperty<number | string> | string;
  paddingVertical?: ResponsiveProperty<number | string> | string;
  paddingBottom?: ResponsiveProperty<number | string> | string;
  paddingRight?: ResponsiveProperty<number | string> | string;
  paddingLeft?: ResponsiveProperty<number | string> | string;
  paddingTop?: ResponsiveProperty<number | string> | string;
  padding?: ResponsiveProperty<number | string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  color?: ResponsiveProperty<string> | string;
  // %%[CODER_END]:StyleSheet_attributes%%
  srOnly?: boolean;
  borderStyle?: string;
  overflow?: ResponsiveProperty<string> | string;
  position?: ResponsiveProperty<string> | string;
  resize?: ResponsiveProperty<string> | string;
  textDecoration?: ResponsiveProperty<string> | string;
  transition?: ResponsiveProperty<string> | string;
  fontFamily?: ResponsiveProperty<string> | string;
  fontSize?: ResponsiveProperty<string | number> | string;
  width?: ResponsiveProperty<string | number> | string;
  height?: ResponsiveProperty<string | number> | string;
  outline?: ResponsiveProperty<string> | string;
  borderRadius?: ResponsiveProperty<string> | string;
  cursor?: ResponsiveProperty<string> | string;
  display?: ResponsiveProperty<string> | string;
  maxWidth?: ResponsiveProperty<string> | string;
  border?: ResponsiveProperty<string> | string;
  borderWidth?: ResponsiveProperty<string> | string;
  borderColor?: ResponsiveProperty<string> | string;
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
