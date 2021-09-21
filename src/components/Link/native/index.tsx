import React from 'react';
import styled from 'styled-components/native';
import * as Linking from 'expo-linking';
import propToMobile from '@src/theme/utils/propToMobile';

import { Styles, LinkPropsBase, defaultProps } from '../styles';
import Text from '@src/components/Text/native';
import Icon from '@src/components/Icon/native';


const StyledLink = styled(Text) <LinkPropsBase>`
  ${Styles}
`;

export default function Link({ children, ...mobileProps }: LinkPropsBase): JSX.Element {
  const props = propToMobile<LinkPropsBase>(mobileProps)
  const [isFocusIn, setFocusIn] = React.useState(false);

  return (
    <StyledLink
      {...props as any}
      isFocusIn={isFocusIn}
      onPressOut={() => setFocusIn(() => !isFocusIn)}
      onPressIn={() => setFocusIn(() => !isFocusIn)}
      onPress={() => {
        Linking.openURL(props.href);
      }}
    >
      {children}
      {props.hasIcon && (
        <Icon
          name="arrowLeft"
          textColor={props.textColor}
          size={props.variant}
        />
      )}
    </StyledLink>
  );
}

Link.defaultProps = {
  ...defaultProps,
  ...Text.defaultProps,
};
