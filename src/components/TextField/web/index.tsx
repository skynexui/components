import React from 'react';
import styled from 'styled-components';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';
import Box from '../../Box/web';
import Text from '../../Text/web';

import { Styles, TextFieldPropsBase, defaultProps } from '../styles';


const TextFieldStyled = styled(Text)<TextFieldPropsBase>`
  ${Styles}
`;

export default function TextField({...webProps}: TextFieldPropsBase): JSX.Element {
  const props = withStyledInternalProps(webProps) as any;

  return (
    <Box
      background="white"
      border="xpx solid neutral300"
      borderRadius="lg"
      overflow="hidden"
      paddingX="x3"
      paddingY="x2"
      boxShadow="sm"
    >
      <Text variant="body_2" textColor="neutral900" bold>{props.$label}</Text>
      <TextFieldStyled
        $textColor="neutral900"
        $variant="body_2"
        value={props.$value}
        placeholder={props.$placeholder}
        {...props as any}
        onChange={(event: any) => {
          const target = event.target;
          props.$onChange && props.$onChange({ name: props.$name, value: target.value });
        }}
      />
    </Box>
  );
}

TextField.defaultProps = {
  ...defaultProps,
  as: 'input',
};
