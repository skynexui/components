import React from 'react';
import styled from 'styled-components/native';
import propToMobile from '../../../theme/utils/propToMobile';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';
import Box from '../../Box/native';

import { Styles, ImagePropsBase, defaultProps } from '../styles';


const ImageStyled = styled.Image<ImagePropsBase>`
  ${Styles}
`;

export default function Image({src, ...mobileProps}: ImagePropsBase): JSX.Element {
  console.log(mobileProps);
  return (
    <Box {...mobileProps}>
      <ImageStyled
        style={{
          flex: 1,
        }}
        source={{
          uri: src,
        }}
      />
    </Box>
  );
}

Image.defaultProps = {
  ...defaultProps,
};
