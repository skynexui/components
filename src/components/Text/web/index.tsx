import React from 'react';
import styled from 'styled-components';
import { Styles, TextPropsBase, defaultProps } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';

const StyledComponents = styled.span<TextPropsBase>`
  ${Styles}
`;

type TextWebProps = TextPropsBase & {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'a' | 'li';
};
function Text(webProps: TextWebProps) {
  const props = withStyledInternalProps(webProps) as any;
  return (
    <StyledComponents {...props} />
  );
}

Text.defaultProps = {
  ...defaultProps,
};

export default Text;
