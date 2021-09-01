import React from 'react';
import styled from 'styled-components/native';
import { Styles } from '../styles';

const StyledText = styled.Text`
    ${Styles}
`;

function Text(): JSX.Element {
  return <StyledText />
}

export default Text;
