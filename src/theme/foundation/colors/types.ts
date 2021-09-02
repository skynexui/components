export const colorSetKeys = [
  '050',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const;
export type ColorSetKeys = typeof colorSetKeys[number];

export const colorPalleteKeys = [
  'neutral',
  'primary',
  'accent',
  'positive',
  'negative',
  'warning',
] as const;
export type ColorPalleteKeys = typeof colorPalleteKeys[number];

export type ColorDeck = Record<ColorSetKeys, string>;

export interface ColorPalleteTheme {
  white: string;
  neutral: ColorDeck;
  primary: ColorDeck;
  accent: ColorDeck;
  positive: ColorDeck;
  negative: ColorDeck;
  warning: ColorDeck;
}
