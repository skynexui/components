import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const StyledText = styled.span`
    ${Styles}
`;

function Text(): JSX.Element {
  return <StyledText />
}

export default Text;
