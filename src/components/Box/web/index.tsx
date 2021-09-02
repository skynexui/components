import styled from 'styled-components';
import withStyledInternalProps from '../../../theme/utils/withStyledInternalProps';
import { BoxPropsBase, Styles } from '../styles';

type BoxProps = BoxPropsBase;
const StyledComponentsBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  ${Styles}
`;

function Box({children, as, ...webProps}: BoxPropsBase) {
  const props = withStyledInternalProps(webProps) as any;
  return (
    <StyledComponentsBox
      as={as?.web}
      {...props as any}
    >
      {children}
    </StyledComponentsBox>
  );
}

export default Box;
