import React from 'react';
import Icon from '../../Icon/web';
import Ripples from './ripples'
import styled, { useTheme } from 'styled-components';
import Text from '../../Text/web';
import { actions } from '../actions';
import { Styles, ButtonPropsBase, defaultProps } from '../styles';
import { sizeVariants } from '../sizeVariants';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';


const StyledComponents = styled(Ripples)<ButtonPropsBase>`
  display: flex;
  cursor: pointer;
  ${Styles}

  :disabled {
    cursor: not-allowed;
  }
`;

type ButtonWebProps = ButtonPropsBase;
function Button({ children, fullWidth, ...webProps}: ButtonWebProps) {
  const props = withStyledInternalProps(webProps) as any;
  const theme = useTheme();
  const { color: textColor } = actions[props.$action]({theme, ...props});

  const iconFormated = (
    <Icon
      {...{
        ...(props.$iconPosition === 'left' && {
          $marginRight: "x2"
        }),
        ...(props.$iconPosition === 'right' && {
          $marginLeft: "x2"
        })
      }}
      name={props.$iconName}
      color={props.$iconColor}
      size={sizeVariants[props.$size as 'lg'].typographyVariant}
    />
  );

  return (
    <StyledComponents $fullWidth={fullWidth} {...props} onClick={props.$onPress}>
      {props.$iconName && props.$iconPosition === 'left' && iconFormated }
      <Text textColor={textColor} variant={sizeVariants[props.$size as 'lg'].typographyVariant} uppercase bold>
        {children}
      </Text>
      {props.$iconName && props.$iconPosition === 'right' && iconFormated }
    </StyledComponents>
  );
}

Button.defaultProps = {
  ...defaultProps,
};

export default Button;
