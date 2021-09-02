import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import Icon from '../../Icon/native';
import Text from '../../Text/native';
import { Styles, ButtonPropsBase, defaultProps } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';
import { actions } from '../actions';
import { sizeVariants } from '../sizeVariants';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';

const StyledComponents = styled(Ripple)<ButtonPropsBase & { activeOpacity?: number }>`
  ${Styles}
`;
function Component({children, ...receivedProps}: ButtonPropsBase) {
  const props =  withStyledInternalProps(propToMobile<ButtonPropsBase>(receivedProps)) as any;
  const [isFocusIn, setFocusIn] = React.useState(false);  
  const theme = useTheme();
  const { color: textColor } = actions[props.$action]({theme, ...props});

  const iconFormated = (
    <Icon
      {...{
        ...(props.$iconPosition === 'left' && {
          marginRight: "x2"
        }),
        ...(props.$iconPosition === 'right' && {
          marginLeft: "x2"
        })
      }}
      name={props.$iconName}
      textColor={props.$iconColor}
      size={sizeVariants[props.$size as 'lg'].typographyVariant}
    />
  );

  return (
    <StyledComponents
      activeOpacity={1}
      $isFocusIn={isFocusIn}
      onPressOut={() => setFocusIn(() => !isFocusIn)}
      onPressIn={() => setFocusIn(() => !isFocusIn)}
      disabled={props.$disabled}
      onPress={props.$onPress}
      {...props}>
      {props.$iconName && props.$iconPosition === 'left' && iconFormated }
      <Text textColor={textColor} variant={sizeVariants[props.$size as 'lg'].typographyVariant} uppercase bold>
        {children}
      </Text>
      {props.$iconName && props.$iconPosition === 'right' && iconFormated }
    </StyledComponents>
  );
}

Component.defaultProps = {
  ...defaultProps,
};

export default Component;
