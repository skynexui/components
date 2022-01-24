import { Breakpoints } from '@lib/core/breakpoints/breakpoints';

export type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  // %%[CODER_START]:StyleSheet_attributes%%
  bottom?: ResponsiveProperty<string | number> | string;
  left?: ResponsiveProperty<string | number> | string;
  right?: ResponsiveProperty<string | number> | string;
  top?: ResponsiveProperty<string | number> | string;
  position?: ResponsiveProperty<'relative' | 'absolute'> | string;
  backgroundImage?: ResponsiveProperty<string> | string;
  backgroundRepeat?:
    | ResponsiveProperty<
        | 'repeat'
        | 'repeat-x'
        | 'repeat-y'
        | 'no-repeat'
      >
    | string;
  backgroundSize?: ResponsiveProperty<'auto' | 'cover' | 'contain'> | string;
  backgroundBlendMode?: ResponsiveProperty<string> | string;
  boxShadowColor?: ResponsiveProperty<string> | string;
  boxShadowSpread?: ResponsiveProperty<string | number> | string;
  boxShadowBlur?: ResponsiveProperty<string | number> | string;
  boxShadowOffsetY?: ResponsiveProperty<string | number> | string;
  boxShadowOffsetX?: ResponsiveProperty<string | number> | string;
  borderRadiusBottomRight?: ResponsiveProperty<string> | string;
  borderRadiusBottomLeft?: ResponsiveProperty<string> | string;
  borderRadiusTopRight?: ResponsiveProperty<string> | string;
  borderRadiusTopLeft?: ResponsiveProperty<string> | string;
  borderRadius?: ResponsiveProperty<string> | string;
  overflowY?: ResponsiveProperty<'visible' | 'hidden' | 'scroll'> | string;
  flex?: ResponsiveProperty<number | string> | string | number;
  alignItems?:
    | ResponsiveProperty<'stretch' | 'flex-start' | 'flex-end' | 'center'>
    | string;
  crossAxisAlignment?:
    | ResponsiveProperty<'stretch' | 'flex-start' | 'flex-end' | 'center'>
    | string;
  justifyContent?:
    | ResponsiveProperty<
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'spaceBetween'
        | 'spaceAround'
        | 'spaceEvenly'
      >
    | string;
  mainAxisAlignment?:
    | ResponsiveProperty<
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'spaceBetween'
        | 'spaceAround'
        | 'spaceEvenly'
      >
    | string;
  flexDirection?: ResponsiveProperty<'row' | 'column'> | string;
  marginHorizontal?: ResponsiveProperty<number | string> | string;
  marginVertical?: ResponsiveProperty<number | string> | string;
  marginBottom?: ResponsiveProperty<number | string> | string;
  marginRight?: ResponsiveProperty<number | string> | string;
  marginLeft?: ResponsiveProperty<number | string> | string;
  marginTop?: ResponsiveProperty<number | string> | string;
  margin?: ResponsiveProperty<number | string> | string;
  minHeight?: ResponsiveProperty<number | string> | string;
  paddingHorizontal?: ResponsiveProperty<number | string> | string;
  paddingVertical?: ResponsiveProperty<number | string> | string;
  paddingBottom?: ResponsiveProperty<number | string> | string;
  paddingRight?: ResponsiveProperty<number | string> | string;
  paddingLeft?: ResponsiveProperty<number | string> | string;
  paddingTop?: ResponsiveProperty<number | string> | string;
  padding?: ResponsiveProperty<number | string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  color?: ResponsiveProperty<string> | string;
  height?: ResponsiveProperty<string | number> | string;
  width?: ResponsiveProperty<string | number> | string;
  // %%[CODER_END]:StyleSheet_attributes%%
  srOnly?: boolean;
  borderStyle?: string;
  overflow?: ResponsiveProperty<string> | string;
  resize?: ResponsiveProperty<string> | string;
  textDecoration?: ResponsiveProperty<string> | string;
  transition?: ResponsiveProperty<string> | string;
  fontFamily?: ResponsiveProperty<string> | string;
  fontSize?: ResponsiveProperty<string | number> | string;
  outline?: ResponsiveProperty<string> | string;
  cursor?: ResponsiveProperty<string> | string;
  display?: ResponsiveProperty<string> | string;
  maxWidth?: ResponsiveProperty<string> | string;
  border?: ResponsiveProperty<string> | string;
  borderWidth?: ResponsiveProperty<string> | string;
  borderColor?: ResponsiveProperty<string> | string;
  boxShadow?: ResponsiveProperty<string> | string;
  opacity?: ResponsiveProperty<number | string> | string;
  textAlign?: ResponsiveProperty<string> | string;
  focus?: StyleSheet;
  hover?: StyleSheet;
  disabled?: StyleSheet;
}
