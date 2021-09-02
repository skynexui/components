import { css } from 'styled-components';
import { CSSProperties } from '../../theme/types/CSSProperties';
import { PLATFORM_WEB } from '../../theme/types/Platforms';
import { renderDynamicProps, commonDynamicProps } from '../Box/styles';
import { TextPropsBase } from '../Text/styles';

const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export const defaultProps = {
  textColor: 'primary500',
  hasIcon: true,
};

export type LinkPropsBase = {
  children: React.ReactNode;
  href: string;
  isFocusIn?: boolean;
  hasIcon?: boolean;
} & TextPropsBase & Pick<CSSProperties, DynamicProps>;

export const Styles = css<LinkPropsBase>`
  text-decoration: none;
  ${({ theme, isFocusIn }) => css`
    ${theme.platform === PLATFORM_WEB && css`
      color: inherit;
      cursor: pointer;
    `}
    
    /* [Focus State] */
    ${isFocusIn && css`opacity: .8;`}
    ${theme.platform === PLATFORM_WEB && css`
      &:hover {
        opacity: .8;
      }
    `}
    /* ./[Focus State] */
  `}
  ${renderDynamicProps(commonDynamicProps)}
`;
