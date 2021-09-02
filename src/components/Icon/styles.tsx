import { css } from 'styled-components';
import { SpaceThemeNames } from '../../theme/foundation/space';
import { TypographyVariantsName } from '../../theme/foundation/typography/types';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { RecordOfThemeBasicSizes } from '../../theme/types/ThemeBasicSizes';
import { renderDynamicProps, commonDynamicProps } from '../Box/styles';
import { iconMapByName } from './iconMapByName';

export const iconSizes: RecordOfThemeBasicSizes<SpaceThemeNames> = {
  xs: 'x3',
  sm: 'x4',
  md: 'x6',
  lg: 'x8',
  xl: 'x10',
};

const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export const defaultProps = {
  size: 'md',
  name: 'default',
  textColor: 'blue',
};

type IconName = keyof typeof iconMapByName;
type Sizes = keyof typeof iconSizes;
export type IconPropsBase = {
  size?: Sizes | TypographyVariantsName;
  name?: keyof typeof iconMapByName;
  xmlns?: string;
  style?: any;
} & Pick<CSSProperties, DynamicProps>;

export type StylesProps = {
  [K in keyof IconPropsBase as `$${K}`]: IconPropsBase[K];
};
export const Styles = css<StylesProps>`
  ${({ theme, $size }) => {
    if($size.includes('body') || $size.includes('display') || $size.includes('heading')) {
      const baseValue = theme.typography[$size as TypographyVariantsName];
      return css`
        width: ${4 + Number(baseValue.xs.fontSize.replace('px', ''))}px;
        height: ${4 + Number(baseValue.xs.fontSize.replace('px', ''))}px;
      `
    }

    const value = theme.space[iconSizes[$size as Sizes]];
    return css`
        width: ${value};
        height: ${value};
    `
  }}

  ${renderDynamicProps(commonDynamicProps)}
`;


export type IconButton = {
  iconName?: IconName;
  iconColor?: string;
  iconPosition?: 'left' | 'right';
};
