import { css } from "styled-components";
import { CSSProperties } from "@src/theme/types/CSSProperties";
import { PLATFORM_WEB } from "@src/theme/types/Platforms";
import {
  renderDynamicProps,
  commonDynamicProps,
} from "@src/components/Box/styles";
import { TextPropsBase } from "@src/components/Text/styles";

const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export const defaultProps = {
  textColor: "primary500",
  hasIcon: true,
};

export type LinkPropsBase = {
  children: React.ReactNode;
  href: string;
  isFocusIn?: boolean;
  hasIcon?: boolean;
} & TextPropsBase &
  Pick<CSSProperties, DynamicProps>;

export const Styles = css<LinkPropsBase>`
  text-decoration: none;
  ${({ theme, isFocusIn }) => css`
    ${theme.platform === PLATFORM_WEB &&
    css`
      color: inherit;
      cursor: pointer;
    `}

    /* [Focus State] */
    ${isFocusIn &&
    css`
      opacity: 0.8;
    `}
    ${theme.platform === PLATFORM_WEB &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `} /* ./[Focus State] */
  `}
  ${renderDynamicProps(commonDynamicProps)}
`;
