/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultTheme } from 'styled-components';
import { SpaceTheme } from '../../foundation/space';
import { ColorPalleteKeys, ColorSetKeys } from '../../foundation/colors/types';

function themeColor(value: string, theme: DefaultTheme) {
  const MATCH_THEME_COLORS =
    /((primary|accent|neutral|positive|negative|warning)[\d.]+)/g;
  return value
    .replace(/white/g, theme.colors.white)
    .replace(MATCH_THEME_COLORS, (...args) => {
      const colorName = args[2] as ColorPalleteKeys;
      const colorNumber = args[0].replace(colorName, '') as ColorSetKeys;
      return theme.colors[colorName][colorNumber];
    });
}

function themeSpace(value: string, theme: DefaultTheme) {
  const MATCH_THEME_SPACE = /(-?x[\d/.]+)|(xcontainer_(xs|sm|md|lg|xl)|(xpx))/g;
  return value.replace(MATCH_THEME_SPACE, (...args) => {
    const currentValue = args[0] as keyof SpaceTheme;
    if (currentValue.includes('-')) {
      const adjustedValue = currentValue.replace('-', '') as keyof SpaceTheme;
      return `calc(${theme.space[adjustedValue]} * -1)`;
    }
    return `${theme.space[currentValue]}`;
  });
}

const themeReplacer = (value: string, theme: DefaultTheme) =>
  themeColor(themeSpace(value, theme), theme);

const parseStrategies = {
  color: themeColor,
  background: themeColor,
  backgroundColor: themeColor,
  border: themeReplacer,
  default: themeReplacer,
};

type parserName = keyof typeof parseStrategies;

export function parseValue(
  theme: DefaultTheme,
  propName: string,
  propValue: unknown
): string {
  const value = `${propValue}`;
  const paserName = propName as parserName;
  const parser = parseStrategies[paserName] || parseStrategies.default;
  return parser(value, theme);
}
