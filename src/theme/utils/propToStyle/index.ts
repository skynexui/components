import { DefaultTheme } from 'styled-components';
import breakpointsMedia, { CSSByBreakpoints } from '../breakpointsMedia';
import { CSSInternalAPIPropNames } from '../../types/CSSProperties';
import { parseValue } from './parseValue';
import { PLATFORM_MOBILE } from '../../types/Platforms';

type PropName = keyof CSSInternalAPIPropNames;
type CSSPropValues = { theme?: DefaultTheme } & Partial<
  Record<PropName | string, CSSByBreakpoints | string>
>;


export default function propToStyleBase(
  propNameReceived: PropName,
  propNameAlias?: string,
  valueAdapter: (receivedValue: unknown) => string = (value: undefined) => value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  const propNameFormated = propNameReceived.replace('$', '');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: CSSPropValues): any => {
    const { theme } = props;
    const propValue = props[propNameReceived] || props[propNameAlias];
    if (typeof propValue === 'object' && !Array.isArray(propValue)) {

      if(theme.platform === PLATFORM_MOBILE) {
        const validValueInBreapointOrder = propValue.xs; 
        return {
          [propNameFormated]: parseValue(theme, propNameReceived, valueAdapter(validValueInBreapointOrder)),
        }
      }

      const breakpoints: CSSByBreakpoints = {};

      if (typeof propValue.xs !== 'undefined')
        breakpoints.xs = {
          [propNameFormated]: parseValue(theme, propNameReceived, valueAdapter(propValue.xs)),
        };
      if (typeof propValue.sm !== 'undefined')
        breakpoints.sm = {
          [propNameFormated]: parseValue(theme, propNameReceived, valueAdapter(propValue.sm)),
        };
      if (typeof propValue.md !== 'undefined')
        breakpoints.md = {
          [propNameFormated]: parseValue(theme, propNameReceived, valueAdapter(propValue.md)),
        };
      if (typeof propValue.lg !== 'undefined')
        breakpoints.lg = {
          [propNameFormated]: parseValue(theme, propNameReceived, valueAdapter(propValue.lg)),
        };
      if (typeof propValue.xl !== 'undefined')
        breakpoints.xl = {
          [propNameFormated]: parseValue(theme, propNameReceived, valueAdapter(propValue.xl)),
        };

      return breakpointsMedia(breakpoints);
    }

    if (
      typeof propValue === 'string' ||
      typeof propValue === 'number' ||
      typeof propValue === 'boolean' ||
      Array.isArray(propValue)
    ) {
      return {
        [propNameFormated]: parseValue(theme, propNameReceived, valueAdapter(propValue)),
      };
    }

    return {};
  };
}
