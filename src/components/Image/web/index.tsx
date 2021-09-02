import React from 'react';
import styled from 'styled-components';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';
import Box from '../../Box/web';

import { Styles, ImagePropsBase, defaultProps } from '../styles';


const StyledImage = styled.img<ImagePropsBase>`
  ${Styles}
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default function Image({src, ...webProps}: ImagePropsBase): JSX.Element {
  const props = withStyledInternalProps(webProps) as any;

  return (
    <Box {...props as any}>
      <StyledImage src={src} />
    </Box>
  );
}

Image.defaultProps = {
  ...defaultProps,
};
