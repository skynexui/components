import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import styled, { useTheme } from 'styled-components/native';

import propToMobile from '../../../theme/utils/propToMobile';
import propToStyle from '../../../theme/utils/propToStyle';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';

import { iconMapByName } from '../iconMapByName';
import { Styles, IconPropsBase, defaultProps } from '../styles';


const StyledSVG = styled(Svg)<IconPropsBase>`
  ${Styles}
`;

export default function Icon(mobileProps: IconPropsBase): JSX.Element {
  const props =  withStyledInternalProps(propToMobile<IconPropsBase>(mobileProps)) as any;
  const theme = useTheme();
  const { color: textColor } = propToStyle('$color', '$textColor')({...props, theme});
  const defaultIcon = iconMapByName[props.$name as 'default']({ Path, G, textColor });

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props as any}
    >
      {defaultIcon}
    </StyledSVG>
  );
}

Icon.defaultProps = defaultProps;
