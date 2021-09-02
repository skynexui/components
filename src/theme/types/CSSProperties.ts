import { BorderRadiusNames } from '../foundation/basics/borderRadius';
import { BoxShadowNames } from '../foundation/basics/boxShadow';
import { BreakpointsNames } from '../foundation/breakpoints';
import { SpaceThemeNames } from '../foundation/space';

type ResponsiveProperty<T> = Partial<Record<BreakpointsNames, T>>;

export type PropertyDefinition<T> = T | ResponsiveProperty<T>;

export interface CSSProperties {
  display?: PropertyDefinition<'none' | 'flex'>;
  // Text Props
  /** @deprecated please use textColor instead */
  color?: PropertyDefinition<string>;
  textColor?: PropertyDefinition<string>;
  fontSize?: PropertyDefinition<string>;
  // ColorStyles
  background?: PropertyDefinition<string>;
  backgroundColor?: PropertyDefinition<string>;
  // Box Model
  aspectRatio?: PropertyDefinition<string>;
  width?: PropertyDefinition<string>;
  maxWidth?: PropertyDefinition<SpaceThemeNames>;
  minWidth?: PropertyDefinition<SpaceThemeNames>;
  height?: PropertyDefinition<string>;
  maxHeight?: PropertyDefinition<SpaceThemeNames>;
  minHeight?: PropertyDefinition<SpaceThemeNames>;
  border?: PropertyDefinition<string>;
  margin?: PropertyDefinition<string>;
  marginX?: PropertyDefinition<SpaceThemeNames>;
  marginY?: PropertyDefinition<SpaceThemeNames>;
  marginLeft?: PropertyDefinition<string>;
  marginRight?: PropertyDefinition<string>;
  marginBottom?: PropertyDefinition<string>;
  marginTop?: PropertyDefinition<string>;
  padding?: PropertyDefinition<SpaceThemeNames | string>;
  paddingX?: PropertyDefinition<SpaceThemeNames>;
  paddingY?: PropertyDefinition<SpaceThemeNames>;
  paddingLeft?: PropertyDefinition<SpaceThemeNames>;
  paddingRight?: PropertyDefinition<SpaceThemeNames>;
  paddingBottom?: PropertyDefinition<SpaceThemeNames>;
  paddingTop?: PropertyDefinition<SpaceThemeNames>;
  // Flex
  flex?: PropertyDefinition<string>;
  flexWrap?: PropertyDefinition<'wrap' | 'nowrap'>;
  alignSelf?: PropertyDefinition<
    'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  >;
  flexDirection?: PropertyDefinition<
    'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit'
  >;
  order?: PropertyDefinition<string>;
  alignItems?: PropertyDefinition<
    'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  >;
  justifyContent?: PropertyDefinition<
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >;
  // Standards
  overflow?: PropertyDefinition<
  'visible' | 'hidden' | 'scroll' | 'auto' | 'inherit' | 'initial' | 'revert'
  >;
  boxShadow?: PropertyDefinition<BoxShadowNames>;
  borderRadius?: PropertyDefinition<BorderRadiusNames>;
}

export type CSSInternalAPIPropNames = {
  [K in keyof CSSProperties as `$${K}`]: any
};
export type CSSPropertiesNames = keyof CSSProperties;
