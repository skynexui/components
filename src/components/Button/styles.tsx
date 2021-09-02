import { css } from 'styled-components';
import borderRadius from '../../theme/foundation/basics/borderRadius';
import { CSSProperties, PropertyDefinition } from '../../theme/types/CSSProperties';
import { PLATFORM_WEB } from '../../theme/types/Platforms';
import propToStyle from '../../theme/utils/propToStyle';
import { renderDynamicProps, commonDynamicProps, CommonDynamicProps } from '../Box/styles';
import { IconButton } from '../Icon/styles';
import { actions } from './actions';
import { sizeVariants, SizeVariantName } from './sizeVariants';


const dynamicProps = {
  ...commonDynamicProps,
} as const;
type DynamicProps = keyof typeof dynamicProps;

export type ButtonPropsBase = {
  onPress?: () => void;
  size?: SizeVariantName;
  /** @deprecated Prefer to use <Box /> with flexbox properties */
  fullWidth?: PropertyDefinition<boolean>;
  isFocusIn?: boolean;
  children?: React.ReactNode;
  baseColor?: 
    | 'primary'
    | 'accent'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'neutral';
  action?: 'primary' | 'secondary' | 'tertiary' | 'quartenary';
  disabled?: boolean;
} & IconButton & Pick<CSSProperties, DynamicProps>;

export const defaultProps: Partial<ButtonPropsBase> = {
  action: 'primary',
  baseColor: 'primary',
  fullWidth: false,
  disabled: false,
  size: 'sm',
  iconPosition: 'right',
};


export type StylesProps = {
  [K in keyof ButtonPropsBase as `$${K}`]: ButtonPropsBase[K];
};
export const Styles = css<StylesProps>`
  flex: none;
  flex-direction: row;
  overflow: hidden;
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  ${propToStyle('$width', '$fullWidth', (active: boolean) => active ? '100%' : '')}
  ${({ theme, $action, $isFocusIn, $disabled }) => css`
    ${(props) => {
      const { background, borderColor, hoverfocus } = actions[$action](props);

      if($disabled) return {
        background,
        borderColor,
      };

      return {
        background: $isFocusIn ? hoverfocus.background : background,
        borderColor: $isFocusIn ? hoverfocus.borderColor : borderColor,
        ...((theme.platform === PLATFORM_WEB) && {
          '&:hover, &:focus': {
            ...hoverfocus
          }
        })
      }
    }}
    ${({ theme, $size }) => css`
      padding-top: ${theme.space[sizeVariants[$size].py]};
      padding-bottom: ${theme.space[sizeVariants[$size].py]};
      padding-left: ${theme.space[sizeVariants[$size].px]};
      padding-right: ${theme.space[sizeVariants[$size].px]};
    `}}
    border-radius: ${borderRadius.lg};
    align-items: center;
    justify-content: center;
  `}
  ${renderDynamicProps(commonDynamicProps)}
  
  ${({ theme, $disabled }) => ($disabled && css`
      opacity: .4;
      ${theme.platform === PLATFORM_WEB && css`
        &:hover, &:focus {
          opacity: .4;
        }
      `}
      
  `)}
  `;
