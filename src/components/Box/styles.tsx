import React from 'react';
import { css } from 'styled-components';
import boxShadow, { BoxShadowNames } from '../../theme/foundation/basics/boxShadow';
import borderRadius, { BorderRadiusNames } from '../../theme/foundation/basics/borderRadius';
import { CSSProperties, CSSPropertiesNames } from '../../theme/types/CSSProperties';
import propToStyle from '../../theme/utils/propToStyle';

export const commonDynamicProps: Partial<Record<CSSPropertiesNames, any>> = {
  // [Common Props]
  aspectRatio: propToStyle('$aspectRatio'),
  alignSelf: propToStyle('$alignSelf'),
  width: propToStyle('$width'),
  maxWidth: propToStyle('$maxWidth'),
  minWidth: propToStyle('$minWidth'),
  height: propToStyle('$height'),
  maxHeight: propToStyle('$maxHeight'),
  minHeight: propToStyle('$minHeight'),
  display: propToStyle('$display'),
  flex: propToStyle('$flex'),
  flexWrap: propToStyle('$flexWrap'),
  border: propToStyle('$border'),
  flexDirection: propToStyle('$flexDirection'),
  order: propToStyle('$order'),
  alignItems: propToStyle('$alignItems'),
  justifyContent: propToStyle('$justifyContent'),
  margin: propToStyle('$margin'),
  marginX: [propToStyle('$marginLeft', '$marginX'), propToStyle('$marginRight', '$marginX')],
  marginY: [propToStyle('$marginTop', '$marginY'), propToStyle('$marginBottom', '$marginY')],
  marginTop: propToStyle('$marginTop'),
  marginBottom: propToStyle('$marginBottom'),
  marginLeft: propToStyle('$marginLeft'),
  marginRight: propToStyle('$marginRight'),
  padding: propToStyle('$padding'),
  paddingX: [propToStyle('$paddingLeft', '$paddingX'), propToStyle('$paddingRight', '$paddingX')],
  paddingY: [propToStyle('$paddingTop', '$paddingY'), propToStyle('$paddingBottom', '$paddingY')],
  paddingTop: propToStyle('$paddingTop'),
  paddingBottom: propToStyle('$paddingBottom'),
  paddingLeft: propToStyle('$paddingLeft'),
  paddingRight: propToStyle('$paddingRight'),
  background: propToStyle('$background'),
  backgroundColor: propToStyle('$backgroundColor'),
  overflow: propToStyle('$overflow'),
  // [Text Specific Props]
  textColor: propToStyle('$color', '$textColor'),
  fontSize: propToStyle('$fontSize'),
  boxShadow: propToStyle('$boxShadow', '$boxShadow', (value: BoxShadowNames) => boxShadow[value]),
  borderRadius: propToStyle('$borderRadius', '$borderRadius', (value: BorderRadiusNames) => borderRadius[value])
} as const;
export type CommonDynamicProps = keyof typeof commonDynamicProps;

export function renderDynamicProps(dynamicProps: any) {
  return Object.keys(dynamicProps)
    .flatMap((dynamicPropKey: DynamicProps) => dynamicProps[dynamicPropKey])
}


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

type BoxStyleProps = DynamicProps;
export type BoxPropsBase = {
  as?: {
    web?: 'div' | 'section' | 'main',
    mobile?: 'View' | 'ScrollView',
  };
  children: React.ReactNode;
} & Pick<CSSProperties, BoxStyleProps>;
export const Styles = css`
  width: 100%;
  ${renderDynamicProps(dynamicProps)}
`;
