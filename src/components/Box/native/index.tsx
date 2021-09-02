import React from 'react';
import styled from 'styled-components/native';
import { View, ScrollView } from 'react-native';
import { Styles, BoxPropsBase } from '../styles';
import propToMobile from '../../../theme/utils/propToMobile';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';

const ViewTypes = {
  View,
  ScrollView,
};

type BoxProps = BoxPropsBase;

const StyledComponentsBox = styled.View<BoxProps>`
  ${Styles}
`;

function Box({children, as, ...mobileProps}: BoxPropsBase) {
  const props = withStyledInternalProps(propToMobile<BoxPropsBase>(mobileProps)) as any;
  
  if(as?.mobile === 'ScrollView') {
    const { $justifyContent, $alignItems, ...scrollViewProps } = props;
    return (
      <StyledComponentsBox
        as={ViewTypes.ScrollView}
        contentContainerStyle={{
          justifyContent: $justifyContent,
          alignItems: $alignItems,
          flexGrow : 1,
        }}
        {...scrollViewProps as any}
      >
        {children}
      </StyledComponentsBox>
    );
  }
  
  return (
    <StyledComponentsBox
      as={ViewTypes.View}
      {...props as any}
    >
      {children}
    </StyledComponentsBox>
  );
}

export default Box;
