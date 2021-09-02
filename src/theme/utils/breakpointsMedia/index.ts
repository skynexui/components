import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { BreakpointsNames } from '../../foundation/breakpoints';
import { SpaceThemeNames } from '../../foundation/space';

export type CSSByBreakpoints = Partial<
  Record<
    BreakpointsNames,
    | string
    | FlattenSimpleInterpolation
    | SpaceThemeNames
    | Record<string, string>
  >
>;

export default function breakpointsMedia(cssByBreakpoints: CSSByBreakpoints) {
  return ({
    theme,
  }: {
    theme: DefaultTheme;
  }): FlattenSimpleInterpolation[] | string[] => {
    const breakpointsNames = Object.keys(cssByBreakpoints);
    return breakpointsNames.map(
      (breakpointName: BreakpointsNames) => css`
        ${breakpointName === 'xs'
          ? (css`
            ${cssByBreakpoints[breakpointName]}
          `)
         : (css`
            @media screen and (min-width: ${theme.breakpoints[breakpointName]}) {
              ${cssByBreakpoints[breakpointName]}
            }
         `)}
      `
    );
  };
}
