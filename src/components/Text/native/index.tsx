import React from 'react';
import styled from 'styled-components/native';
import { Styles, TextPropsBase, defaultProps } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';

const StyledComponents = styled.Text<TextPropsBase>`
  ${Styles}
`;
function Text({children, ...mobileProps}: TextPropsBase) {
  const props = withStyledInternalProps(propToMobile<TextPropsBase>(mobileProps));
  return (
    <StyledComponents {...props}>
      {children}
    </StyledComponents>
  );
}

Text.defaultProps = {
  ...defaultProps,
};

export default Text;
