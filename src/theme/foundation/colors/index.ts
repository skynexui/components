import { ColorPalleteTheme } from './types';
import { getColorBySwatche } from './utils/getColorBySwatch';
import { palleteDefaults } from './utils/palleteDefaults';

export type { ColorPalleteTheme }  from './types';

const colorPalleteLight: ColorPalleteTheme = {
  white: '#ffffff',
  primary: getColorBySwatche('devsoutinho'),
  accent: getColorBySwatche('pink'),
  ...palleteDefaults
}

const colorPalleteDark = {
  ...colorPalleteLight,
  white: colorPalleteLight.neutral['050'],
}

export default {
  light: colorPalleteLight,
  dark: colorPalleteDark,
}
