import React from 'react';
import styled from 'styled-components';
import { Styles } from '../styles';

const StyledText = styled.span`
    ${Styles}
`;

function Text(props: any): JSX.Element {
  return <StyledText {...props} />
}

export default Text;
