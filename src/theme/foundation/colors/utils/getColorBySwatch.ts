import { ColorDeck, colorSetKeys } from '../types';
import { swatches, SwatchKey } from './swatches';

export function getColorBySwatche(colorKey: string): ColorDeck {
  return colorSetKeys.reduce(
    (acc, colorSetKey) => ({
      ...acc,
      [colorSetKey]: swatches[`${colorKey}-${colorSetKey}` as SwatchKey],
    }),
    {} as ColorDeck
  );
}
