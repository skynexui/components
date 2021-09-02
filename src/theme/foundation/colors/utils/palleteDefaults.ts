import { getColorBySwatche } from './getColorBySwatch';

export const palleteDefaults = {
  neutral: getColorBySwatche('grey'),
  positive: getColorBySwatche('green-vivid'),
  negative: getColorBySwatche('red-vivid'),
  warning: getColorBySwatche('yellow-vivid'),
};
