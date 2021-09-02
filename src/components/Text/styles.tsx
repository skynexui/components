import { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { TypographyVariantsName } from '../../theme/foundation/typography/types';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { PLATFORM_WEB } from '../../theme/types/Platforms';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';


function lineHeightHandler(lineHeight: string, fontSize:string, theme: DefaultTheme) {

  if(!lineHeight.includes('px')) {
    if(theme.platform === PLATFORM_WEB) return lineHeight;
    return (+lineHeight.replace('px', '')) * (+fontSize.replace('px', '')) + 'px';
  }

  return lineHeight;
}

function fontWeightHandler(bold: boolean, variant: string, fontWeight: string) {
  const boldVariants = {
    semibold: '600',
    extrabold: '800',
  };
  if (variant.includes('display') || variant.includes('heading')) {
    return bold ? boldVariants.extrabold : fontWeight;
  }

  return bold ? boldVariants.semibold : fontWeight;
}


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export type TextPropsBase = {
  children?: React.ReactNode;
  bold?: boolean;
  uppercase?: boolean;
  variant?: TypographyVariantsName;
 } & Pick<CSSProperties, DynamicProps>;

export const defaultProps: Partial<TextPropsBase> = {
  bold: false,
  uppercase: false,
  variant: 'body_2',
};

export type StylesProps = {
  [K in keyof TextPropsBase as `$${K}`]: TextPropsBase[K];
};
export const Styles = css<StylesProps>`
  /* TODO: create a strategy for handling fonts for web and native */
  /* font-family: sans-serif; */
  ${({ theme, $bold, $variant, $uppercase }) => css`
    font-size: ${theme.typography[$variant].xs.fontSize};
    line-height: ${lineHeightHandler(
      theme.typography[$variant].xs.lineHeight,
      theme.typography[$variant].xs.fontSize,
      theme
    )};
    font-weight: ${fontWeightHandler(
      $bold,
      $variant,
      theme.typography[$variant].xs.fontWeight
    )};
    letter-spacing: ${theme.typography[$variant].xs.letterSpacing ? theme.typography[$variant].xs.letterSpacing : '0px'};

    ${$uppercase && `text-transform: uppercase;`}

    ${theme.platform === PLATFORM_WEB
      ? breakpointsMedia({
        md: css`
          font-size: ${theme.typography[$variant].md.fontSize};
          font-weight: ${fontWeightHandler(
            $bold,
            $variant,
            theme.typography[$variant].md.fontWeight
          )};
          line-height: ${lineHeightHandler(
            theme.typography[$variant].md.lineHeight,
            theme.typography[$variant].md.fontSize,
            theme
          )};
          letter-spacing: ${theme.typography[$variant].md.letterSpacing};
        `,
      })
      : ''
    }
  `}
  ${renderDynamicProps(commonDynamicProps)}
  `;
