import { css } from "styled-components";
import { CSSProperties } from "@src/theme/types/CSSProperties";
import {
  renderDynamicProps,
  commonDynamicProps,
} from "@src/components/Box/styles";

const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export const defaultProps = {};

export type ImagePropsBase = {
  src?: string;
} & Pick<CSSProperties, DynamicProps>;

export const Styles = css<ImagePropsBase>`
  ${renderDynamicProps(commonDynamicProps)}
`;
