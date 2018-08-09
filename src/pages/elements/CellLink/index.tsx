import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../theme';

const CellText = styled.div`
  font-size: 0.85rem;
  letter-spacing: 0.6px;
  text-align: left;
  color: ${props => (props['data-disable'] ? Colors.GREY : Colors.BLUE)};
  cursor: ${props => (props['data-disable'] ? 'inherit' : 'pointer')};
`;

export interface CellLinkInterface {
  className?: any;
  disable?: any;
  onClick?: any;
  children?: React.ReactNode;
}

const CellLink = ({
  className,
  disable = false,
  onClick,
  children
}: CellLinkInterface) => (
  <CellText
    className={className}
    data-disable={disable}
    onClick={!disable ? onClick : undefined}
  >
    {children}
  </CellText>
);

export default CellLink;
