import 'styled-components';
import { BreakpointsTheme } from '../theme/foundation/breakpoints';
import { TypographyTheme } from '../theme/foundation/typography';
import { SpaceTheme } from '../theme/foundation/space';
import { ColorPalleteTheme } from '../theme/foundation/colors';
import { Platforms } from '../theme/types/Platforms';

declare module 'styled-components' {
  export interface DefaultTheme {
    platform: Platforms;
    colors: ColorPalleteTheme;
    space: SpaceTheme;
    typography: TypographyTheme;
    breakpoints: BreakpointsTheme;
  }
}
