import { DefaultTheme } from 'styled-components';
import breakpoints from '../foundation/breakpoints';
import typography from '../foundation/typography';
import space from '../foundation/space';
import colors from '../foundation/colors';
import { Platforms } from '../types/Platforms';

type ColorModes = 'light' | 'dark';

export default function createTheme(colorMode: ColorModes = 'light', platform: Platforms): DefaultTheme {
  return {
    platform,
    colors: colors[colorMode],
    breakpoints,
    typography,
    space,
  }
}
