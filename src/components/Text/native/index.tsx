import React from 'react';
import styled from 'styled-components/native';
import { Styles } from '../styles';

const StyledText = styled.Text`
    ${Styles}
`;

function Text(props: any): JSX.Element {
  return <StyledText {...props} />
}

export default Text;
