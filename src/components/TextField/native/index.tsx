import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import propToMobile from '@src/theme/utils/propToMobile';
import withStyledInternalProps from '@src/theme/utils/withStyledInternalProps';
import Box from '@src/components/Box/native';
import Text from '@src/components/Text/native';

import { Styles, TextFieldPropsBase, defaultProps } from '../styles';


const TextFieldStyled = styled(Text) <TextFieldPropsBase>`
  ${Styles}
`;

export default function TextField({ ...mobileProps }: TextFieldPropsBase): JSX.Element {
  const props = withStyledInternalProps(propToMobile<TextFieldPropsBase>(mobileProps)) as any;

  return (
    <Box
      background="white"
      border="xpx solid neutral300"
      borderRadius="lg"
      overflow="hidden"
      paddingX="x3"
      paddingY="x2"
      boxShadow="lg"
    >
      <Text variant="body_2" textColor="neutral900" bold>{props.$label}</Text>
      <TextFieldStyled
        // TODO: Solve it better
        $textColor="neutral900"
        $variant="body_2"
        // ./
        value={props.$value}
        placeholder={props.$placeholder}
        {...props as any}
        onChangeText={(text: string) => {
          props.$onChange && props.$onChange({
            value: text,
            name: props.$name,
          });
        }}
      />
    </Box>
  );
}

TextField.defaultProps = {
  ...defaultProps,
  as: TextInput,
};
