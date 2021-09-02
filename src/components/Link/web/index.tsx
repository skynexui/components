import React from 'react';
import styled from 'styled-components';

import { Styles, LinkPropsBase, defaultProps } from '../styles';
import Text from '../../Text/web';
import Icon from '../../Icon/web';

const StyledLink = styled(Text)<LinkPropsBase>`
  display: inline-flex;
  ${Styles}
`;

export default function Link({children, ...props}: LinkPropsBase): JSX.Element {

  return (
    <StyledLink
      {...props as any}
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
  as: 'a',
  ...defaultProps,
};
