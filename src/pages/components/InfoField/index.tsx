import * as React from 'react';
import styled from 'styled-components';
// import CellLink from '../../elements/CellLink';
import Text from '../../elements/Text';
import Indent from '../../elements/Indent';
import { Colors } from '../../../theme';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const AltText = Text.extend`
  color: ${Colors.DARK_GREY};
`;

export interface InfoFieldInterface {
  propertyName?: any;
  value?: any;
  className?: any;
  onClick?: any;
}

// const getValue = (value: any, onClick: any) => onClick ?
//   (
//   <CellLink onClick={onClick}>
//     {value}
//   </CellLink>
//   ) :
//   <AltText>{value}</AltText>;

const InfoField = ({
  propertyName,
  value,
  onClick,
  className
}: InfoFieldInterface) => (
  <Wrapper className={className}>
    <Text>{propertyName}</Text>
    <Indent width="5px" />
    <AltText>{value}</AltText>
    {/* {getValue(value, onClick)} */}
  </Wrapper>
);

export default InfoField;
